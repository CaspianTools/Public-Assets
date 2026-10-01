---
product: Caspian Security
title: "Caspian Security 8.0.3 — Now scans Kotlin & Android apps"
date: 2026-02-24
type: release
social: false
draft: false
---

Kotlin/Android developers, this one's for you.

Caspian Security 8.0.3 adds first-class Kotlin support — open any `.kt` or `.kts` file and the extension scans it immediately.

- All 133 existing rules (secrets, weak crypto, SQL injection, HTTP, etc.) now apply to Kotlin automatically
- 10 new Android/Jetpack-specific rules: WebView JS enabled, `addJavascriptInterface`, insecure `SharedPreferences`, `MODE_WORLD_READABLE`, external storage, Room `@RawQuery`, `java.util.Random` vs `SecureRandom`, Android log leakage, and more
- `.kts` (Kotlin Script) files are scoped too

Just open your Android project and start scanning.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
