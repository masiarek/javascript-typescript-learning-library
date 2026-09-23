# `import.meta` — where the current module lives

**Level:** 201 · for anyone who needs to know where the running module is

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `import.meta.url` is a `file:` URL, not a path — a folder named `meta dir` comes back as `meta%20dir` — and Node adds `filename`, `dirname`, `resolve()` and `main` to the same object, which a `.cjs` file cannot even mention.

**Keywords:** `import.meta`, `import.meta.url`, `import.meta.resolve`, `import.meta.main`

## What the finished page will answer

- What do `import.meta.url` and `import.meta.filename` print for a module in a folder whose name has a space?
- Which keys does `import.meta` have in Node, and what does each hold for the running file?
- When is `import.meta.main` `true`, and what was the CommonJS way to ask the same question?
- Does `import.meta.resolve("./missing.mjs")` check that the file exists?
- What happens when a `.cjs` file mentions `import.meta`?

## Examples it will need

- [ ] `import_meta_fields_sh.sh` — every key of import.meta for a module in a folder named with a space, run directly and then imported by another module

## See also

- [Paths and file URLs](../../19_Node_Runtime/paths_and_file_urls/README.md) — turning import.meta.url into a path, and the dirname that replaces __dirname
- [ES modules and CommonJS](../esm_and_commonjs/README.md) — the CommonJS variables that import.meta stands in for
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — process.argv, the other record of what is running

## Sources to start from

- [MDN — import.meta ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Node.js 24 — ES modules: import.meta ↗](https://nodejs.org/docs/latest-v24.x/api/esm.html#importmeta)
- [ECMA-262 — Meta Properties ↗](https://tc39.es/ecma262/#sec-meta-properties)
