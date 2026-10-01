---
product: Caspian Store
title: "script-caspian-store 8.3 — SEO-friendly product URLs + Write-a-Review star fix"
date: 2026-04-27
type: release
social: false
draft: false
---

Two storefront fixes in one minor release.

**Product URLs now use a slug** derived from the product name — `/product/black-leather-jacket` instead of `/product/ZSVNBOkVKSf214KxxSKd`. Better SEO, shareable links, friendlier paste-into-Slack. New products auto-generate a slug on save; legacy products keep working via transparent id-fallback in the route resolver and pick up a slug the next time an admin saves them. Collision suffixes (`-2`, `-3`, …) when two products share a name. Renaming a product after the fact leaves the slug intact so external links survive copy edits.

**Write-a-Review modal stars are visible again** — the rating input was rendering as 5 empty boxes because the SVG was sized via Tailwind utility classes that fell back to a 0-sized render inside the dialog. Switched to numeric width/height attributes, matching the working display variants on the same page.

- Drop-in upgrade — single-equality slug query auto-indexes, so **no `firestore.indexes.json` redeploy needed**.
- Old `/product/{id}` URLs keep resolving forever via id-fallback. Search-engine cache and customer bookmarks survive.
- New `slugify` helper exported from the package root for consumer use.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.3.0
```

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.3.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
