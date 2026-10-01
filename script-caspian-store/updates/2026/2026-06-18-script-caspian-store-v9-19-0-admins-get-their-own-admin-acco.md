---
product: Caspian Store
title: "script-caspian-store v9.19.0 — admins get their own /admin/account page"
date: 2026-06-18
type: release
social: false
draft: false
---

script-caspian-store v9.19.0 adds a dedicated in-chrome **admin account page**.

Admins can now manage their own profile without leaving the panel:
- ✏️ Edit display name + phone at `/admin/account`
- 🖼️ Upload or remove a profile photo
- 🔒 Change their password (email stays read-only)

It reuses the existing account cards and is wired automatically through `<AdminRoot>` — no consumer action required.

Upgrade: `npm install github:CaspianTools/script-caspian-store#v9.19.0`

https://github.com/CaspianTools/script-caspian-store
