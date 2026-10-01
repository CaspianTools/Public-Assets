---
product: Caspian Store
title: "script-caspian-store v8.5.1 — Admin auth via custom claims (fixes logo upload storage/unauthorized)"
date: 2026-04-27
type: release
social: false
draft: false
---

Some installs were still hitting `Firebase Storage: User does not have permission to access 'siteSettings/logo/...'` even after deploying the latest rules from v8.3.1+. Root cause: the rules' `isAdmin()` was a cross-service `firestore.get()` from inside Storage rules — that lookup fails silently for any of a dozen project-config reasons (Firestore not in the `(default)` database, IAM grants missing for the rules service agent, propagation delay, stale `users/{uid}` doc). v8.5.1 moves the primary admin signal onto Firebase Auth custom claims so storage.rules + firestore.rules authorize without ever leaving the rules engine.

- 🔑 **`request.auth.token.role == 'admin'`** is now the primary admin check. The Firestore field stays as a fallback so existing admins keep working while their tokens rotate.
- ⚙️ **`claimAdmin` + `onUserCreate` set the claim** alongside the Firestore write. New `syncAdminClaim` Firestore trigger reconciles the claim on every `users/{uid}` write so the Firebase console, CLI, and future admin CRUD all propagate without each having to remember.
- 🔁 **`<AdminGuard>` force-refreshes the ID token** after promotion, so the new claim is visible immediately instead of after the next ~1h rotation.
- 🛠️ **One-time backfill** — `firebase/seed/sync-admin-claims.mjs` walks every existing admin and sets the claim. Idempotent + `--dry-run`.

**Upgrade**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.5.1
npm run firebase:sync
firebase deploy --only firestore:rules,storage

cd firebase/functions-admin && npm install && cd ../..
firebase deploy --only functions:caspian-admin

node firebase/seed/sync-admin-claims.mjs \
  --project <your-firebase-project-id> \
  --credentials ./service-account.json
```

Then each admin signs out + back in (or `auth.currentUser.getIdToken(true)`) and the new claim takes effect.

Full changelog + tarball: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.5.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
