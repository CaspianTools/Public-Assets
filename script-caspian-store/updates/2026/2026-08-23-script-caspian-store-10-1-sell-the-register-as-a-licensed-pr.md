---
product: Caspian Store
title: "script-caspian-store 10.1 - sell the register as a licensed product"
date: 2026-08-23
type: release
social: false
draft: false
---

**v10.1.0 lets you sell the register as a licensed product.**

Mint an Ed25519-signed key per sale, the register verifies it offline, and the server binds it to one computer.

🔑 **One key, one computer.** `node scripts/generate-pos-signing-key.mjs` once, then `node scripts/mint-pos-license.mjs --name "Acme Shop"` per sale. The customer pastes it at `/pos/settings`.

📋 **See what you have sold.** `/admin/pos` lists every activated licence, which computer it runs on, and attempts from other machines — with a **Release** button for when a till is replaced or wiped. Without that, a customer who paid gets locked out by their own IT.

🚫 **Off unless you turn it on.** No vendor key configured means no licence box, no banner, no admin table. Ordinary shops see nothing.

**Worth being straight about what this enforces.** This library is MIT with public source, so the browser-side check is a speed bump, not a lock. The half with teeth is server-side seat binding, which leaves an auditable record when a key turns up on a second machine. Enforcement is **warning-only by design** — a licence problem shows a dismissible strip and never blocks a sale, because a shop that cannot serve a customer over paperwork is worse than an unlicensed shop.

```bash
npm install github:CaspianTools/script-caspian-store#v10.1.0
```

No consumer action required — nothing changes for an existing store.

https://github.com/CaspianTools/script-caspian-store
