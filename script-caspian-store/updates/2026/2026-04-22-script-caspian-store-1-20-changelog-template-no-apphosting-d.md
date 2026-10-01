---
product: Caspian Store
title: "script-caspian-store 1.20 — CHANGELOG template, --no-apphosting, dashboard hydration fix"
date: 2026-04-22
type: release
social: false
draft: false
---

Polish pass following v1.19. Three independent items — none require consumer action on upgrade.

**What's new:**
- **`--no-apphosting` scaffolder flag.** If you deploy the storefront to Vercel, the auto-generated `apphosting.yaml` has always been unused noise. Pass `--no-apphosting` to suppress it. Default stays "emit" so nothing changes for Firebase App Hosting users.
- **Formalized CHANGELOG upgrade-notes.** Every release now carries exactly one of `### Consumer action required on upgrade` (with exact commands) or `### No consumer action required` (with a one-line reason). Tells you at a glance whether an upgrade needs attention. Back-filled v1.17.0 which previously had neither.
- **AdminDashboard hydration warning fixed.** The tile value used to render `<Skeleton>` (a `<div>`) inside a `<p>`. Silent in production, but dev-mode React would flood the console with `<p> cannot contain a nested <div>`. Swapped to `<div>` with identical styles.

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.20.0
```
No code changes needed on your end.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.20.0
