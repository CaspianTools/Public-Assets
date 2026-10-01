---
product: Caspian Store
title: "script-caspian-store v9.4.0 — Drag-and-drop Kanban board for admin Orders"
date: 2026-06-12
type: release
social: false
draft: false
---

The admin Orders page now has a **Board** view alongside the table — see your whole fulfillment pipeline at a glance and advance an order by dragging its card.

- 🗂️ One column per status (`pending → on-hold → paid → processing → shipped → delivered → cancelled`), each with a live count
- ✋ Drag a card between columns to change its status — optimistic update, rolled back with a toast if the write fails
- 🪶 Native HTML5 drag-and-drop — zero new dependencies (peer deps stay `firebase` / `react` / `react-dom`)
- 🔧 New optional `defaultView` prop, plus a fix for the missing `on-hold` option in the status filter

Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v9.4.0
```

No schema, rules, or index changes — redeploy and the Board toggle appears on `/admin/orders`.

https://github.com/CaspianTools/script-caspian-store
