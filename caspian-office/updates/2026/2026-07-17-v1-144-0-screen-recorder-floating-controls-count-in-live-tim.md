---
product: Caspian Office
title: "v1.144.0 — Screen recorder: floating controls, count-in & live timer"
date: 2026-07-17
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.144.0.png)

**Shipped v1.144.0** · 2026-07-17

On-screen recording controls for the **Screen recorder**.

- 🆕 **Floating always-on-top controls.** On Chrome and Edge the recorder now opens a small **Picture-in-Picture** panel with the **live recording time** and pause/stop, so you can see how long you've been recording and control the take while working in another window. Where that API isn't available, the same controls stay on the tool's page.
- 🆕 **3·2·1 count-in** before capture starts (optional), a **bigger REC badge + timer** on screen, and the **mouse cursor is now always captured** so your pointer stays visible.
- ✏️ Still 100% client-side — no upload, no account; the recording never leaves your device.

A note on the "highlight the pointer" idea: a browser can't paint a spotlight on the cursor in a whole-screen or other-app recording (it can't tell where the OS cursor is in the captured pixels — that needs a desktop app or extension), so instead the pointer is always captured and the floating panel keeps the time on screen. The tool's FAQ explains this.

🔗 Live: https://caspianoffice.io/tool/screen-recorder/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: ae9299f
