---
product: Caspian Security
title: "Paste Image in issues now works — no more clipboard errors"
date: 2026-03-18
type: notice
social: false
draft: false
---

Caspian Taskmaster 0.17.4 fixes the image paste bug that was crashing the Edit Issue popup.

- 🖼️ Paste Image button, Ctrl+Shift+V, and drag-and-drop all work now
- Replaced broken Electron clipboard API with the standard web Clipboard API
- Cross-platform fallback (Windows/macOS/Linux) for native clipboard reading
- Clear error message when no image is in the clipboard

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
