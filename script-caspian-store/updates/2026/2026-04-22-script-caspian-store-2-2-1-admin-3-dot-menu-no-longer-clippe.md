---
product: Caspian Store
title: "script-caspian-store 2.2.1 — admin 3-dot menu no longer clipped by the Products table"
date: 2026-04-22
type: release
social: false
draft: false
---

Small fix for an admin-panel UX bug. The 3-dot action menu on the Products page was getting clipped by the table's scroll box — `overflow-x: auto` on the table wrapper implies `overflow-y: auto` per the CSS spec, and the dropdown panel was positioned `absolute` inside it.

- `<DropdownMenu>` now portals its panel to `document.body` with `position: fixed`
- Coords computed from the trigger's `getBoundingClientRect()`, re-measured on `scroll` (capture phase, for nested scroll containers) + `resize`
- Click-outside handler treats clicks inside the portaled panel as 'inside'
- First-item autofocus deferred via `requestAnimationFrame` so it fires after the position measure commits

Every `<DropdownMenu>` consumer — `<AdminProductsList>`, `<AdminProfileMenu>`, anything downstream — picks up the fix automatically.

No consumer action required.

Install / upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.2.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.2.1
