---
product: SendHaste
title: "SendHaste 2.62.0 — Address list fixed for API keys made for one domain"
date: 2026-10-11
type: release
social: false
draft: false
---

The sending API's list of From addresses now works for API keys made for one domain: it shows every mailbox on that domain, where before it came back empty. It also names the domains a key may send from, so your apps can tell people where to add a sending address. Each From address needs a mailbox of its own: for an address that only sends, like noreply@, add a mailbox for it in Settings → Domains. Developers will find the details in Help, under Sending API: https://sendhaste.com/en/help/api
