---
product: Caspian Store
title: "script-caspian-store 2.3 — storefront search now works + admin analytics for search terms"
date: 2026-04-22
type: release
social: false
draft: false
---

The header search box used to go nowhere. v2.3 wires it up: searches normalize, increment an atomic counter in a new `searchTerms` Firestore collection, and navigate to a new `/search` results page that filters the active-product catalog client-side.

Admins get a **Search terms** page showing every query shoppers have entered, sorted by frequency or recency, with per-row delete and clear-all. Good for spotting demand gaps, naming mismatches, and recurring typos (`sneekers` → you're missing tags on your sneakers).

**What's new:**

- 🔍 Header search form submits → `/search?q=…`
- 📊 Every search logged to Firestore (normalized, atomic increment)
- 🗂️ New admin page: `/admin/search-terms` with sort + filter + delete
- 🌍 i18n-ready result messages (ICU plural)

**Consumer action required:**

1. Re-deploy Firestore rules (new collection).
2. Add a `/search` route and a `/admin/search-terms` route (two lines each — see release notes).

Install / upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.3.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.3.0
