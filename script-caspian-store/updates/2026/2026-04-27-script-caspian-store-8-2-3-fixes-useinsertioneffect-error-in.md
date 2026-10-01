---
product: Caspian Store
title: "script-caspian-store 8.2.3 — fixes useInsertionEffect error introduced in 8.2.2"
date: 2026-04-27
type: release
social: false
draft: false
---

### Hotfix for v8.2.2 React error under Next.js App Router

v8.2.2's History API patch dispatched the `caspian:locationchange` event synchronously. Next.js's app-router calls `history.pushState` from inside a `useInsertionEffect`, so the synchronous dispatch triggered listener state updates during React's commit phase — and React rightly threw `useInsertionEffect must not schedule updates` on every search submission.

v8.2.3 defers the dispatch to `queueMicrotask`. The URL is already updated when the microtask runs (we queue *after* `origPushState` returns), so this doesn't reintroduce the v8.1.4 race — it just moves the listener state update to a normal post-commit slot.

**Highlights**

- **Fixes the v8.2.2 regression** — no more `useInsertionEffect must not schedule updates` console error
- **Search still self-heals** — submitting a new query on `/search` updates results without a reload
- **One-line change** — `dispatch = () => queueMicrotask(...)` inside `<LocationChangeBridge />`
- **No public API change** — drop-in upgrade

**Install / upgrade**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.2.3
```

Restart your Next.js dev server and hard-reload to pick up the new client bundle.

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.2.3
Repo: https://github.com/Caspian-Explorer/script-caspian-store
