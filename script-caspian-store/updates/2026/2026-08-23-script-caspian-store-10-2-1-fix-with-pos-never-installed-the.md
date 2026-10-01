---
product: Caspian Store
title: "script-caspian-store 10.2.1 — fix: --with-pos never installed the register"
date: 2026-08-23
type: release
social: false
draft: false
---

If you scaffolded a store with `--with-pos`, your project is missing the register's Cloud Functions. The scaffolder registered `caspian-pos` in `firebase.json` and then never copied the directory — so the deploy fails, and until it's deployed the register can scan items and take payment but cannot record the sale.

🐛 **Fixed** — the scaffolder now copies `functions-pos/`, writes its `.gitignore`, and adds a `deploy:pos` script alongside the other four codebases.

💸 **Also fixed, and this one is about money** — cancelling out of a failed payment could silently drop an item from the sale. The naive fix trades that for a *double charge*, so instead the register now asks whether the sale actually landed (`findCommittedSale` on the storage adapter) and branches on the answer: recover and print if it landed, clean id if it definitively didn't, and if the check itself fails, hold the id and tell the cashier not to touch the sale.

🌍 **Three hard-coded English strings** on the register's Settings page now go through i18n in all four languages.

**Upgrade — action needed only if you scaffolded with `--with-pos` before this release:**

```bash
npm install github:CaspianTools/script-caspian-store#v10.2.1
cp -R node_modules/@caspian-explorer/script-caspian-store/firebase/functions-pos ./functions-pos
cd functions-pos && npm install && cd ..
firebase deploy --only functions:caspian-pos
```

New scaffolds need none of this. Everyone else is unaffected.

https://github.com/CaspianTools/script-caspian-store
