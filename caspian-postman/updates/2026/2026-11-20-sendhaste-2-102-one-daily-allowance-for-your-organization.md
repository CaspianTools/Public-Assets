---
product: SendHaste
title: "SendHaste 2.102.0 — one daily sending allowance for your whole organization"
date: 2026-11-20
type: release
social: false
draft: false
---

Daily sending limits now belong to your organization: it has one daily allowance, and all its domains share it, first come, first served. This replaces the separate limit each domain had.

If one busy domain shouldn't use up what the others need, an Org Super Admin can give it a daily limit of its own: open **Settings → Domains**, pick the domain, and look under **Sending limits**. The same place shows your organization's allowance and how much of it was sent today.

When the allowance for the day is used up, Compose, group emails and the sending API say so; emails sent through the API are held and go out after midnight UTC, as before.

Need a higher allowance? Write to us from **Support** in the account menu. The limits are explained in the help center: https://sendhaste.com/en/help/api
