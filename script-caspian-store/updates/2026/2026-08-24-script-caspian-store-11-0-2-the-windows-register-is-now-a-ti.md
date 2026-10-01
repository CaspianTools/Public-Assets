---
product: Caspian Store
title: "script-caspian-store 11.0.2 — the Windows register is now a till with no website"
date: 2026-08-24
type: release
social: false
draft: false
---

The Windows register app used to be a window onto your shop's hosted `/pos` page, and it asked for that address the first time it opened. As of **Caspian Register 1.0.0** there is no address at all: the register is bundled into the app and runs entirely on the computer it is installed on.

- 🔌 **Nothing online.** Items, staff, sales and receipt numbers live in a local database inside the app. Unplug the network cable and the till works exactly the same.
- ⚡ **Nothing to set up.** Install, open, create one account, add your items. No website, no Firebase project, no accounts service.
- 🗄️ **Your data is yours alone** — which cuts both ways. There is no cloud copy, so **Back office → Backup** is the only copy there will ever be. Save it off the machine weekly.
- 🧩 **No library source changed.** The offline app is assembled from the existing public API — `standalone`, `CaspianRoot`, `features.posOnly` and the framework-adapter contract.

Running a hosted Caspian store? Nothing changes for you: the cloud register at `/pos` and its browser install are untouched. The desktop app's cloud mode is what went away.

```bash
npm install github:CaspianTools/script-caspian-store#v11.0.2 firebase
```

The library side of this release is documentation only — the register manual and the version stamp — so existing installs are unaffected.

https://github.com/CaspianTools/script-caspian-store
