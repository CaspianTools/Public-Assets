# Public-Assets

The public home of every CaspianTools product's updates, release notes, images and other static files.

Several CaspianTools repositories are private. Anything they need to show publicly lives here instead, because GitHub returns 404 to anonymous visitors for files in a private repo. That covers Marketplace / Open VSX README images, store-page media, and **every product update**.

**Every product publishes its updates here.** Not in GitHub Discussions. caspiantools.com reads this repo to build each project page's "Updates" section and the RSS / JSON feeds, so a file pushed here is the whole publishing step.

## Layout

```
Public-Assets/
├── README.md                     ← this file: conventions for every repo folder
├── index.json                    ← GENERATED list of every update; never edit by hand
├── scripts/build-index.mjs       ← builds index.json
├── _templates/                   ← shared templates (start every new file from these)
│   ├── update.md
│   └── release-note.md
└── <repo-name>/                  ← one folder per repository, named exactly like the repo
    ├── README.md                 ← what's in this folder and how it is linked
    ├── screenshots/              ← images linked from the repo's README / store listing
    ├── updates/                  ← dated posts, for products without version numbers
    │   └── <YYYY>/<YYYY-MM-DD>-<slug>.md
    └── release-notes/            ← versioned releases
        ├── README.md             ← index of every release, newest first
        └── <major>.<minor>/      ← one folder per minor line, e.g. 1.31/
            └── <X.Y.Z>.md        ← one file per released version, e.g. 1.31.2.md
```

A repo folder only needs the subfolders it actually uses. A product with version numbers (an extension, a desktop or mobile app) usually writes `release-notes/`; a continuously deployed web app writes `updates/`. Both appear in the feeds.

## Feeds

| Feed | RSS | JSON Feed |
|---|---|---|
| Every product | https://caspiantools.com/feed.xml | https://caspiantools.com/feed.json |
| One product | `https://caspiantools.com/feeds/<project-slug>.xml` | `https://caspiantools.com/feeds/<project-slug>.json` |

The project slug is the one in the caspiantools.com URL (`/projects/<project-slug>`). It matches the folder name here except for `script-caspian-store`, whose slug is `caspian-store`.

Machine-readable source: [`index.json`](index.json), raw at `https://raw.githubusercontent.com/CaspianTools/Public-Assets/main/index.json`. Each item has `id` (file path), `folder`, `product`, `title`, `date`, `type`, optional `version`, `social`, `summary`, `body` (Markdown) and `url`.

## Publishing an update

1. `git pull` in your local clone (`C:\Users\user\GitHub\Public-Assets`; if it's missing, `gh repo clone CaspianTools/Public-Assets`).
2. Copy [`_templates/update.md`](_templates/update.md) to `<repo>/updates/<YYYY>/<YYYY-MM-DD>-<slug>.md`, or [`_templates/release-note.md`](_templates/release-note.md) to `<repo>/release-notes/<major>.<minor>/<X.Y.Z>.md`, and fill in every field.
3. Commit and push to `main`.

On push, the [Build index](.github/workflows/index.yml) workflow regenerates `index.json`. caspiantools.com picks it up at its next rebuild (daily at 05:00 UTC, or any earlier deploy), and the project page and feeds update then. Before pushing, `node scripts/build-index.mjs --validate` tells you whether a file would be rejected (missing title, bad date, unknown type). Don't commit `index.json` yourself; the workflow does.

## Projects

| Folder | Project |
|---|---|
| [`caspian-taskmaster/`](caspian-taskmaster/) | Caspian Taskmaster, a VS Code extension: README screenshots and release notes |
| [`caspian-notes/`](caspian-notes/) | Caspian Notes, a VS Code extension: updates |
| [`caspian-security/`](caspian-security/) | Caspian Security, a VS Code extension: updates |
| [`caspian-emulator/`](caspian-emulator/) | Caspian Emulator: updates |
| [`caspian-postman/`](caspian-postman/) | Caspian Mail: updates |
| [`caspian-office/`](caspian-office/) | Caspian Office: updates and release notes |
| [`caspiantools/`](caspiantools/) | Caspian Tools Workspace: updates |
| [`caspianstreamer/`](caspianstreamer/) | Caspian Streamer: updates |
| [`script-caspian-store/`](script-caspian-store/) | Caspian Store: updates |
| [`zekio/`](zekio/) | Zekio, a mobile app: updates |

## Conventions

- **Folder names** are lowercase-kebab-case. Release-note files are named by bare version (`1.31.2.md`, without a `v` prefix) and sit inside their `<major>.<minor>/` folder.
- **Release notes** start from [`_templates/release-note.md`](_templates/release-note.md). Each release gets its own file, and that release's row goes at the top of the repo's `release-notes/README.md` index.
- **Updates** start from [`_templates/update.md`](_templates/update.md). Quote the `title` if it contains ` #`. Set `draft: true` to commit a file without publishing it.
- **Updates published before 2026-10-01** were imported from each repo's GitHub Discussions (Announcements category), with the original post date.
- **Linking:** reference files by their raw URL on `main`:
  ```
  https://raw.githubusercontent.com/CaspianTools/Public-Assets/main/<repo-name>/<path>
  ```
- **Don't move or rename linked or published files.** Published listings keep pointing at the old URL, and an update's path is its permanent ID in the feeds, so a renamed file shows up as a new post. Add a new file rather than replacing a path that's in use.
- **Public by definition:** never commit secrets, internal-only notes or links into private repos that readers can't open.
