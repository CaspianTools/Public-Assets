---
product: Caspian Office
title: "v1.178.0 — Geologica, and a typeface per writing system rather than per language"
date: 2026-08-13
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.178.0.png)

**Shipped v1.178.0** · 2026-08-13

The interface has a new typeface — **Geologica** — and for the first time the choice is made per **writing system** rather than per language.

The twelve UI languages resolve to five scripts, and only the script actually changes the letterforms. Giving German, French and Spanish separate typefaces would fragment the brand for readers who see identical letters; what genuinely needs its own design is each writing system.

| Script | Languages | Typeface |
|---|---|---|
| Latin | en · de · fr · es · pt · id | **Geologica**, embedded |
| Latin-ext | tr · az | **Geologica**, embedded |
| Cyrillic | ru | **Geologica**, embedded |
| Arabic | ar | **Cairo**, embedded |
| Japanese · Han | ja · zh | curated system stack, per language |

**Three things that were quietly broken, and are now fixed**

- **Azerbaijani rendered in two fonts mid-word.** The old font shipped only the `latin` character set, which does not contain **ə** — the commonest vowel in Azerbaijani. Every word using it fell back to a different font, including the language's own name in the switcher, *Azərbaycan*. Turkish's ğ, ş and İ were in the same position.
- **Russian never used the interface font at all.** No Cyrillic was ever embedded, so the entire Russian interface rendered in whatever the operating system happened to pick.
- **The heaviest bold was never real.** Ninety-four places across the tools ask for weight 800, but only 300–700 were bundled, so the browser faked it by smearing 700. Both fonts now ship as *variable* faces covering 400–800 continuously, so it is a genuine weight.

**Arabic, without losing the brand.** Cairo is embedded as its Arabic characters only, so numbers, "PDF", "MP3" and standards references such as NEC and IEC still render in Geologica inside an Arabic interface — one consistent look across two scripts.

**Japanese and Chinese get the system face, deliberately.** A CJK font is around a megabyte, and the stylesheet is embedded into the full offline file *and* all 13 collection packs — 14 copies per release — so bundling one would add roughly 18 MB and about double the download. Subsetting to only the characters in the translation files does fit, but it breaks the moment someone types their own Japanese into a tool: interface in one font, their content in another, mid-sentence. Each language instead gets a named stack of the fonts its own platform ships, chosen **per language**, because Japanese and Chinese draw several shared characters differently and one shared list would show Japanese readers Chinese letterforms.

**Cost: +1.07 MB across the whole release, about 0.6%.** The full offline file goes from 18.88 to 18.96 MB.

That number was very nearly 7.4 MB. Both fonts are *variable*, and asking Google for a discrete list of weights returns the **same** file for every one of them — the first version of the build script embedded that identical file five times per script. Asking for a weight *range* instead returns one face per script. Cairo was chosen over IBM Plex Sans Arabic on the same basis: 30.2 KB against 129.7 KB, for a wider weight range.

**Saved work is migrated, not silently reflowed.** The old font was the stored default in the CV builder and in three slide themes, and every slide text box records its own font. Documents saved before today are mapped across rather than re-rendering in a system font.

Verified with 29 in-browser checks across all five scripts — including that Geologica genuinely does *not* claim Arabic (proved by measurement, not by reading the CSS), that a Latin phrase renders identically in the Arabic and English interfaces, and that Japanese and Chinese really do get different stacks. Zero requests to Google Fonts; everything is self-hosted and works from a file on disk with no network.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 430282e5
