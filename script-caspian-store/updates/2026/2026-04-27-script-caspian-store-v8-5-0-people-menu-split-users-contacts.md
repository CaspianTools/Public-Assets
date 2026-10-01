---
product: Caspian Store
title: "script-caspian-store v8.5.0 — People menu split: Users / Contacts / Subscribers"
date: 2026-04-27
type: release
social: false
draft: false
---

The admin sidebar's **People** group used to read *Users / Subscribers*, but `/admin/users` was actually the contact-form inbox in disguise. v8.5.0 straightens out the labels and the data — Users, Contacts, and Subscribers are now three independent pages.

- 👥 **Real customer list at `/admin/users`** — name, email, role badge, joined date. Sorted newest-first, search by name/email. Read-only.
- 📥 **Contacts inbox moves to `/admin/contacts`** — same status filter, mark read/archive/delete, detail dialog, unread count. Just on its own URL with its own sidebar entry.

**Upgrade**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.5.0
```

Drop-in. Reuses the existing `users` collection rule (no `firebase deploy` needed). Single-field query — Firestore auto-indexes.

Full changelog + tarball: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.5.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
