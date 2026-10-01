---
product: Caspian Store
title: "script-caspian-store v8.8.1 — bare /login route + AdminGuard sign-in link fix"
date: 2026-04-28
type: release
social: false
draft: false
---

Quick patch on top of yesterday's v8.8.0. The route dispatcher matched only `/auth/login`, but every component default (`AdminGuard.signInHref`, the LoginPage register/forgot links, RegisterPage, ForgotPasswordPage, AccountPage, the checkout sign-in CTA) pointed at the bare `/login` form — so the 'Sign in' link on every signed-out admin URL hit a 404, and external links to `/login` 404'd for the same reason. v8.8.1 makes both forms resolve.

- `/login`, `/register`, `/forgot-password` now resolve in addition to the pre-existing `/auth/...` aliases
- `AdminGuard` 'Sign in' link on signed-out admin pages no longer 404s
- Locale-prefixed URLs (`/en/login`, …) keep working via `stripLocalePrefix`
- `AdminProfileMenu.afterSignOutHref` + `SiteHeader.accountHref` default to `/login`; `/auth/login` still valid

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.8.1
```

No consumer action required beyond rebuilding. Stores that overrode the auth hrefs explicitly are unaffected.

https://github.com/Caspian-Explorer/script-caspian-store
