---
product: Caspian Store
title: "script-caspian-store v8.0.0 — End of the v7.x firefighting cycle"
date: 2026-04-25
type: release
social: false
draft: false
---

v8.0.0 ships a coordinated fix-all that ends the eleven-release v7.x patch cadence. One install command, three classes of problems addressed.

**What's in it**
- 🔧 **Build race fixed.** `tsup.config.ts` consolidated so all three entries (`.`, `./firebase`, `./server`) reliably ship `.d.ts` — previously the parallel-clean race silently dropped sibling type files and consumers hit `TS7016` on typecheck.
- 🔐 **Hardened self-update.** `--ignore-scripts`, env-gated in every environment (not just production), per-instance rate limit, env-var redaction in stderr responses, GitHub-naming validation on owner/repo overrides.
- 🔑 **Email API keys → Cloud Secret Manager.** SendGrid + Brevo keys leave Firestore. One `firebase functions:secrets:set` per provider, redeploy, and they're invisible to backups, exports, and admin reads.
- 🛡️ **Brevo SSRF cleared.** `@getbrevo/brevo` bumped 2.x → 5.0.4 to drop the transitive `request` library (CVE-2024-6225).
- 📚 **Docs realigned.** README + INSTALL + create-caspian-store no longer pin extinct `v1.9.0` / `v1.18.2`. INSTALL §3's manual-install layout snippet stops resurrecting the v7.0.2 double-header bug.
- ✅ **Scaffolded preflight.** Generated `providers.tsx` throws a clear error if any `NEXT_PUBLIC_FIREBASE_*` is missing — no more silent blank-page-on-first-run.

**Upgrade**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.0.0
# Then set CASPIAN_ALLOW_SELF_UPDATE=true everywhere, set the email
# secrets via firebase functions:secrets:set, redeploy caspian-email.
```

Full upgrade checklist + breaking changes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.0.0

Repo: https://github.com/Caspian-Explorer/script-caspian-store
