---
product: Caspian Store
title: "script-caspian-store 1.19 — First-deploy retry helper + per-codebase .gitignore"
date: 2026-04-22
type: release
social: false
draft: false
---

Shipping the last two papercuts from a clean v1.18.x install: first-ever 2nd-gen deploys panicked customers with an Eventarc error, and upgrades accidentally staged `functions-*/lib/` build output. Both are gone in v1.19.0.

**What's new:**
- `npm run deploy:admin` wraps `firebase deploy` with an auto-retry on the `Permission denied while using the Eventarc Service Agent` first-deploy error (with a visible 60s countdown) — no more red `Error:` scaring customers.
- Same helper runs `firebase functions:artifacts:setpolicy --force` afterwards and reframes the output, so `Error: could not set up cleanup policy` stops looking like a failure when it's really just Artifact Registry image retention.
- Scaffolder now writes per-codebase `.gitignore` into each generated `functions-admin/` and `functions-stripe/` dir — matches `firebase init functions` conventions.
- `deploy:stripe` mirror script for the Stripe codebase.

**Upgrade (existing scaffolded sites):**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.19.0
printf 'node_modules
lib/
' > functions-admin/.gitignore
printf 'node_modules
lib/
' > functions-stripe/.gitignore   # if you use Stripe
# Add deploy:admin / deploy:stripe to package.json scripts — full snippet in the release notes.
```

**Fresh install:** `node node_modules/@caspian-explorer/script-caspian-store/scaffold/create.mjs my-site` picks up everything automatically.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.19.0
