---
product: Caspian Store
title: "script-caspian-store v7.0.0 — One file owns every page (no more routes on upgrade)"
date: 2026-04-24
type: release
social: false
draft: false
---

Every library version that added a page used to require every consumer to hand-write a Next.js route file. Not anymore.

v7.0.0 ships a single dispatcher, `<CaspianRoot />`, that owns every library URL — storefront, admin, account, auth, content, checkout, setup wizard — via pathname routing. Mount it once at `src/app/[[...slug]]/page.tsx` and stop touching routes forever. Future library pages land as internal cases; consumers never write another route file.

- **What CaspianRoot owns**: `/`, `/cart`, `/checkout`, `/product/:id`, `/collections/:slug`, `/journal/:id`, `/account`, `/auth/login`, `/admin/**` (auto-wrapped in AdminGuard + AdminShell), and every other library URL
- **Scaffolder collapsed** from ~24 per-page writes to one client catch-all + two server API routes
- **Opt-out anywhere** via `homepage` prop, `fallback({ pathname })` render prop, or a more-specific Next.js route that wins over the catch-all

**One-time migration** — rm the old page tree, add one catch-all, restart. Full steps in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.0.0).

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.0.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
