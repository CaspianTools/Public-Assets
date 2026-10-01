---
product: Caspian Office
title: "v1.161.0 — Favicon maker: shapes that work on image favicons + one Download menu"
date: 2026-07-25
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.161.0.png)

**Shipped v1.161.0** · 2026-07-25

The **Favicon maker** gets a real fix and a proper Download menu. When you built a favicon from an uploaded logo, the shape and corner-radius controls did nothing — the background was painted over the whole square *before* the shape mask, so circles, rounded corners and squircles were silently ignored and the icon always came out a hard square. That's fixed, and downloads are tidied up.

- **Fixed — shapes work on image favicons.** The background is now painted *inside* the mask, so **Circle**, **Rounded** and **Squircle** (and the corner-radius slider) apply in both Text and Image mode.
- **Improved — one Download menu.** The old "Quick PNG download" row is gone; the header **Download** menu now offers the full package (`.zip`), a standalone multi-resolution **`favicon.ico`**, and single PNGs at **16 / 32 / 48 / 180 (Apple touch) / 512**.
- **New — transparent background.** A **Transparent** option drops the background fill, with a chequerboard preview so you can see it.
- **New — nudge & size the glyph.** Left/right and up/down nudge sliders, plus a font-size range up to 160%.
- **Improved — sharper logos, safer emoji.** Uploaded images downscale through a mip chain (crisper small icons), SVGs with no intrinsic size no longer render blank, and multi-codepoint emoji (flags, skin tones, ZWJ families) no longer tear into mojibake.

Still 100% client-side, offline, no accounts and no AI.

🔗 Live: https://caspianoffice.io/tool/favicon-maker/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: d896a14
