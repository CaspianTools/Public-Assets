---
product: Caspian Store
title: "script-caspian-store v9.7.0 — a new <MultiSelect> admin building block"
date: 2026-06-12
type: release
social: false
draft: false
---

**script-caspian-store v9.7.0** adds **`<MultiSelect>`** — a searchable, multi-check dropdown for the admin, with removable chips and an optional "Create new" footer.

- 🎯 **Portaled, overflow-proof menu** — it renders to `document.body` with fixed positioning, so it never gets clipped inside a modal or scroll container, and flips up near the viewport edge.
- 🏷️ **Chips, parent/child indentation, and a right-aligned `meta` slot** for counts.
- 🎨 Themeable accent via `--caspian-accent`; styles ship in the already-imported `styles.css`.
- ➕ **Purely additive** — a new optional component + icon, no breaking changes.

Groundwork for a richer admin (multi-category editor + quick-add flows) coming next.

Upgrade:
```bash
npm install github:CaspianTools/script-caspian-store#v9.7.0
```

https://github.com/CaspianTools/script-caspian-store
