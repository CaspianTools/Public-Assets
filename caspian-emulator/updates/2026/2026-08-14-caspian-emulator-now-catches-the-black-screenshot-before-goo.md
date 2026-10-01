---
product: Caspian Emulator
title: "Caspian Emulator now catches the black screenshot before Google does"
date: 2026-08-14
type: notice
social: false
draft: false
---

An emulator can boot, run your app, and still hand back a perfectly formed screenshot that is entirely black. Right size, right aspect ratio, right format — and worthless. Every validator passed it. You found out from the Play Console.

Caspian Emulator 1.3.0 measures the image itself.

- 🖤 **Blank captures fail loudly**, with the fix named — across Take Screenshot, store capture, and every cell of a matrix run
- 🎛️ **GPU mode is a setting now**, not a flag to hand-type. A launch that dies with a graphics error retries in software automatically and tells you which mode worked
- 🧠 **The low-memory remedy stopped lying.** `gradlew --stop` cannot stop the Kotlin compile daemon holding your gigabyte — Caspian now says so, and offers to stop it
- 📱 **Android 16 by default**, and presets use a newer image you already have instead of downloading an older one

Stop shipping black rectangles.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-emulator
