---
product: Caspian Store
title: "script-caspian-store v8.3.1 — Logo upload errors that tell you the fix"
date: 2026-04-27
type: release
social: false
draft: false
---

Admins on a few installs hit `Firebase Storage: User does not have permission to access 'siteSettings/logo/...'` when uploading a logo. Root cause: stale deployed Storage rules — the `siteSettings/**` block landed in v3.0.0 and consumers who upgraded the library since then never re-ran `firebase deploy --only storage`. The library can't redeploy on your behalf, but as of v8.3.1 the toast itself contains the exact fix command instead of the bare FirebaseError string.

- 🔧 **Self-diagnosing toast** — `<ImageUploadField>` switches on Firebase `error.code` (`unauthorized`, `unauthenticated`, `quota-exceeded`, network) and surfaces a 2-line toast with an actionable description. `unauthorized` reads *“Run `npm run firebase:sync && firebase deploy --only storage`.”* No more silent failures.
- 📦 **`CASPIAN_STORAGE_RULES` exported** — full parity with `CASPIAN_FIRESTORE_RULES`. Plus a new `./storage.rules` subpath in package exports. Build your own deploy tooling without `cp`-ing from `node_modules`.
- 🛡️ **Build-time drift guard** — tsup now asserts `CASPIAN_STORAGE_RULES` matches `firebase/storage.rules` byte-for-byte; the two halves can't diverge silently.
- 📝 **Docs** — `INSTALL.md` §12 Upgrade is unconditional now (resync rules + indexes on **every** upgrade). New troubleshooting entry for `storage/unauthorized`.

**Upgrade**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.3.1
npm run firebase:sync
firebase deploy --only storage
```

If admin uploads were already failing on your install, that deploy is the fix. From now on the next admin who trips this will see the exact command in the toast and resolve it without a ticket.

Full changelog + tarball: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.3.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
