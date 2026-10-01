---
product: Caspian Office
title: "v1.184.0 — The video converter now writes MP4, WebM, MKV and MOV, not just MP4"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.184.0.png)

**Shipped v1.184.0** · 2026-08-18

The video converter could always *read* six containers — MP4, M4V, MOV, MKV, WebM and MPEG-TS all opened fine. It just had nowhere to put them but MP4. Now it writes MP4, WebM, MKV or MOV, in any combination, and it tells you what your file actually is before you convert it.

- **New — four output formats instead of one.** Pick MP4, WebM, MKV or MOV. Nothing new was vendored; the engine could already write all four.
- **New — it reads your file and shows you.** Drop a video and you get its container, resolution, length and codecs straight away. No more guessing whether that `.mkv` is H.264 or VP9.
- **New — you can see what the conversion will do before you start it.** A line under the controls says whether your tracks will be copied untouched — instant and lossless, whatever the length — or re-encoded, and to which codecs. Choosing between speed and compatibility is no longer guesswork.
- **New — twelve format-pair pages.** `/tool/mov-to-mp4/`, `/tool/mkv-to-mp4/`, `/tool/mp4-to-webm/` and nine more open the tool with the right output already selected.
- **Improved — it says what it cannot do.** AVI, WMV and FLV have never been convertible in a browser; no browser ships a decoder for those containers. Instead of spinning and failing, the tool now names the format and says so.
- **Fixed — 4K videos are no longer judged by a 1080p test.** The check for which codecs your browser can encode was hardcoded to 1920×1080 regardless of the actual video. It now asks about the real resolution.
- **Improved — renamed to "Convert video"**, because "Convert video to MP4" stopped being true. The old link still works and always will.

Everything still runs entirely in your browser on WebCodecs — nothing is uploaded, there is no size limit, and no watermark is added. Translated into all 12 languages, interface and help alike.

🔗 Live: https://caspianoffice.io/tool/convert-video/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 30d9ef32
