---
product: Caspian Store
title: "script-caspian-store v7.2.0 — LayoutShell heals itself; no consumer edits on upgrade"
date: 2026-04-24
type: release
social: false
draft: false
---

The right release policy is that upgrading the library should be enough. v7.0.2 shipped a scaffolder fix but asked existing sites to hand-edit their own `src/app/layout.tsx` — that's friction a library shouldn't impose. v7.2.0 fixes the same bug from inside the library: `<LayoutShell>` is now self-healing, so every past scaffold heals on `npm install` with zero file edits.

### Highlights

- **Context sentinel inside `<LayoutShell>`** — the outermost mount claims the shell, every inner mount renders just `{children}`. Double-wrap is inert.
- **No public API change** — `LayoutShellProps` unchanged, no new exports. The dedup is an internal React context.
- **No duplicate Firestore reads** — inner mounts skip `getSiteSettings` via the same sentinel, so an accidentally-nested `<LayoutShell>` doesn't double your site-settings fetches either.
- **Works for every past scaffold** — v7.0.0, v7.0.1, v7.0.2, v7.1.x. Idempotent. `npm install github:Caspian-Explorer/script-caspian-store#v7.2.0` is the whole fix.

### Upgrade

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.2.0
```

No edits to `src/app/layout.tsx`, no Firebase redeploy, no dependency bump.

### Policy note

Going forward: every release must ship this way. If fixing a bug would need a consumer hand-edit, that's a signal the library's architecture is wrong for that concern — not an excuse to push the work onto customers.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.2.0
