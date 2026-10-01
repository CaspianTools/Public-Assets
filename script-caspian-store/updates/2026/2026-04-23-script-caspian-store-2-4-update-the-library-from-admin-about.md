---
product: Caspian Store
title: "script-caspian-store 2.4 — Update the library from /admin/about with one click"
date: 2026-04-23
type: release
social: false
draft: false
---

Knowing an update was available was only half the job. **v2.4** adds an **Update to vX.Y.Z** button to `/admin/about` that runs the install end-to-end: the Firebase ID token goes to a companion API route, `firebase-admin` verifies the caller's `admin` custom claim, `npm install` runs on the host, and the Node process exits so a process manager respawns with the new dep loaded. A Copy-install-command button sits alongside as the universal fallback.

- **One-click install** from the admin About page when a new release is out
- **Admin-claim gated** via `firebase-admin` ID-token verification — anonymous POSTs get 401
- **Production opt-in** via `CASPIAN_ALLOW_SELF_UPDATE=true` — can't be turned on by accident
- **Honest platform matrix** — works on dev and self-hosted Node; serverless (Vercel et al.) falls back to Copy-command

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.4.0
# Existing scaffolds also need: move firebase-admin to `dependencies`,
# add src/app/api/caspian-store/update/route.ts, set CASPIAN_ALLOW_SELF_UPDATE in prod.
# See CHANGELOG.md for exact commands.
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
