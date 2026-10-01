---
product: Caspian Office
title: "v1.182.0 — The image converter now handles every major image format, in and out"
date: 2026-08-17
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.182.0.png)

**Shipped v1.182.0** · 2026-08-17

The image converter could only ever write PNG, JPG and WebP. It now writes **seven** formats and reads **nine** — and each one brings its own settings instead of a single quality slider.

- 🆕 **Four new output formats: GIF, BMP, ICO and SVG.** **ICO** builds a real Windows icon with several sizes packed into one file (16, 32 and 48 by default, up to 256). **SVG** can trace your picture into genuine vector shapes that scale to any size, with your own choice of colour count and detail — logos, flat artwork and screenshots come out beautifully — or embed the original pixels when you want them exact. An SVG converted to SVG is copied byte for byte.
- 🆕 **ICO files can be opened too, and vectors can be any size.** Drop in a `.ico` and the largest icon inside is picked out and converted. Vectors got a real fix as well: an SVG can now be rasterised at any width you type, so a small icon can become a 4000-pixel PNG. Previously the tool refused to enlarge anything — which made no sense for a format that has no fixed size.
- 🆕 **Per-format settings.** The background colour that fills transparent areas when saving as JPG or BMP (it was always white). How many colours a GIF uses. Exactly which sizes go into an `.ico`. Trace or embed for SVG. The options bar shows only what the chosen format actually uses.
- ⬆️ **It now tells you what it cannot do.** Animated GIFs and WebPs say "first frame only" on the row before you download. A TIFF is refused by name instead of a generic "could not decode".
- 🔧 **AVIF has been removed from the output list.** It was there behind a browser check that never actually passed — no browser can create an AVIF file from a web page; Chrome, Edge and Firefox all quietly fall back to PNG. Rather than leave a promise nothing could keep, it's gone. AVIF images are still **read** and converted as happily as ever.
- ⬆️ **Big batches no longer freeze the page**, and every format works in the offline download, not just on the website.
- 🆕 **Seventeen more conversion pages** — PNG to SVG, JPG to SVG, PNG to ICO, JPG to GIF, ICO to PNG, BMP to WebP and more — each explaining honestly what that conversion will and will not do.

Fully translated into all 12 interface languages.

🔗 Live: https://caspianoffice.io/tool/image-convert/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: `8813e121`
