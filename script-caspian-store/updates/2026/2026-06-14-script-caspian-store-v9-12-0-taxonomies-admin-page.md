---
product: Caspian Store
title: "script-caspian-store v9.12.0 — Taxonomies admin page"
date: 2026-06-14
type: release
social: false
draft: false
---

**`github:CaspianTools/script-caspian-store#v9.12.0`**

A new **Taxonomies** entry under the admin Catalog group opens a page for managing product taxonomies that don't warrant their own top-level link — starting with **Brands**, and built to take more later.

The page mirrors the **Settings** page's two-column layout: a sticky secondary sidebar listing taxonomy *types* on the left, and the selected type's CRUD list on the right. It's **catalog-driven** — `TAXONOMY_CATALOG` keys each type to its `{ slug, label, icon, Component }`, so adding a future taxonomy is a one-line addition plus its CRUD page. Brands, the first entry, reuses the existing `AdminProductBrandsPage` unchanged.

The old top-level `/admin/brands` link is replaced by `/admin/taxonomies`; visiting `/admin/brands` now redirects to `/admin/taxonomies/brands` for one release.

### No consumer action required
Additive nav + route change only. `AdminProductBrandsPage` is still exported and still rendered (now inside the Taxonomies shell), and the legacy `/admin/brands` URL redirects automatically. Consumers who pass their own `navItems` keep full control of the sidebar.

Full notes: https://github.com/CaspianTools/script-caspian-store/releases/tag/v9.12.0
