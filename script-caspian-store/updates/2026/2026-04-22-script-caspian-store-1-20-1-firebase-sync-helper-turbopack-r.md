---
product: Caspian Store
title: "script-caspian-store 1.20.1 — firebase:sync helper + turbopack.root pin"
date: 2026-04-22
type: release
social: false
draft: false
---

Carryover polish from earlier install reports. Scaffolder gains a rule-sync helper and a workspace-root pin for Turbopack.

**What's new:**
- **`npm run firebase:sync`** copies `firestore.rules`, `firestore.indexes.json`, and `storage.rules` from the installed package into your project root. Run it after any upgrade the CHANGELOG flags as touching rules or indexes — no more silently deploying yesterday's rules because `npm install` only updated `node_modules`.
- **Generated `next.config.mjs` pins `turbopack.root`** to the config file's own dir. Fixes the `Warning: Next.js inferred your workspace root` noise for anyone whose home dir contains a stray `package-lock.json`.
- **Verified AdminGuard text** still shows the three-path recovery list (Claim admin / CLI / Firestore console) — no regressions from v1.18.0.

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.20.1
# Add to your package.json scripts:
#   "firebase:sync": "node node_modules/@caspian-explorer/script-caspian-store/firebase/scripts/sync-rules.mjs"
npm run firebase:sync
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.20.1
