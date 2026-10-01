---
product: Caspian Store
title: "script-caspian-store v7.3.3 — Cart no longer throws on Firestore-offline"
date: 2026-04-25
type: release
social: false
draft: false
---

Tiny resilience patch. CartProvider's auth-change hydration was missing a catch around `loadUserCart`, so any Firestore failure (most commonly *Failed to get document because the client is offline* — what you see when Firebase config is incomplete or the user is genuinely offline) escaped as an unhandled promise rejection in the console.

v7.3.3 catches it, reports via the existing `reportServiceError` channel (visible on `/admin/about`'s error log), and falls back to `readLocal()` so the page keeps rendering and the shopper keeps their session-local cart.

This doesn't fix Firestore being offline — it just stops it from crashing. If you see the offline error in your console, the most common cause is mismatched `NEXT_PUBLIC_FIREBASE_*` env vars (apiKey + authDomain + projectId must all belong to the same Firebase project).

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.3.3
```

Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.3.3).
