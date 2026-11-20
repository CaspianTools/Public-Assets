---
product: SendHaste
title: "SendHaste 2.103.0 — Undeliverable only when the address is the problem"
date: 2026-11-20
type: release
social: false
draft: false
---

SendHaste now marks an address **Undeliverable** only when the address itself is the problem: it doesn't exist, its domain can't receive mail, or its mailbox was full on three different days. A bounce that wasn't the address's fault no longer counts, and addresses marked that way before are back in your lists.
Group emails skip undeliverable addresses as before, and the sending API now refuses them with the new error `recipient_undeliverable`, listing the addresses in `error.addresses`, so your app can ask the person to check their address.
Bounce notices in your mailbox open normally again.
See [Contacts](https://sendhaste.com/en/help/contacts) and the [API guide](https://sendhaste.com/en/help/api).
