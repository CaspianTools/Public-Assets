---
product: Caspian Store
title: "script-caspian-store v8.21.0 — Mobile-friendly filter bottom drawer"
date: 2026-05-14
type: release
social: false
draft: false
---

Storefront filters on phones used to stack 400–600px of chrome above the product grid. v8.21.0 replaces it with a compact toolbar (filter button with active-count badge + live result count) that opens a bottom drawer carrying the same filter form — sticky **Reset** / **Show {n} results** footer, slide-up animation, `prefers-reduced-motion` opt-out. Desktop is unchanged.

- 📱 New `<ShopFilterDrawer>` — bottom-anchored modal that wraps the shared filter form
- 🧩 New `<ShopFilterFields>` — body-only form you can embed in a sidebar, dialog, or drawer
- 🔢 New `countActiveShopFilters()` helper for badge UIs
- ✅ No consumer code changes — pin the tag and reinstall

```bash
npm install github:CaspianTools/script-caspian-store#v8.21.0
```

Release notes & tarball: https://github.com/CaspianTools/script-caspian-store/releases/tag/v8.21.0
Repo: https://github.com/CaspianTools/script-caspian-store
