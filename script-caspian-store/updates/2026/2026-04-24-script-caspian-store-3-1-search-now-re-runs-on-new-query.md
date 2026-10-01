---
product: Caspian Store
title: "script-caspian-store 3.1 — /search now re-runs on new query"
date: 2026-04-24
type: release
social: false
draft: false
---

### Quick fix for a search-results regression in v3.0.x

If a visitor was already on `/search?q=foo` and submitted a new term from the header, the URL updated to `/search?q=bar` but the results stayed on `foo`. Fixed.

**Highlights**

- **Fixes #43** — `<SearchResultsPage>` re-runs the filter whenever the URL's `?q=` changes, not just on first mount
- **New: `CaspianNavigation.searchParams`** — reactive query-string on the adapter contract, sourced from `useSearchParams()` in Next.js
- **Non-breaking** — optional field; existing consumer adapters keep compiling
- **One-line upgrade** for Next.js consumers with a custom `useNavigation` adapter (see release notes); scaffolder users pick up the fix automatically on regenerate

**Install / upgrade**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v3.1.0
```

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v3.1.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
