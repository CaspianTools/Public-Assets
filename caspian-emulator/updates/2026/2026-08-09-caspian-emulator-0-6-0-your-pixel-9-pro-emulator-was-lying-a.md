---
product: Caspian Emulator
title: "Caspian Emulator 0.6.0 — your Pixel 9 Pro emulator was lying about being a Pixel 9 Pro"
date: 2026-08-09
type: release
social: false
draft: false
---

Your "Pixel 9 Pro" emulator was 320×640 with 96 MB of RAM. Caspian Emulator 0.6.0 fixes that — and adds the release tooling the bug was getting in the way of.

📱 **Presets now have real hardware.** If your SDK's command-line tools lack a device definition (they're missing every Pixel 8 and 9), AVD creation silently fell back to the emulator's 320×640 / 96 MB defaults. That's why Play rejected your screenshots, and why the emulator sometimes hung mid-boot with no error. Fixed — and `Check Display Configuration` repairs existing devices.

📸 **Screenshot mode** — one toggle for a clean status bar. No more seven `am broadcast` commands you copy-paste from a gist every release.

🌍 **Locale & accessibility matrix** — sweep your app across languages, font scales, and display sizes, capturing each. Uses the official per-app locale API, so no root and no reboot. Ships with pseudolocales that find text overflow and RTL bugs without a translator.

🖼️ **Store screenshot capture** — both orientations in one command, validated against Play Console's rules before you upload, not after.

Your device is always restored afterwards — including if you cancel, or if VS Code crashes mid-run.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-emulator
