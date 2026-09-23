# Module resolution — `nodenext`, `bundler`, and the `.ts` in an import

**Level:** 301 · for anyone who has imported one of their own files

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** When Node runs the `.ts` file itself, `import "./util.ts"` is the only spelling that works: `bundler` accepts `"./util"` and `nodenext` accepts `"./util.js"`, and Node refuses both with `ERR_MODULE_NOT_FOUND`, because it never adds or swaps an extension.

**Keywords:** `moduleResolution`, `nodenext`, `bundler`, `allowImportingTsExtensions`, `rewriteRelativeImportExtensions`

## What the finished page will answer

- Which of `./util`, `./util.js` and `./util.ts` does `nodenext` accept, which does `bundler` accept, and which does Node run?
- Why does `nodenext` suggest `./util.js` for a file named `util.ts`, and when is that advice right?
- What do `allowImportingTsExtensions` and `rewriteRelativeImportExtensions` each do, and why does the first need `noEmit`?
- How does a package's `exports` map change what `nodenext` and `bundler` resolve?
- Which `moduleResolution` values did TypeScript 7 remove, and what does TS5108 say when a tsconfig still uses `node10`?

## Examples it will need

- [ ] `module_resolution_three_specifiers_sh.sh` — for each of ./util, ./util.js and ./util.ts: the nodenext verdict, the bundler verdict and what Node does
- [ ] `module_resolution_removed_options_sh.sh` — the TS5108 and TS5102 errors TypeScript 7 gives for moduleResolution node10 and classic and for baseUrl

## See also

- [`package.json`](../../14_Modules/package_json_type_and_exports/README.md) — how Node picks a file from a package
- [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md) — the module format nodenext reads from package.json
- [Type-only imports](../type_only_imports/README.md) — the other import line Node and tsc read differently
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — where module and moduleResolution are set

## Sources to start from

- [TypeScript Modules Reference — The moduleResolution compiler option ↗](https://www.typescriptlang.org/docs/handbook/modules/reference.html#the-moduleresolution-compiler-option)
- [Node.js 24 — ECMAScript modules: mandatory file extensions ↗](https://nodejs.org/docs/latest-v24.x/api/esm.html#mandatory-file-extensions)
- [TSConfig reference — allowImportingTsExtensions ↗](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions)
