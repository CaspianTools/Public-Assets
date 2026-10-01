---
product: Caspian Office
title: "v1.183.0 — Every tool said “nothing is uploaded” twice. Now it says it once, in the right place"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.183.0.png)

**Shipped v1.183.0** · 2026-08-17

Forty-six tools were telling you the same thing twice. Now they tell you once, below the controls rather than in the middle of them.

- ⬆️ **The promise has moved out of the way of the work.** A line sat inside the tool itself — *"nothing is uploaded"*, *"stays on your device"*, *"worked out live in your browser"* — between the controls and the thing you came to do. Every one of those tools already says exactly that in its **About this tool** section below, in both the opening description and its questions. So the in-tool copy is gone and the working area is just controls again. Nothing was lost: it was said twice, and is now said once, in the place built for it.
- ⬆️ **What you actually need while working stays exactly where it was.** This was deliberately not a clean sweep. Operating instructions stay on the canvas tools — you cannot discover *"drag to pan, double-click to edit"* from a section further down the page. Guidance stays beside the field it explains. Browser and error messages stay. And **every safety and accuracy disclaimer stays put** — JSA, ICAM, LOPA, lifting, noise, heat stress, SIMOPS, BMI and observation cards all still show their caveat at the moment you use them, which is the only place a caveat is any use at all.
- 🔧 **The favicon maker had a second "About this tool" inside it**, duplicating the section the page already shows underneath, heading and all. Removed.
- 🔧 **Drop zones now just tell you what they accept.** *"or click to choose — MP4, MOV, WebM, MKV. Stays on your device."* is now simply *"or click to choose — MP4, MOV, WebM, MKV."* The file list, which is the part you were reading it for, is untouched — in all twelve languages.

The image converter is the clearest example: choosing a format now runs straight into the drop zone, with no pink panel in between.

🔗 Live: https://caspianoffice.io/tool/image-convert/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: `f3aa1781`
