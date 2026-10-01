---
product: Caspian Emulator
title: "Caspian Emulator now knows when your emulator is stuck, not just slow"
date: 2026-08-10
type: notice
social: false
draft: false
---

Your emulator says `device` in `adb devices`. Android is still not up. Caspian 1.2.0 stops pretending those are the same thing.

- 🩺 **Real boot detection** — waits for `sys.boot_completed` and a working package manager, and tells you whether it is waiting, booting, or **stalled**. A wedged boot opens its log automatically instead of spinning silently
- 🔧 **Repair Virtual Device** — stop cleanly → cold boot → wipe data, each rung stating its cost before you commit. Stops are verified now, and a force kill warns you it costs the snapshot
- 🧠 **Guest RAM guard** — an API 33+ Play image on 1536 MB boots, then swaps and ANRs. Caspian flags it in the sidebar with a one-click fix, and watches host memory while the emulator runs so a Gradle build cannot quietly starve it
- 📱 **Cutout and navigation emulation** — corner, punch-hole, tall, waterfall notches and gesture / 2-button / 3-button navigation, for checking edge-to-edge layout without an AVD per shape

Also fixed: **Stop on a virtual device never actually worked**, and a landscape screenshot that silently stayed portrait used to be filed under the orientation it measured rather than failing.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-emulator
