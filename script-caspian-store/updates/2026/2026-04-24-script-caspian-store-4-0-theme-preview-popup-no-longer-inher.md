---
product: Caspian Store
title: "script-caspian-store 4.0 — Theme preview popup no longer inherits the admin shell"
date: 2026-04-24
type: release
social: false
draft: false
---

The theme preview popup at `/admin/appearance/preview` was rendering inside the admin sidebar + topbar because its route inherited `app/admin/layout.tsx`. v4.0.0 moves the default preview route to `/admin-preview/appearance`, outside the admin tree, so the popup renders a clean storefront mockup.

- Theme preview popup now escapes `<AdminShell>` — no more sidebar or topbar wrapping the storefront mockup
- Default `previewPath` on `<AdminAppearancePage>` is now `/admin-preview/appearance` (override the prop to keep the old URL)
- Scaffolder + example app updated to match — fresh `npm create caspian-store@latest` sites get the fix automatically
- Breaking: existing installs must move `src/app/admin/appearance/preview/page.tsx` → `src/app/admin-preview/appearance/page.tsx`, or pass `previewPath="/admin/appearance/preview"` explicitly

Upgrade:

```
npm install github:Caspian-Explorer/script-caspian-store#v4.0.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v4.0.0
