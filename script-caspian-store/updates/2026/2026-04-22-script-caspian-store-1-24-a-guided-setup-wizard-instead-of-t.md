---
product: Caspian Store
title: "script-caspian-store 1.24 — a guided /setup wizard instead of the CLI dance"
date: 2026-04-22
type: release
social: false
draft: false
---

Shipping a proper onboarding wizard. v1.24 collapses seven post-install touchpoints (seed Firestore, edit /admin/settings, tweak scriptSettings for theme, toggle feature flags, etc.) into one guided 4-step flow at `/setup`.

**What's new in 1.24:**
- Four-step `/setup` wizard — Your info → Branding → Features → Summary — writing the same `settings/site` + `scriptSettings/site` docs as before, now behind one UI
- Dev-only `/setup/init` form that pastes your Firebase web config into `.env.local` without touching a text editor (403s in prod so deploys can't overwrite env from a browser)
- Admin-only gated at `/setup` via the existing AdminGuard; first-time users hit the claim-admin button in AccessDenied, so no bootstrap wiring needed
- Scaffolder ships all four route files + "Prefer a GUI?" README callout automatically
- 67 new `setup.*` i18n keys, fully translatable

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.24.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.24.0
