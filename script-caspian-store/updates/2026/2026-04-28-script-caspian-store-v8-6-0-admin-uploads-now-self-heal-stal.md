---
product: Caspian Store
title: "script-caspian-store v8.6.0 — admin uploads now self-heal stale tokens"
date: 2026-04-28
type: release
social: false
draft: false
---

Closes the third iteration of `#store-1210`. Earlier rounds (v8.3.1 self-diagnostic toast, v8.5.1 custom claims) left one residual failure mode: an admin whose ID token was issued before the `role: 'admin'` claim was set still saw `storage/unauthorized` on their first upload — and the toast told them to redeploy rules, which did nothing because the rules were already correct.

v8.6.0 fixes that on three layers:

- **Auto-heal at the upload site** — `uploadAdminImage` now force-refreshes the ID token and retries once on `storage/unauthorized`. The common case self-heals invisibly.
- **Pre-emptive refresh on admin sign-in** — `AuthContext` compares Firestore role to token claim and force-refreshes once if they disagree (gated to once per uid).
- **Precise diagnostic when retry fails** — new `diagnoseUploadDenial()` returns `notAdmin` / `claimNotSet` / `rulesStale`; the toast now names the *right* fix command instead of always blaming stale storage rules.

Test coverage: four new positive admin custom-claim Storage write tests, closing a gap that's been documented since v1.21.

**No consumer action required** — works against existing v8.5.x deployments unchanged. Upgrade with:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.6.0
```

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.6.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
