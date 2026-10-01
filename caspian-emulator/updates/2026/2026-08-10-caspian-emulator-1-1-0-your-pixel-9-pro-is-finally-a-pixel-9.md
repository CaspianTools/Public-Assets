---
product: Caspian Emulator
title: "Caspian Emulator 1.1.0 — your Pixel 9 Pro is finally a Pixel 9 Pro"
date: 2026-08-10
type: release
social: false
draft: false
---

Caspian Emulator 1.1.0 is out, and it is a big one — every AVD preset now gets real hardware, and there is a whole store-asset toolkit inside VS Code.

- 📐 **Preset AVDs had the wrong hardware.** If your SDK tools were missing a device profile (they are, for every Pixel 8 and 9), your "Pixel 9 Pro" was really a 320x640 screen with 96 MB of RAM — enough to get screenshots rejected by the Play Console, or hang the emulator mid-boot. All 16 presets now carry real hardware. A Pixel 9 Pro is 1280x2856 @ 480 dpi with 2048 MB.
- 📸 **Capture Store Screenshots** — portrait and landscape into a named run folder, validated against Play Console size and aspect rules, with a Markdown report and a `manifest.json`.
- 🌍 **Locale & accessibility matrix** — sweep your app across languages, font scales, densities, and orientations. Includes the `en-XA` and `ar-XB` pseudolocales, so you can find text overflow and RTL bugs without a translator.
- 🧹 **Screenshot mode** — one toggle for a clean status bar: fixed clock, full battery, full signal, no notification icons.
- 🩺 Emulator launch failures are now reported instead of looking like a hang, and a pre-flight check warns you when free RAM or hardware acceleration is short.

Ship store-ready Android screenshots without ever opening Android Studio.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-emulator
