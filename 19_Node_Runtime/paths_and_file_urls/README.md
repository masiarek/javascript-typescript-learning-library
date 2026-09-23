# Paths and file URLs — `node:path`, `import.meta.dirname` and `fileURLToPath`

**Level:** 101 · for anyone who has opened a file by a relative path

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A relative path is resolved against `process.cwd()`, not the module's folder; `import.meta.dirname` names that folder, and `new URL(import.meta.url).pathname` is not a usable path: a space in it stays `%20` until `fileURLToPath` decodes it.

**Keywords:** `fileURLToPath`, `import.meta.dirname`, `path.join`, `path.resolve`, `process.cwd`

## What the finished page will answer

- When `node sub/app.mjs` opens `"data.txt"`, which folder does Node look in, and how do you open the file next to the module instead?
- What do `import.meta.url`, `new URL(import.meta.url).pathname` and `fileURLToPath(import.meta.url)` print for a module in a folder named `my dir`?
- What does `path.join("/srv", "/etc/passwd")` return, and what does `path.resolve` return for the same arguments?
- Why does `__dirname` throw a `ReferenceError` in an ES module, and what replaced it?
- What does `pathToFileURL` do to `#`, `%` and a space in a file name, and why does that matter for `import()`?

## Examples it will need

- [ ] `paths_file_urls_space_in_folder_sh.sh` — for a module in a folder named `my dir`: its URL, the URL's pathname with `%20`, `fileURLToPath`, `import.meta.dirname`, and where "data.txt" resolves when run from the parent folder
- [ ] `paths_join_versus_resolve_js.js` — `path.join` and `path.resolve` side by side for relative parts, `..`, and an absolute second argument

## See also

- [`import.meta`](../../14_Modules/import_meta/README.md) — `import.meta.url`, `dirname` and `filename` in full
- [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md) — why `__dirname` exists only in CommonJS
- [Files](../reading_and_writing_files/README.md) — the calls that resolve a relative path against `process.cwd()`
- [Rust: `Path` and `PathBuf` ↗](https://masiarek.github.io/rust-learning-library/04_Files/path_and_pathbuf/index.html) — paths as their own type, in Rust
- [Encodings: Terminal hyperlinks, and the URI that is not one ↗](https://masiarek.github.io/encodings-learning-library/06_Terminal/terminal_hyperlinks/index.html) — a `file://` URI encodes the space as `%20` there too
- [Linux: What a dot means to the shell ↗](https://masiarek.github.io/linux-learning-library/10_Files/what_a_dot_means_to_the_shell/index.html) — `.` and `..` as entries every directory lists

## Sources to start from

- [Node.js 24 — import.meta.dirname ↗](https://nodejs.org/docs/latest-v24.x/api/esm.html#importmetadirname)
- [Node.js 24 — url.fileURLToPath ↗](https://nodejs.org/docs/latest-v24.x/api/url.html#urlfileurltopathurl-options)
- [Node.js 24 — path.resolve ↗](https://nodejs.org/docs/latest-v24.x/api/path.html#pathresolvepaths)
