---
product: Caspian Store
title: "script-caspian-store v7.1.1 — Plugins sidebar header now navigates"
date: 2026-04-24
type: release
social: false
draft: false
---

Quick patch for a v7.1.0 UX regression. When the `Plugins` sidebar entry became an `AdminNavGroup` (so enabled installs could appear as dynamic children), clicking the group header itself stopped navigating to `/admin/plugins` — it only toggled the submenu. With zero plugins enabled that turned the header into a dead click.

v7.1.1 extends `AdminNavGroup` with an optional `href`. When set, the label + icon navigate; the chevron on the right is a separate button that toggles expand/collapse. Plugins group now uses `href: '/admin/plugins'`. Other container-only groups (Catalog, People, Sales, Content) stay click-to-toggle — no behavior change for them.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.1.1
```

Full details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.1.1).
