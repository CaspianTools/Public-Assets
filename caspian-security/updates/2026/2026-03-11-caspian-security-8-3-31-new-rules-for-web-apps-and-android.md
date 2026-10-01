---
product: Caspian Security
title: "Caspian Security 8.3 — 31 new rules for web apps and Android"
date: 2026-03-11
type: release
social: false
draft: false
---

Caspian Security 8.3 is here with 31 new security rules, bringing the total to 164.

🌐 **Web Application Security** (19 rules)
- Security header checks: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cache-Control
- DOM-based XSS source-to-sink detection and open redirect prevention
- Server-side validation library reminders (joi, zod, yup)
- Helmet middleware and server fingerprinting header detection

📱 **Android/Kotlin Security** (12 rules)
- WebView hardening: content access, mixed content, SSL error bypass
- Certificate pinning for OkHttp/Retrofit
- Hardcoded encryption keys and API credentials detection
- Cleartext traffic, tapjacking, clipboard data leakage

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
