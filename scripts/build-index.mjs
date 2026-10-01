#!/usr/bin/env node
// Builds index.json, the machine-readable list of every published update in
// this repo. caspiantools.com reads it at build time to render each project's
// "Updates" section and to publish the RSS / JSON feeds, so this file is the
// contract between the two repos.
//
//   node scripts/build-index.mjs              rewrite index.json
//   node scripts/build-index.mjs --validate   only check every file parses; writes nothing.
//                                             Run this before pushing a new update — don't
//                                             commit index.json yourself, the workflow does.
//   node scripts/build-index.mjs --check      exit 1 if index.json is stale
//
// Sources, per <repo>/ folder:
//   updates/<YYYY>/<YYYY-MM-DD>-<slug>.md   dated posts (_templates/update.md)
//   release-notes/<maj>.<min>/<X.Y.Z>.md    versioned releases (_templates/release-note.md)
//
// No dependencies, and no timestamps in the output: the same tree always
// produces the same bytes, which is what makes --check work.

import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const OUT = join(ROOT, 'index.json');
const BLOB = 'https://github.com/CaspianTools/Public-Assets/blob/main/';
const RAW = 'https://raw.githubusercontent.com/CaspianTools/Public-Assets/main/';
const TYPES = new Set(['feature', 'fix', 'release', 'notice']);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function parse(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing frontmatter`);
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    // A double-quoted value may contain " #" (e.g. "Closing #42"); an unquoted
    // value ends at the first " #", which starts a comment.
    const q = line.match(/^([A-Za-z_]+):\s*"((?:[^"\\]|\\.)*)"\s*(?:#.*)?$/);
    if (q) {
      meta[q[1]] = q[2].replace(/\\(.)/g, '$1');
      continue;
    }
    const mm = line.match(/^([A-Za-z_]+):\s*(.*?)\s*(\s#.*)?$/);
    if (mm) meta[mm[1]] = mm[2].replace(/^'|'$/g, '');
  }
  return { meta, body: m[2].replace(/\r\n/g, '\n').trim() };
}

// First prose paragraph as plain text: skips headings, images, bare links and
// rules, then strips inline Markdown. Used as the feed/card excerpt.
function summarize(body, max = 400) {
  const para = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^(#|!\[|---|https?:\/\/\S+$|<!--|- |\* |\|)/.test(p));
  if (!para) return '';
  const plain = para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length <= max ? plain : `${plain.slice(0, max).trimEnd()}…`;
}

// Release notes carry their own "# Product X.Y.Z: headline" line, which the
// site already renders from `title`; drop it so the body doesn't repeat it.
function stripLeadingH1(body) {
  return body.replace(/^# [^\n]*\n+/, '');
}

const items = [];
const errors = [];

for (const folder of readdirSync(ROOT).sort()) {
  if (folder.startsWith('_') || folder.startsWith('.') || folder === 'scripts') continue;
  const dir = join(ROOT, folder);
  if (!statSync(dir).isDirectory()) continue;

  for (const kind of ['updates', 'release-notes']) {
    for (const file of walk(join(dir, kind))) {
      const name = file.split(sep).pop();
      if (!name.endsWith('.md') || name.startsWith('_') || name === 'README.md') continue;
      const id = relative(ROOT, file).split(sep).join('/');
      try {
        const { meta, body } = parse(readFileSync(file, 'utf8'), id);
        if (String(meta.draft).toLowerCase() === 'true') continue;
        const isRelease = kind === 'release-notes';
        const title = isRelease ? meta.headline : meta.title;
        const type = isRelease ? 'release' : meta.type || 'notice';
        if (!title) throw new Error(`${id}: missing ${isRelease ? 'headline' : 'title'}`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date ?? '')) throw new Error(`${id}: date must be YYYY-MM-DD`);
        if (!TYPES.has(type)) throw new Error(`${id}: type must be one of ${[...TYPES].join(', ')}`);
        if (!body) throw new Error(`${id}: empty body`);
        const content = isRelease ? stripLeadingH1(body) : body;
        items.push({
          id,
          folder,
          product: meta.product || folder,
          title,
          date: meta.date,
          type,
          ...(isRelease && meta.version ? { version: meta.version } : {}),
          social: String(meta.social ?? 'true').toLowerCase() !== 'false',
          summary: summarize(content),
          body: content,
          url: BLOB + id,
          rawUrl: RAW + id,
        });
      } catch (e) {
        errors.push(e.message);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  process.exit(1);
}

// Newest first; same-day ties break on path, descending, so the order is stable.
items.sort((a, b) => (a.date === b.date ? (a.id < b.id ? 1 : -1) : a.date < b.date ? 1 : -1));

const json = `${JSON.stringify({ version: 1, items }, null, 2)}\n`;

if (process.argv.includes('--validate')) {
  console.log(`All ${items.length} published files are valid.`);
} else if (process.argv.includes('--check')) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') : '';
  if (current !== json) {
    console.error('index.json is stale. Run: node scripts/build-index.mjs');
    process.exit(1);
  }
  console.log(`index.json is current (${items.length} items).`);
} else {
  writeFileSync(OUT, json);
  console.log(`Wrote index.json (${items.length} items).`);
}
