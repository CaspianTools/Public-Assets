---
product: Caspian Store
title: "script-caspian-store 1.22 — Product admin overhaul: category dropdown, color palette, image upload"
date: 2026-04-22
type: release
social: false
draft: false
---

Second slice of the admin-UX overhaul. Products are no longer free-text everywhere.

- **Hierarchical category dropdown** in the product editor — indented by depth, stored as id so renames no longer orphan your catalog. Comes with a one-off migration script that rewrites existing `Product.category` from name → id.
- **Fixed-palette color picker** — 13 named colors, with a warning hint for any legacy free-text colors so you can normalise as you edit.
- **Multi-image upload** via the `<ImageUploadField>` from v1.21. URL paste still available.
- **Product list, completely redone** — sequential `#` column, status / category / brand filter bar, Edit / View on storefront / Delete collapsed into a 3-dot menu. Each row has a direct link to the storefront PDP.
- **New `<DropdownMenu>` primitive** + four new inline SVG icons, exported from the main entry — headless, click-outside + ESC, arrow-key focus.
- **Storage rule + tests** for `products/**` (admin write, public read, raster-only — SVG rejected for product photos by design).

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.22.0
cp node_modules/@caspian-explorer/script-caspian-store/firebase/storage.rules .
firebase deploy --only storage
node node_modules/@caspian-explorer/script-caspian-store/firebase/scripts/migrate-product-category-to-id.mjs \
  --project <your-project> --credentials ./service-account.json --dry-run
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.22.0
