---
product: Caspian Store
title: "script-caspian-store 1.25 — Admin About page with live GitHub release feed"
date: 2026-04-22
type: release
social: false
draft: false
---

v1.25 adds an **About** page to the admin panel — installed version vs. latest public GitHub release, a feed of recent releases with links to the notes, and two lightweight nudges (header badge + virtual todo row) that surface a behind-version install without forcing admins to check manually.

- **`<AdminAboutPage>`** at `/admin/about` — version status badge (up-to-date / update available / offline), 5 most recent releases, Refresh button
- **`CASPIAN_STORE_VERSION`** top-level export, auto-synced from `package.json` at build time
- **Header "Update available" badge** on `<AdminShell>` and a **virtual upgrade todo** at the top of `/admin/todos`, both silent on fetch failure
- **Scaffolder** emits the new admin route on fresh scaffolds; existing installs add one three-line route file

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.25.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
