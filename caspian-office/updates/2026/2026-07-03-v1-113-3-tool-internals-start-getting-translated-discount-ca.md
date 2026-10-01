---
product: Caspian Office
title: "v1.113.3 — Tool internals start getting translated (discount calculator)"
date: 2026-07-03
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.113.3.png)

**Shipped v1.113.3** · 2026-07-03

The tools themselves start speaking your language. Until now the switcher translated the app *around* a tool — its name, the menu, the pages. Now it can translate the *inside* of a tool too: the buttons, field labels, the live results, the currency list, and the "About this tool" guide beneath it.

- 🌍 **New — translated tool internals:** the first tool is fully localized end-to-end — the **Discount, markup & margin calculator** now reads entirely in your language, in all 12 languages, right-to-left for Arabic. Switch language while it's open and the results re-translate on the spot.
- 🛠️ **Under the hood:** a reusable mechanism (`data-i18n` in the tool's view + per-language help files) so the rest of the toolkit can follow.

**Rolling out:** the remaining tools will be translated inside over the coming updates, collection by collection.

🔗 Live: https://caspianoffice.io/tool/discount/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 62e7925
