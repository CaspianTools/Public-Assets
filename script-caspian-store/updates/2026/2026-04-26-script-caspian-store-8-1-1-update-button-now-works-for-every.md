---
product: Caspian Store
title: "script-caspian-store 8.1.1 — Update button now works for every consumer"
date: 2026-04-26
type: release
social: false
draft: false
---

The About admin page's **Update to vX.Y.Z** button has been broken on every install since v8.0.0, bouncing every admin off a 403 with `Caller is not an admin`. Root cause was a stale custom-claim check that the rest of the library never set up. v8.1.1 swaps it for the same Firestore `users/{uid}.role == 'admin'` lookup that `firestore.rules`, `storage.rules`, `claimAdmin`, and every admin UI gate already use — so the two definitions stay in lockstep going forward.

- ✅ Drop-in patch — existing admins gain the working Update button on upgrade
- 🔒 Token verification still mandatory; the four other self-update threat-model layers (env opt-in, version regex, owner/repo allowlist, `--ignore-scripts` + rate limit) are unchanged
- 🛠 No custom claims to set, no `functions-admin` redeploy, no token refresh
- 📦 Sibling `create-caspian-store` unaffected — no scaffolder CLI surface change

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.1.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
