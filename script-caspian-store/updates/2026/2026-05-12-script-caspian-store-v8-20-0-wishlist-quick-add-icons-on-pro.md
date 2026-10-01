---
product: Caspian Store
title: "script-caspian-store v8.20.0 — Wishlist + quick-add icons on product cards (admin-toggleable)"
date: 2026-05-12
type: release
social: false
draft: false
---

Product cards now show a **heart** (wishlist) on the top-right of each image and a **shopping-bag** (quick add-to-cart) on the bottom-right of the card. Customers can save and add to cart without ever opening the PDP. Two new toggles in `/admin/appearance` let merchants turn each icon on or off independently.

- 💚 Heart toggles wishlist via the existing `useWishlist().toggle()` — gated also on `features.wishlist` so a globally-disabled wishlist also hides the card icon.
- 🛒 Quick-add fires `useCart().addToCart()` and auto-picks `sizes[0]` for variant products; products without sizes add as-is.
- ⚙️ Both toggles default **on**, so existing stores get the new icons immediately after upgrade. Flip them off in admin if you prefer the cleaner look.
- 🧱 New public export: `<QuickAddToCartButton>` (alongside `<WishlistButton>`), available for custom card layouts.

Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v8.20.0
```

No consumer action required — the new `productCard` field on `ScriptSettings` is optional, so existing Firestore docs fall through to default-on behaviour.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
