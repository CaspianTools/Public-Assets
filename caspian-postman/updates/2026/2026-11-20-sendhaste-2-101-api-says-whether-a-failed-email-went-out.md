---
product: SendHaste
title: "SendHaste 2.101.0 — the sending API says whether a failed email went out"
date: 2026-11-20
type: release
social: false
draft: false
---

When the sending API cannot send an email, its answer now tells your app whether the email went out.
A new field, `error.sent`, is `"no"` when the email did not go out, so your app can safely send it again, or `"unknown"` in the rare case that could not be confirmed.
Nothing else in the answer changes, so existing code keeps working.
The details are in the [API guide](https://sendhaste.com/en/help/api).
