---
product: Caspian Store
title: "script-caspian-store v9.2.1 — Cart no longer wipes on sign-in"
date: 2026-05-22
type: release
social: false
draft: false
---

Anonymous shoppers who add items to the cart and then sign in to check out used to land on the next page with an empty cart. v9.2.1 fixes that — the cart now merges into the signed-in account instead of being clobbered by an empty `carts/{uid}` doc.

- Cart provider mirrors the wishlist merge pattern: read the anon cart, fold it into the signed-in cart, sum quantities for matching `(productId, size, color)` lines.
- Anon → real transitions during v9.1.0's inline guest checkout are covered via an in-memory snapshot — no Firestore rule loosening required.
- Local storage is cleared after a successful merge so the anon cart can't bleed back in on a later sign-out → sign-in cycle.

Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v9.2.1
```

No other consumer action. Repo: https://github.com/CaspianTools/script-caspian-store
