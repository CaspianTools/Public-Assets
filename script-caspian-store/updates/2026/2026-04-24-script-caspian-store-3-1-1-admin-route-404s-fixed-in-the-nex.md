---
product: Caspian Store
title: "script-caspian-store 3.1.1 — Admin route 404s fixed in the Next.js example"
date: 2026-04-24
type: release
social: false
draft: false
---

Patch release: the in-repo `examples/nextjs/` app was missing 9 admin route files added by the v3.0 sidebar redesign — most visibly `/admin/users`, which 404'd under `cd examples/nextjs && npm run dev`. v3.1.1 syncs the example tree to the scaffolder and the two stale routes (`search-terms`, pre-v3 `settings`) are gone.

- ✅ Added: `users`, `subscribers`, `faqs`, `journal`, `pages`, `promo-codes`, `categories`, `collections`, `about` route files
- ✅ Removed: stale `app/admin/search-terms/page.tsx` (export deleted in v3.0)
- ✅ Settings now uses the v3 `[[...slug]]` catch-all
- 🛡️ `scripts/check-scaffold-routes.mjs` extended to also verify `examples/nextjs/`

No consumer action required — example-app-only fix; the shipped tarball, scaffolder, sidebar, and library exports are unchanged.

Upgrade:
```bash
npm install github:Caspian-Explorer/script-caspian-store#v3.1.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v3.1.1
