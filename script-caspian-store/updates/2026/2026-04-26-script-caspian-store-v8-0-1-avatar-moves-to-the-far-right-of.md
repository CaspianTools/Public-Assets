---
product: Caspian Store
title: "script-caspian-store v8.0.1 — Avatar moves to the far right of the header"
date: 2026-04-26
type: release
social: false
draft: false
---

Small visual fix from issue #88. The storefront header's account control (avatar when signed in, **Sign in** button when signed out) was wedged in the middle of the right-side icon cluster — search, language, account, wishlist, cart. v8.0.1 moves the account slot to the very end of the row so the wishlist + cart icons sit together as a group and the avatar anchors the far edge.

- Avatar / Sign-in is now the rightmost header control in LTR locales
- RTL locales (Arabic, Hebrew, Farsi, Urdu) get the same logical "end of row" placement at the visual far left — no extra code path
- Wishlist + cart icons stay paired in their own visual group
- No consumer action required beyond reinstalling the new tag — purely visual

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.0.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.0.1
