---
product: Caspian Store
title: "script-caspian-store v7.0.2 — One-line fix for duplicate storefront header/footer"
date: 2026-04-24
type: release
social: false
draft: false
---

v7.0.0's scaffolder shipped with a double-mount bug — every freshly scaffolded store rendered the header and footer **twice** on every page (storefront, PDP, cart, checkout, account). v7.0.2 fixes the template so new scaffolds are correct out of the box, and adds a regression guard to the smoke test.

### Highlights

- **Root cause** — `CaspianRoot` already wraps every storefront path in `<LayoutShell>` internally. The scaffolded `src/app/layout.tsx` was *also* wrapping `{children}` in `<LayoutShell>`, so the chrome rendered twice per page.
- **Fix** — one-line unwrap in the generated root layout: `<Providers>{children}<DynamicFavicon /></Providers>`.
- **Regression guard** — `scripts/check-scaffold-routes.mjs` now greps the scaffolder template and fails if `<LayoutShell>` ever reappears at the root layout.
- **No library source change** — `CaspianRoot` and `LayoutShell` were already correct. Pure scaffolder template drift.

### Upgrade

Existing sites scaffolded with v7.0.0 or v7.0.1 need a one-file hand-edit (upgrading the library doesn't rewrite your existing `layout.tsx`):

```tsx
// src/app/layout.tsx
<Providers>
  {children}              // was: <LayoutShell>{children}</LayoutShell>
  <DynamicFavicon />
</Providers>
```

Also drop `LayoutShell` from the import line. No Firebase redeploy, no dependency bump.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.0.2
```

`create-caspian-store` sibling: unaffected — `npm create caspian-store@latest` shallow-clones this repo, so new scaffolds pick up the fix automatically.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.0.2
