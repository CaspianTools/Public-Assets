---
product: Caspian Store
title: "script-caspian-store 8.2.2 — /search re-runs on new query, for real this time"
date: 2026-04-27
type: release
social: false
draft: false
---

### The v8.1.4 self-heal had a race; v8.2.2 fixes it properly

v8.1.4 wrapped the navigation hook to dispatch a `caspian:locationchange` event from a microtask after `router.push`. Problem: Next.js App Router schedules `router.push` inside a React transition, so `window.location.search` wasn't yet updated when the microtask ran — the listener kept re-reading the *old* query.

v8.2.2 replaces that with a one-time monkey-patch on `history.pushState` and `history.replaceState`. The patches dispatch the event **synchronously after** the URL is updated, so the search page always sees the fresh query.

**Highlights**

- **Fixes #43 for real** — `/search?q=foo` → submit `bar` now updates results, no reload, no consumer adapter edits required
- **Catches every navigation path** — patched History API fires regardless of whether `router.push` went through `useCaspianNavigation` or directly
- **Idempotent** — a `__caspianHistoryPatched` window flag prevents double-patching across HMR / multi-mount setups
- **No public API change** — `useCaspianNavigation` is back to a thin pass-through, drop-in upgrade

**Install / upgrade**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.2.2
```

Restart your Next.js dev server and hard-reload the browser so the patched History API takes effect.

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.2.2
Repo: https://github.com/Caspian-Explorer/script-caspian-store
