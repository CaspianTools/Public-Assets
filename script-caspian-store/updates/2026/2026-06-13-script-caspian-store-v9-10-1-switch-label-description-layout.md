---
product: Caspian Store
title: "script-caspian-store v9.10.1 — Switch label/description layout fix"
date: 2026-06-13
type: release
social: false
draft: false
---

A small polish to the `Switch` UI primitive.

Toggles with helper text (like the category editor's Active/Featured) were rendering the **label and description on one line at the same size**. Now the label sits on its own line (medium weight when a description is present) with the helper text beneath it, smaller and muted. Label-only switches are unchanged.

- ✅ No consumer action required — purely presentational, no API/rules/data changes

Install / upgrade:
`npm install github:CaspianTools/script-caspian-store#v9.10.1`

https://github.com/CaspianTools/script-caspian-store
