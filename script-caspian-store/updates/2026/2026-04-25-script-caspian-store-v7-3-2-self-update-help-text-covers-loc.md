---
product: Caspian Store
title: "script-caspian-store v7.3.2 — Self-update help text covers localhost dev"
date: 2026-04-25
type: release
social: false
draft: false
---

Tiny patch. The 'Unable to detect a Project Id' help panel in `<AdminAboutPage>` listed Vercel / Firebase App Hosting / self-hosted Node fixes but missed the most common case — localhost `next dev` with a `.env.local` that's missing `NEXT_PUBLIC_FIREBASE_PROJECT_ID` (or with the var present but the dev server never restarted to pick it up). The new help bullet covers it.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.3.2
```

Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.3.2).
