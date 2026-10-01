---
product: Caspian Store
title: "script-caspian-store 2.12 — Tax display options + closes Release C"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.12.0 closes Release C.**

Layers WooCommerce-style tax display/calculation preferences on top of the existing v2.5 tax surface (flat rate or per-country). Full tax classes and multi-rate tables stay out of scope for v2.x — those would need a breaking schema change we'll revisit for v3.

- 🧾 **`SiteSettings.taxConfig`** with seven fields — prices-include-tax, calculate-based-on (shipping / billing / store), shop price display mode, cart/checkout price display mode, configurable price suffix (supports `{rate}` placeholder), plus a couple of fields reserved for future multi-class work.
- 💰 **`Order.tax`** — additive optional field. When present, `total = subtotal + shipping + tax - discount`. Existing orders keep working unchanged.
- 🎨 **Admin surface** — a new 'Tax display options' sub-section inside the existing Tax & supported countries block. Opt-in via a checkbox so merchants who don't care see nothing new.
- 🌍 **Checkout tax-based-on** — CheckoutPage now honors `taxConfig.taxBasedOn === 'store'` (tax computed from your shop country, regardless of where the shopper is).
- 🏷 **Price suffix** — ProductCard renders the configured suffix after every price. Threaded through ProductGrid and ProductListPage automatically.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.12.0
```

No migrations, no rules changes. Stores that don't configure `taxConfig` see zero change. https://github.com/Caspian-Explorer/script-caspian-store
