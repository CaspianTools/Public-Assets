---
product: Caspian Store
title: "script-caspian-store v8.2.0 — Appearance is one click away again"
date: 2026-04-27
type: release
social: false
draft: false
---

Appearance is now a sidebar child of Settings (matching the Catalog/People/Plugins pattern), restoring its pre-v7.1.0 top-level URL `/admin/appearance`. The remaining Settings tabs — General, Shipping options, Emails, Languages — keep the in-page rail unchanged.

- Sidebar gains an expandable **Settings** group with **Appearance** as its child
- `/admin/appearance` is the canonical URL again — `/admin/settings/appearance` redirects for one release
- Drop-in upgrade — no consumer action required
- All four other Settings sub-tabs unchanged

Upgrade:

```
npm install github:Caspian-Explorer/script-caspian-store#v8.2.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.2.0
