---
product: Caspian Store
title: "script-caspian-store v8.2.4 — Product detail tabs centered + Details always visible"
date: 2026-04-27
type: release
social: false
draft: false
---

Small visual fix to the product detail page tab row.

- The row (`Details | Reviews | Questions`) now centers on the page with a 32px gap between labels.
- `Details` is always present as the first tab — even on products without `details` HTML or a long-form `description`. When the body is empty, a muted `No additional details.` placeholder shows in place.
- `Details` remains the default active tab on first load.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.2.4
```

No consumer action required. Visual-only.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.2.4
