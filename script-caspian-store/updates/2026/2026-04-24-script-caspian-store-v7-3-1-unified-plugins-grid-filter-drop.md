---
product: Caspian Store
title: "script-caspian-store v7.3.1 — Unified plugins grid + filter dropdowns"
date: 2026-04-24
type: release
social: false
draft: false
---

Admin `/admin/plugins` UX patch. The v7.1.0 split-section layout (Installed table above Available cards, chip filter row above) folds into one card grid with two dropdowns next to the search field.

- **Status** — All / Installed / Available
- **Category** — All / Shipping / Payments / Email

Enabled installs render as cards with an `Installed` badge + `Configure` button. Catalog entries render as cards with an `Install` button and stay visible after install so a merchant can add a second Flat Rate for a different region.

Pure UX patch. Same dispatcher, same URL shape, `?filter=<category>` query param still works, new `?status=...` added.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.3.1
```

Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.3.1).
