---
product: Caspian Office
title: "v1.185.0 — The image compressor now takes a whole batch, not one photo at a time"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.185.0.png)

**Shipped v1.185.0** · 2026-08-18

The image compressor accepted exactly one file at a time. It now takes a whole batch — up to 100 images at once, one shared format, quality and scale, a per-row before/after size for every file, and the option to take the lot as a single ZIP.

- **New — drop in as many images as you like.** Every file gets its own row showing the size before, the size after, and the percentage saved. The three summary cards above the list total the batch.
- **New — download the lot as a ZIP.** One image still comes down as a plain file. Two or more arrive as `compressed-images.zip`, with duplicate filenames kept apart rather than silently overwriting each other.
- **New — click any row to inspect it.** The before/after preview and the Original / Compressed toggle follow whichever image you select, and the selected one is always compressed first so the preview never waits on the rest of the queue.
- **Improved — the custom width and height boxes are gone.** Typing pixel dimensions is the [Resize image](https://caspianoffice.io/tool/image-resize/) tool's job, and they have no single meaning across a batch of differently-sized photos. The 50% and 25% scales stay, because halving the dimensions leaves roughly a quarter of the bytes — the biggest lever the tool has.
- **Improved — large batches stay fast.** Images are no longer held as base64 text in memory, a habit that cost about a third more RAM than the file itself, twice over. Thirty photos on a phone no longer risks killing the tab.
- **Fixed — transparent PNGs saved as JPG came out with black backgrounds.** JPG has no transparency, and the canvas was filling it with black. It now fills with white.
- **Fixed — a WebP that wasn't really a WebP.** On browsers that can't encode WebP the canvas quietly returns a PNG instead. The tool now checks what it actually got and reports the failure rather than handing you a mislabelled file.

Fully translated into all 12 interface languages, interface strings and help prose alike.

🔗 Live: https://caspianoffice.io/tool/image-compress/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 344810d6
