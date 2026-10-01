---
product: Caspian Store
title: "script-caspian-store v9.15.0 — Common taxonomies catalog (toggles + onboarding)"
date: 2026-06-15
type: release
social: false
draft: false
---

**`github:CaspianTools/script-caspian-store#v9.15.0`**

A broad, categorized catalog of **common product taxonomies** a store can turn on — Brands, Seasons, Occasions, Trends, Materials, Colors, Sizes, Patterns, Fit, Gender, Age group, Care instructions, Country of origin, Certifications — grouped into Merchandising / Attributes / Audience / Care & origin.

Admins enable/disable them on a new **Settings → Taxonomies** sub-page (toggle a whole category or a single one) and during the **/setup onboarding wizard** (new dedicated step). Only enabled taxonomies show in the Catalog → Taxonomies sidebar. A taxonomy that already has terms can't be disabled (the toggle locks on).

Generic taxonomies share one `taxonomyTerms` collection keyed by `type`, with a single generic CRUD page; Brands stays bespoke. The enabled set persists as `SiteSettings.enabledTaxonomies` (defaults to Brands).

This ships the code for the feature documented earlier under v9.13.0 (which had no tag/implementation), so v9.15.0 is the first installable release containing it.

### No consumer action required
Additive. Optional `enabledTaxonomies` defaults to Brands; deploy `firestore.rules` to use generic taxonomies. No composite index needed.

Full notes: https://github.com/CaspianTools/script-caspian-store/releases/tag/v9.15.0
