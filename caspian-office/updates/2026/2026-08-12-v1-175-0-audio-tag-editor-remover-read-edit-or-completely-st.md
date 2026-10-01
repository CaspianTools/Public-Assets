---
product: Caspian Office
title: "v1.175.0 — Audio tag editor & remover: read, edit or completely strip the tags in MP3, FLAC, M4A and OGG files, with the audio copied byte for byte"
date: 2026-08-12
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.175.0.png)

**Shipped v1.175.0** · 2026-08-12

The MP3 tag editor grows up. It now reads, edits and **completely removes** the tags in **MP3, FLAC, M4A and OGG** files — and it fixes a defect that had been quietly leaving old metadata inside every file it saved.

- **New — four formats, one set of fields.** MP3 (ID3v2 and ID3v1), FLAC (Vorbis comment), M4A (iTunes atoms) and OGG (Vorbis and Opus comment headers) all map onto the same ten boxes: title, artist, album, album artist, year, track, disc, genre, comment, composer — plus cover art.
- **New — remove every tag, not just the ones you can see.** A clean copy strips the lot, including the encoder's vendor string, which is its own fingerprint. It asks first, and your original file is never modified.
- **Fixed — the stale tag that survived every edit.** An MP3 can carry ID3v2 at the front and ID3v1, APEv2 or Lyrics3 at the very end, and the old tool rewrote only the front. Change the title, and a player that preferred the trailing tag kept showing the old one — and anyone stripping tags for privacy was still shipping them. All trailers are now removed on save.
- **Improved — the audio is copied byte for byte.** Nothing is decoded or re-encoded, so saving is lossless however many times you do it. Keeping the file playable is the hard part: an M4A's chunk offset table is patched when its header changes size, and an OGG's pages are re-paginated, renumbered and re-checksummed.
- **Improved — it tells you what a file is carrying** before you change anything, and it refuses rather than guesses. Fragmented MP4s, chained OGG streams, files that store audio inside their header and WAV are all declined with a reason, because a corrupted audio file is worse than no download.

Verified with 26 new byte-level round-trip checks, plus end-to-end runs against a real MP3 and a real Ogg/Opus recording — both still decode to an identical duration after tagging, stripping, and after a large cover forces the whole stream to be re-paginated.

The old `/tool/mp3-tag-editor/` link still works, and there is a new `/tool/remove-audio-metadata/` page for the stripping side.

🔗 Live: https://caspianoffice.io/tool/audio-tag-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: a19e244
