---
product: Caspian Store
title: "script-caspian-store v8.23.1 — Hotfix for /admin/templates routing"
date: 2026-05-16
type: release
social: false
draft: false
---

Same-day hotfix for [v8.23.0](https://github.com/CaspianTools/script-caspian-store/discussions/128). The Templates feature shipped its admin page and nav entry, but the corresponding switch case in the `<AdminRoot>` dispatcher was missed — `/admin/templates` fell through to the default branch and rendered the dashboard instead of the templates page.

Two-line fix in [src/admin/admin-root.tsx](https://github.com/CaspianTools/script-caspian-store/blob/v8.23.1/src/admin/admin-root.tsx). Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v8.23.1
```

No consumer action beyond the install. If you saw the dashboard when you clicked Templates yesterday, this is the fix.

Repo: <https://github.com/CaspianTools/script-caspian-store>
