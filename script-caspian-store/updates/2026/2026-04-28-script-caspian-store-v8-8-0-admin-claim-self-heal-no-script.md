---
product: Caspian Store
title: "script-caspian-store v8.8.0 — admin claim self-heal, no script needed"
date: 2026-04-28
type: release
social: false
draft: false
---

Closes the third and final iteration of `#store-1210`. v8.6.0 fixed the *diagnostic*; v8.8.0 fixes the *recovery*.

The gap v8.8.0 closes: admins promoted before the `syncAdminClaim` trigger was deployed had no client-side recovery — the trigger only fires on new writes, so the claim genuinely didn't exist server-side. Token refresh had nothing to pick up. The only fix was a CLI script.

This release adds an `ensureAdminClaim` callable (mirrors `users/{uid}.role` to the Auth custom claim, never escalates privilege beyond what Firestore already says) and the library auto-invokes it on admin sign-in and on `storage/unauthorized` retry. Stale-claim cases now self-heal silently.

**Upgrade once + redeploy `caspian-admin` Functions** — every existing admin's next sign-in heals automatically:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.8.0
cd firebase/functions-admin && npm install && cd ../..
firebase deploy --only functions:caspian-admin
```

New exported helper `tryEnsureAdminClaim({ functions, auth })` for consumer-extension code. `functions-admin` bumped 0.5.0 → 0.6.0.

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.8.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
