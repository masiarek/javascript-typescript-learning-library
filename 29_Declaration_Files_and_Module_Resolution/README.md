# 29 — Declaration files and module resolution

**One line:** tsc checks your code against declarations it takes on trust and files it finds by its own rules, and either can disagree with what Node actually loads.

A TypeScript program is checked against types that come from somewhere: your files, `.d.ts` declaration files, packages and `@types`. The chapter starts with declaration files and the `declare` keyword, then how tsc finds a package's types, including TypeScript 6's change to the `types` default. Type-only imports and module resolution follow, the two places where tsc and Node can read the same import line differently. It ends with declaration merging, which adds to types that already exist.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Declaration files](declaration_files/README.md) | 201 | A `.d.ts` file holds types and no code, and tsc takes it on trust: `declare const APP_VERSION: string` makes `APP_VERSION.toUpperCase()` type-check, while Node, which never reads the file, throws `ReferenceError` on that line. | stub |
| [Types for packages](types_for_packages/README.md) | 201 | An import finds `@types/<name>` by itself, but globals such as `process` come only from packages listed in `types` — and since TypeScript 6 that list starts empty, so an installed `@types/node` adds nothing until `types` names it. | stub |
| [Type-only imports](type_only_imports/README.md) | 201 | Node needs every name in a plain `import { ... }` to exist at run time, so importing an interface without `type` passes tsc and then fails in Node with `SyntaxError: ... does not provide an export named 'Shape'`; `verbatimModuleSyntax` makes tsc catch it first. | stub |
| [Module resolution](module_resolution/README.md) | 301 | When Node runs the `.ts` file itself, `import "./util.ts"` is the only spelling that works: `bundler` accepts `"./util"` and `nodenext` accepts `"./util.js"`, and Node refuses both with `ERR_MODULE_NOT_FOUND`, because it never adds or swaps an extension. | stub |
| [Declaration merging](declaration_merging_and_augmentation/README.md) | 301 | Two `interface User` declarations merge into one type that needs both fields, while two `type` aliases with one name are an error; merging into the global `Array` interface adds a type, not code — `[1, 2, 3].last()` type-checks, then throws `TypeError`. | stub |
<!-- /lessons -->

## Boundaries

How Node itself loads modules — `package.json` `type` and `exports`, CommonJS interop and cycles — is in Modules.
