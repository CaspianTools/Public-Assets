---
product: Caspian Tools Workspace
title: "The dependency check now tells you when it can't scan your repo"
date: 2026-10-01
type: fix
social: false
draft: false
---

The Dependencies tab checks JavaScript (npm) projects only. Until now, a Python, Go or Rust repository showed an empty report that could pass for "nothing to worry about". It now says "Not supported yet" and names the languages it found. If a repository mixes npm with another language, the npm packages are still checked, and a note lists the parts that weren't.
