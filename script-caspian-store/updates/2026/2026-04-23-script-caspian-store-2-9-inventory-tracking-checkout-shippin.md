---
product: Caspian Store
title: "script-caspian-store 2.9 — Inventory tracking + checkout shipping controls"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.9.0 is out** — first half of Release B.

Two merchant-facing additions, both opt-in, both no-op for stores that don't enable them:

- 📦 **Inventory tracking** — flip on `SiteSettings.inventory.trackStock` and the product editor grows a Stock-per-size grid, product cards pick up Low / Out-of-stock badges, the PLP can auto-hide empty products, the PDP disables out-of-stock sizes with a strike-through, and Add-to-cart refuses to add an empty size.
- 🚚 **Shipping checkout controls** — two toggles at the top of `/admin/shipping-plugins`: hide rates until the shopper has entered a country + postcode, and hide paid options when free shipping qualifies.

New utility module `utils/inventory` exports `resolveStockBadge`, `isProductOutOfStock`, `isSizeOutOfStock`, and friends for consumers bypassing the default storefront components.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.9.0
```

No migrations, no rules changes. Products that don't have a stock map are treated as untracked / always-available. https://github.com/Caspian-Explorer/script-caspian-store
