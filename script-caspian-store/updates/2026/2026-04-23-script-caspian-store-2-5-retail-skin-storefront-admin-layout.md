---
product: Caspian Store
title: "script-caspian-store 2.5 — Retail-skin storefront + admin layout overhaul with notifications"
date: 2026-04-23
type: release
social: false
draft: false
---

Two parallel pushes ship together. **Storefront** gets the cleanWhite theme's PDP, full-page Cart, restyled Checkout, and the product-content + tax primitives behind them. **Admin** gets a shell rebuild where the sidebar runs full-height, the header starts from the right of the sidebar with a toggle at its far left, and a notifications bell drives a new `/admin/notifications` page.

**Storefront**
- `<CartPage>` — full-page shopping bag with sticky order summary + promo-code
- PDP — 4:5 image + vertical thumbnail rail + Details / Reviews / Questions tabs
- `<CheckoutPage>` — card layout, saved-address picker, tax-mode-aware total
- `<RichTextEditor>` + `<HtmlContent>` + `sanitizeRichHtml` for product copy
- Tax + supported countries (none / flat / per-country)

**Admin**
- Full-height sticky sidebar with brand at its top, toggle persisted to `localStorage`
- Header now only spans the content area; notifications bell with unread badge
- `useAdminNotifications()` — derives live from GitHub Releases + pending-reviews + pending-questions counts
- `/admin/notifications` full-list page

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.5.0
# Existing installs also add:
#   src/app/cart/page.tsx
#   src/app/admin/notifications/page.tsx
# (one-line route files each; exact snippets in CHANGELOG.md)
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
