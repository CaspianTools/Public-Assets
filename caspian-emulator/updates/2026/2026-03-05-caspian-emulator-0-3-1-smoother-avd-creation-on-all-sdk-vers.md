---
product: Caspian Emulator
title: "Caspian Emulator 0.3.1 — smoother AVD creation on all SDK versions"
date: 2026-03-05
type: release
social: false
draft: false
---

Caspian Emulator 0.3.1 is out with a targeted bug fix for AVD creation.

- Fixed a crash when creating a preset AVD (e.g. Pixel 9 Pro) on systems with older Android SDK command-line tools
- If the device skin is not available in your SDK, you are now prompted to create the AVD without it instead of hitting an opaque error
- No Android Studio required — Caspian handles everything from the VS Code sidebar

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-emulator
