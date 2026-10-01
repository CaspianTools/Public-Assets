---
product: Caspian Store
title: "script-caspian-store 1.23 — Admin header profile menu + self-driving setup checklist"
date: 2026-04-22
type: release
social: false
draft: false
---

Final slice of the admin-UX overhaul kicked off in v1.21. The admin shell finally has a proper profile dropdown, and the first-run checklist at `/admin/todos` stops needing a babysitter.

- **`<AdminProfileMenu>`** — avatar + dropdown with View storefront, My profile, Sign out. Drop it into `<AdminShell headerRight>` and you're done. Fresh scaffolds wire it automatically.
- **Self-driving todo list** — auto-seeds on first visit, live Firestore listener so changes from other tabs show up instantly, and a **Verify progress** button that walks detectors for 8 of the 12 first-run items (categories seeded, products created, languages activated, hero edited, etc.) and flips whatever's observably done.
- **Four new inline SVG icons** (User, LogOut, Check, Refresh) and a new public service export (`verifyAdminTodos`) for consumers who want to plug the detectors into their own automation.
- **Zero schema or rules changes** — pure additive, no migration, opt in by passing the profile menu as the `headerRight` prop.

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.23.0
```

That wraps the three-release admin overhaul — v1.21 brought settings localization + uploads, v1.22 brought the product editor + category dropdown + image upload + migration, and v1.23 wraps it up with the header and todo automation.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.23.0
