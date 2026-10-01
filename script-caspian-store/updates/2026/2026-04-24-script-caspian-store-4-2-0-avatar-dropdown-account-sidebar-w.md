---
product: Caspian Store
title: "script-caspian-store 4.2.0 — avatar dropdown, account sidebar, wishlist section"
date: 2026-04-24
type: release
social: false
draft: false
---

The signed-in storefront experience gets a cohesive redesign. Three user-visible changes, one schema addition — all additive.

- **Header avatar dropdown** replaces the initials button + inline `[Admin]` chip. Single avatar opens a dropdown with My account / Orders / Admin (admins only) / Sign out. Heart + cart icons untouched.
- **Account page sidebar layout.** `<AccountPage>` goes from a long vertical scroll to a two-column layout with five URL-driven sections: Profile, Orders, Addresses, Wishlist, Security. Mobile collapses to a horizontal tab strip.
- **New `<WishlistPanel>`** finally gives shoppers a place to see and manage their saved items — responsive grid with per-item Add-to-cart + Remove, empty state links to /shop.
- **Profile editing gains phone** (optional). Email is read-only in v1 (Firebase Auth re-auth is a separate ticket).
- **Legacy country-name handling** in the address book — the list renders ISO codes as names via `countryName()`, and editing a legacy free-form name prefills the Select via the new `findCountryCode()` helper.

Upgrade — no consumer action required:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v4.2.0
```

https://github.com/Caspian-Explorer/script-caspian-store
