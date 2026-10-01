---
product: Caspian Store
title: "script-caspian-store 2.2 — Stripe: test + live keys with a mode toggle"
date: 2026-04-22
type: release
social: false
draft: false
---

**v2.2.0** makes flipping Stripe between test and live a one-click operation.

### What's new
- 🧪 Two dedicated publishable-key fields on the Stripe install: `publishableKeyTest` and `publishableKeyLive`.
- 🎚 A **Mode** dropdown — paste both keys once, flip the dropdown to switch which pair the storefront uses.
- 🪄 Auto-migration — v2.0/v2.1 installs open with the old `publishableKey` already moved into the right `pk_test_` / `pk_live_` slot, no re-paste.

### Heads up
The server-side `STRIPE_SECRET_KEY` (Cloud Functions secret) still has to be rotated manually when you flip modes. The dropdown hint text calls this out.

### Upgrade
```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.2.0
```

No other steps required. Existing installs keep working until an admin opens **Configure** on the Stripe card, at which point the new shape is persisted on Save.

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.2.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
