---
product: Caspian Store
title: "script-caspian-store v5.0.0 — Plugins move to their own admin page"
date: 2026-04-24
type: release
social: false
draft: false
---

Plugin management (shipping, payments, email providers) is now a first-class top-level area at `/admin/plugins` with its own sidebar entry — moved out of Settings so merchants stop hunting for it four levels deep.

- **New `<AdminPluginsShell>`** mirrors the existing Settings shell — two-column layout with its own sticky sub-nav.
- **Legacy `/admin/settings/{shipping,payments,email-providers}` URLs still redirect** to the new paths for one release, so bookmarks and deep links don't break.
- **Bundled fix**: `<AccountSidebar>` section clicks now swap the panel instantly on every Next.js adapter. Replaces `basePath` with `onSelect`.

**Upgrade** — existing installs need one new Next.js route; fresh scaffolds get it automatically. Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v5.0.0).

```bash
npm install github:Caspian-Explorer/script-caspian-store#v5.0.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
