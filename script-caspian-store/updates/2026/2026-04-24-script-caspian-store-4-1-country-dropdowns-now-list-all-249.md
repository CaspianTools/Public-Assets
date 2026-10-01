---
product: Caspian Store
title: "script-caspian-store 4.1 — Country dropdowns now list all 249 ISO countries"
date: 2026-04-24
type: release
social: false
draft: false
---

Every country dropdown in @caspian-explorer/script-caspian-store now offers the full ISO 3166-1 alpha-2 list of 249 countries — from admin supported-countries and shipping-eligibility pickers to the customer checkout and My Account address book.

Before this release the library carried three hardcoded subsets (90 / 40 / 6) and a freeform text field for customer addresses. Merchants whose country was outside the 90-entry admin picker were told in a source comment to edit Firestore directly. That's fixed — one source of truth at `src/utils/countries.ts`, everything routes through it.

### Highlights

- ⚡ Admin country picker (supportedCountries + shipping eligibility) now covers all 249 ISO 3166-1 alpha-2 countries, not 90.
- 🔍 Localization tab's default-country dropdown is now a searchable combobox — type “ger” to find Germany.
- 🛒 Unconfigured-store checkout fallback grows from 6 countries to the full list so a fresh install never silently rejects a shopper.
- 👤 My Account Address Book country field is now a searchable dropdown instead of freeform text. Legacy values render untouched — no migration.

### Upgrade

```bash
npm install github:Caspian-Explorer/script-caspian-store#v4.1.0
```

No consumer action required. `ISO_COUNTRIES` and `IsoCountry` public exports keep compiling (now re-exported from the new utility).

👉 https://github.com/Caspian-Explorer/script-caspian-store
