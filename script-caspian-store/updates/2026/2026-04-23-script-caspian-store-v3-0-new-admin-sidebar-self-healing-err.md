---
product: Caspian Store
title: "script-caspian-store v3.0 — new admin sidebar, self-healing error logging, email plugins"
date: 2026-04-23
type: release
social: false
draft: false
---

**v3.0.0 is out.** Biggest admin-surface change since v2. Three features in one breaking release:

- **🎛️  Grouped, icon-aware admin sidebar** with a 56px flat icon rail when collapsed. Settings moves into a URL-driven sub-sidebar (`/admin/settings/*`). Todos / Notifications / Search-terms fold into the Dashboard as collapsible sections.
- **🚨 Self-healing error logging.** Every client and Cloud-Function error is captured to Firestore (`errorLogs`), redacted for emails / tokens / API keys, and surfaced on `/admin/about` with a one-click **Report upstream** button that opens a pre-filled GitHub issue.
- **📮 Email provider plugin catalog.** Brevo joins SendGrid; the email Cloud Functions move to a dedicated `caspian-email` codebase with **zero `defineSecret` declarations** — keys live in Firestore, configured from `/admin/settings/email-providers`.

**Breaking:** eight admin routes are removed (see the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v3.0.0) and [CHANGELOG](https://github.com/Caspian-Explorer/script-caspian-store/blob/main/CHANGELOG.md) for the surgical upgrade recipe).

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v3.0.0
rm -rf .next
```

Then follow the four-step CHANGELOG recipe to regenerate admin route files, deploy the new Firestore rules + indexes, and (if you send email) split the email codebase.

Repo · https://github.com/Caspian-Explorer/script-caspian-store
