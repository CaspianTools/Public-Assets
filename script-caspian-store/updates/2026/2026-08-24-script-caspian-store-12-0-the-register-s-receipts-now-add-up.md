---
product: Caspian Store
title: "script-caspian-store 12.0 — the register's receipts now add up"
date: 2026-08-24
type: release
social: false
draft: false
---

A full read of the point-of-sale code turned up sixteen defects. They are all fixed in v12.0.0, and the till now ships as a PWA and only as a PWA.

- 🧾 **Receipts that add up.** Lines and subtotal used to come from the open ticket while the total came back from the server, so a price edited mid-sale printed a slip that contradicted itself. `commitPosSale` now returns the lines it priced, and the receipt is built from those.
- 💸 **No more lost sales.** A sale interrupted mid-send stayed marked `sending` forever — invisible to every retry path. And an offline sale taken after the leased receipt block ran dry printed a receipt with no number on it at all.
- 🏷️ **Line discounts have a button.** The whole path was built — payload, pricing, server validation, receipt renderer — with nothing calling it. Now each ticket line has a markdown control.
- 🖥️ **PWA only.** The Tauri desktop shell is gone. Install the till from Chrome or Edge with the register's own Install button.

**Upgrading needs one extra step** — redeploy the POS functions, or receipts keep using the till's scanned prices:

```bash
npm install github:CaspianTools/script-caspian-store#v12.0.0
cd firebase/functions-pos && npm install && npm run build && cd ../..
firebase deploy --only functions:caspian-pos
```

Full notes: https://github.com/CaspianTools/script-caspian-store/releases/tag/v12.0.0
Repo: https://github.com/CaspianTools/script-caspian-store
