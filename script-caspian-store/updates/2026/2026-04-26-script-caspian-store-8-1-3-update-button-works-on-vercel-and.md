---
product: Caspian Store
title: "script-caspian-store 8.1.3 — Update button works on Vercel and other non-GCP hosts"
date: 2026-04-26
type: release
social: false
draft: false
---

v8.1.1 fixed which admin definition the Update button uses but accidentally moved the Firestore lookup onto a path that needs Application Default Credentials — fine on Cloud Run / App Engine, broken on Vercel / Netlify / any generic Node host. Consumers on those hosts saw `Could not load the default credentials.` v8.1.3 reads `users/{uid}.role` via Firestore REST using the caller's own ID token, so the route is ADC-free.

- ✅ Drop-in patch — Update button starts working on Vercel/Netlify after upgrade
- 🔒 Threat model unchanged: signed token + Firestore-role admin + the four existing layers (env opt-in, version regex, owner/repo allowlist, `--ignore-scripts` + rate limit)
- 🛠 No service-account JSON, no `GOOGLE_APPLICATION_CREDENTIALS`, no consumer hand-edit
- 📦 Sibling `create-caspian-store` unaffected

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.1.3
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
