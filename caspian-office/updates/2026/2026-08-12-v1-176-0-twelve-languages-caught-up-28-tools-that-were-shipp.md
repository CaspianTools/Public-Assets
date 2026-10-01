---
product: Caspian Office
title: "v1.176.0 — Twelve languages, caught up: 28 tools that were shipping as English, and the check that will catch the next one"
date: 2026-08-12
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.176.0.png)

**Shipped v1.176.0** · 2026-08-12

Switching the language left 28 tools sitting in English. Not a bug — missing data, and it had been building up for seven releases without anything to notice it. This release fills it in and adds the check that should have been there.

### What was wrong

The app degrades gracefully by design: when a translation is missing, `I18N.get()` falls back to English and the tool stays perfectly usable. That is a good property, and it is exactly why nobody spotted that **28 tools had no translated name or subtitle in any of the 11 languages** — the whole **Electrical** set, the whole **video and audio** set, plus Flowchart, Bowtie diagram, Lifting plan and the LOPA calculator. Every one of them read as English in Arabic, Chinese, Russian and the rest.

The **Electrical category itself** was untranslated too, along with its collection name and description, the ten shared canvas-toolbar labels (undo, redo, zoom, centre, full screen, load sample, upload) and the command palette — sixteen pieces of app furniture that arrived after the last translation pass and stayed English in every language since.

- **New — 804 keys across the twelve catalogues.** 28 tools × name + subtitle × 11 languages, plus the 17 chrome keys. Tool-name coverage went from **84% to 100%** in every language. Menu, search, home cards, page header and breadcrumb are all translated now.
- **Fixed — the "New" badge was hardcoded English.** It sits on the header, breadcrumb, menu and search results of every recently added tool, so it was the one English word on screen in all twelve languages.
- **Fixed — the browser tab title kept the previous language** until you navigated away. It now follows the switch immediately.
- **New — `npm run verify:i18n`.** It lists, per language, every tool with no translated name. The existing build step only ever printed a bare count, and its percentage is measured against a total that *grows every time English-only work ships* — so the score fell silently and never said what to fix. The new check also flags leftover keys from renamed tools, reports the separate help-prose backlog, and **fails outright** on a language file that will not parse, which the build previously skipped whole behind one warning while still reporting success. A stray comma in `ru.json` would have dropped Russian from the switcher entirely.

### On translation quality

These are machine translations, produced one language at a time against the ~151 tools already translated in each file so the register and terminology match what was there. Each language was then reviewed by a second, adversarial pass whose only job was to find defects — and it found **35**, all of which are fixed. Several were not cosmetic:

- **Russian** said the *nearest* standard breaker rating rather than the *next* one, which would permit rounding **down** below the design current.
- **Indonesian** inverted the power-factor resonance warning into "completely safe to install".
- **Spanish** called a circuit breaker a plain switch (`interruptor` rather than `interruptor automático`).
- **Arabic** said the LOPA initiating-event frequency "is doubled with" its modifiers rather than "is multiplied by" them.
- **German**'s LOPA verb implied formal verification — the one claim a screening aid must not make — and **French** claimed regulatory *conformité* for an indicative voltage-drop check.

Corrections are welcome and cheap: each is one line in `web/content/i18n/<lang>.json` plus a rebuild.

**Still English, deliberately:** each tool's *internal* screens and its help prose. That is a separate per-tool wave, and machine-translating ~12,900 strings of safety-relevant electrical wording is not something to do casually. `verify:i18n` now reports that backlog separately so it stays visible.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: b25fa98
