---
product: Caspian Store
title: "script-caspian-store 10.5 — the register keeps selling when the internet drops"
date: 2026-08-23
type: release
social: false
draft: false
---

A till no longer stops when the connection does. The cashier scans, takes payment and prints a receipt exactly as always; the sale is written to the computer instead of the shop and sent by itself when the connection returns.

🧾 **The customer gets a real receipt.** Not a slip saying it isn't one — a genuine receipt number, from a block the till reserves in advance while it's still online.

💾 **The sale hits disk before the network is touched.** A request that timed out and a request that was refused are indistinguishable from the client, so the queue decides *before* acting rather than guessing after. IndexedDB, not localStorage — spending the receipt number and writing the sale have to be one atomic step.

🔌 **The register never learns whether the network is up.** The new adapter wraps the old one, so `PosRegister` just asks for a commit and gets an answer either way.

🧭 **An error taxonomy it never had.** The register only ever read `error.message`, which for any infrastructure failure is the literal string `INTERNAL`. Now: transient failures back off, an expired token refreshes without burning an attempt, a revoked role pauses the queue and says so, a deleted product stops for a person.

Three limits, written into the manual rather than left to be discovered: clearing site data destroys waiting sales, they only send while a register tab is open, and an item the till has never downloaded can't be scanned offline.

```bash
npm install github:CaspianTools/script-caspian-store#v10.5.0
firebase deploy --only functions:caspian-pos
```

https://github.com/CaspianTools/script-caspian-store
