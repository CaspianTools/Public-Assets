---
product: Caspian Store
title: "script-caspian-store v2.12.1 — Self-update now tells you what to fix"
date: 2026-04-23
type: release
social: false
draft: false
---

Quick patch for anyone who hit `Update failed — Unable to detect a Project Id in the current environment` on the **/admin/about** Update button.

The self-update API route needs your Firebase project ID at runtime, but Vercel and a few other hosts don't expose `NEXT_PUBLIC_FIREBASE_PROJECT_ID` to server code by default. Previously the raw Google Auth Library error surfaced verbatim with no clue what to do. Now:

- The admin About page detects the project-id error and shows a remediation panel with the exact env var to set and platform-specific steps for Vercel, Firebase App Hosting, and self-hosted Node — **no need to re-paste your scaffolded route**, this is library code in `dist/`.
- New scaffolds (or anyone re-pasting `src/app/api/caspian-store/update/route.ts`) get an extended fallback chain (`GOOGLE_CLOUD_PROJECT` → `GCLOUD_PROJECT` → `FIREBASE_PROJECT_ID` → `NEXT_PUBLIC_FIREBASE_PROJECT_ID` → `CASPIAN_FIREBASE_PROJECT_ID`) plus a fail-fast HTTP 500 with the same guidance.
- INSTALL.md gains a Self-update env vars subsection covering the requirement and the read-only-filesystem caveat for serverless deploys.

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.12.1
```

No consumer action required for the upgrade itself. If you were previously hitting the project-id error, set `NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>` on your host and redeploy.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.12.1
