---
product: Caspian Store
title: "script-caspian-store v7.1.0 — Plugins consolidation + dynamic sidebar"
date: 2026-04-24
type: release
social: false
draft: false
---

Four admin-UX changes under the mod1197 banner — all internal to the v7 single-mount dispatcher, so consumers upgrade with `npm install` and nothing else.

- **Unified Plugins page** at `/admin/plugins` with search + `All / Shipping / Payments / Email` chip filter. Installed plugins across all three categories render in one table; the catalog browser shows available plugins as a merged grid.
- **Dynamic sidebar** — the `Plugins` top-level item is now an `AdminNavGroup` whose children populate live from enabled installs. Enable a plugin, get a one-click sidebar shortcut to its configure view; disable it, the shortcut disappears. No child appears before the first plugin is enabled.
- **Per-install pages** at `/admin/plugins/<pluginId>/<installId>` auto-open the existing configure dialog for that install — no duplicated UX.
- **Settings sub-nav grew** by two items: `Appearance` (moved down from the top level) and `Shipping options` (lifted out of the shipping plugins page where it was about the wrong thing).

Legacy URLs (`/admin/appearance`, `/admin/plugins/shipping|payments|email-providers`) redirect for one release.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.1.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store

Full details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.1.0).
