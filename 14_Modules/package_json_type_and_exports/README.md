# `package.json` — `type`, `exports` and how Node picks a file

**Level:** 201 · for anyone publishing a package, or wondering why an import path is refused

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Once a package has an `"exports"` field, any file it does not list is off limits — `require("greet/internal.cjs")` throws `ERR_PACKAGE_PATH_NOT_EXPORTED` although the file is on disk — and its `import` and `require` conditions can give the two systems different files.

**Keywords:** `"type": "module"`, `"exports"`, `"imports"`, `ERR_PACKAGE_PATH_NOT_EXPORTED`

## What the finished page will answer

- With `"exports"` set, what does `require("greet/internal.cjs")` do when that file exists but is not listed?
- How do the `import` and `require` conditions send the two module systems to different files, and which condition wins when several match?
- Which `package.json` decides a `.js` file's `"type"`, and what changes when a sub-folder has its own `package.json`?
- What do a subpath pattern like `"./features/*"` and a `#`-prefixed entry in `"imports"` let a package do?
- Can a package import itself by its own name, and does `"exports"` apply when it does?

## Examples it will need

- [ ] `package_json_exports_conditions_sh.sh` — one package loaded by import and by require (two different files), then ERR_PACKAGE_PATH_NOT_EXPORTED for a file it does not list
- [ ] `package_json_type_nearest_sh.sh` — the same .js file run as CommonJS and as ESM as the nearest package.json changes

## See also

- [ES modules and CommonJS](../esm_and_commonjs/README.md) — the two systems the type field chooses between
- [npm](../../31_Tooling/npm_and_package_json/README.md) — the rest of package.json: dependencies, scripts and the lockfile
- [Module resolution](../../29_Declaration_Files_and_Module_Resolution/module_resolution/README.md) — how tsc follows the same exports map
- [`require` and ES modules](../require_and_esm_interop/README.md) — what require() does once a condition picks an ES module
- [Python: `pyproject.toml` ↗](https://masiarek.github.io/python-learning-library/02_Projects_and_Environments/pyproject_toml/index.html) — the Python counterpart: one declarative project file
- [Rust: Packages and crates ↗](https://masiarek.github.io/rust-learning-library/27_Modules/packages_and_crates/index.html) — what a Cargo package contains and what it exposes

## Sources to start from

- [Node.js 24 — Packages: exports ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#exports)
- [Node.js 24 — Packages: conditional exports ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#conditional-exports)
- [Node.js 24 — Packages: type ↗](https://nodejs.org/docs/latest-v24.x/api/packages.html#type)
