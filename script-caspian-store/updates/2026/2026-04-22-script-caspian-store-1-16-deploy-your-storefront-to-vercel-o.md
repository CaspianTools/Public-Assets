---
product: Caspian Store
title: "script-caspian-store 1.16 — Deploy your storefront to Vercel or Firebase App Hosting"
date: 2026-04-22
type: release
social: false
draft: false
---

Shipping the missing piece of the consumer setup: a documented, repeatable path for deploying the Next.js storefront itself. Until now, `INSTALL.md` covered every backend step but stopped short of taking the site to prod.

**What's new in 1.16:**
- Scaffolded projects now ship an `apphosting.yaml` with the seven `NEXT_PUBLIC_*` vars pre-declared for Firebase App Hosting
- New §8 in the generated README with side-by-side Vercel and App Hosting deploy one-liners
- New §11 in `INSTALL.md` for the manual-install path, covering the same two hosts
- No source changes — pure scaffolder + docs

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.16.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.16.0
