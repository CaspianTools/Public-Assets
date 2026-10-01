---
product: Caspian Store
title: "script-caspian-store 9.7.1 — Masonry grid now fills the width fluidly"
date: 2026-06-12
type: release
social: false
draft: false
---

**script-caspian-store v9.7.1** — a quick fix for the admin Products **Masonry view**: it now fills the full width fluidly instead of leaving an empty band on the right.

- 🧱 `.caspian-pmasonry` switched from a fixed `column-count` + viewport breakpoints to container-relative **`column-width`**, so columns adapt to the actual content area and stretch to fill it.
- ↔️ Fluid at every width — more columns on wide screens, fewer when narrow, no breakpoints.
- ✅ **No consumer action required** — CSS-only, ships in `styles.css`.

Upgrade: `npm install github:CaspianTools/script-caspian-store#v9.7.1`

Repo: https://github.com/CaspianTools/script-caspian-store
