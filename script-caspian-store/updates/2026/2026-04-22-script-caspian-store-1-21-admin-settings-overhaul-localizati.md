---
product: Caspian Store
title: "script-caspian-store 1.21 — Admin settings overhaul: localization + uploads + cleaner social links"
date: 2026-04-22
type: release
social: false
draft: false
---

First slice of a bigger admin-UX overhaul. The storefront settings page is no longer all plain text inputs.

- **Localization selectors** for currency (ISO 4217), timezone (IANA), and country (ISO 3166-1 alpha-2) — no more hunting through docs for the right code.
- **Logo + favicon uploads** via a new `<ImageUploadField>` primitive that wraps the existing `uploadAdminImage()` helper. URL fallback preserved for CDN-hosted assets.
- **Social links editor** is a proper dropdown now — `platform` is a closed `SocialPlatform` union with live icon preview, no more typos. The `label` field is gone; the platform name doubles as the aria-label.
- **Storage rules + tests** — new `siteSettings/**` block (admin write, public read, SVG allowed), and the rules-behavior suite now initializes the Storage emulator and covers the new block.

**Upgrade in one command:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.21.0
cp node_modules/@caspian-explorer/script-caspian-store/firebase/storage.rules .
firebase deploy --only storage
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.21.0
