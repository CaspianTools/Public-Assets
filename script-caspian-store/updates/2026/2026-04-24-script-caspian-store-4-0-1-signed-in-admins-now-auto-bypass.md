---
product: Caspian Store
title: "script-caspian-store 4.0.1 — Signed-in admins now auto-bypass Coming Soon mode"
date: 2026-04-24
type: release
social: false
draft: false
---

Patch release fixing a mismatch between what v2.7's release notes promised and what the code actually did.

If you enabled Coming Soon mode with `allowAdminPreview: true`, signed-in admins were supposed to see the storefront automatically — instead they were stuck behind the splash like everyone else, and had to manually append `?caspian-preview=1` to preview their own site.

**Fixed in v4.0.1:**

- 🔒 `LayoutShell` now reads the auth context and lets `role === 'admin'` users through the Coming Soon gate automatically
- 🎛️ Unchecking "Let signed-in admins preview" in admin settings now actually disables admin bypass (used to only affect the `?caspian-preview=1` path)
- 🔁 Same admin source of truth as `<AdminGuard>` — no new setting, no migration, no consumer action required

**Upgrade:**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v4.0.1
```

Full changelog: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v4.0.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
