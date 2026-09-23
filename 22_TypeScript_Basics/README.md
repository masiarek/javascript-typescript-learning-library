# 22 — TypeScript basics

**One line:** TypeScript is checked by one program and run by another: `tsc` reads the types and reports errors, Node deletes the types and runs what is left, and nothing connects the two unless you run both.

This chapter sets up the two-step model the later TypeScript chapters rely on. It starts with what TypeScript adds and what erasure leaves behind, then shows the two commands: Node, which strips types and runs, and `tsc`, which checks and writes nothing. Next come the syntax Node cannot strip, the `tsconfig.json` options this library uses, and the eight checks behind `strict`. It ends with inference, which decides how many annotations you write, and with TypeScript 7, the Go port of the compiler that checks every example here.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [What TypeScript adds](what_typescript_adds/README.md) | 101 | TypeScript is JavaScript plus a checker that runs before the program does: `tsc` rejects `user.fristName` and suggests `firstName`, while Node, which only deletes type syntax and runs the rest, prints `undefined`. | stub |
| [Types are erased](types_are_erased/README.md) | 101 | Node erases types by overwriting each annotation with spaces, so `area.toString()` shows blanks where `: Point` and `: number` stood, and an interface used as a value, `p instanceof Point`, fails at run time with a ReferenceError. | stub |
| [Running TypeScript](running_typescript/README.md) | 101 | `node server.ts` blanks out the types and runs, so a file that assigns `"8080"` to a `number` prints `80801` and exits 0; the check is a separate command, `tsc --noEmit`, which reports TS2322, writes nothing and exits 1. | stub |
| [Erasable syntax](erasable_syntax/README.md) | 201 | Node runs TypeScript by overwriting type syntax with spaces and stops with ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX at `enum`, parameter properties, a `namespace` holding values, `import x = require()` and the old `<number>x` assertion; `erasableSyntaxOnly` makes tsc report each as TS1294. | stub |
| [`tsc` and `tsconfig.json`](tsc_and_tsconfig/README.md) | 201 | `tsc` with no file names checks the project `tsconfig.json` describes; `tsc app.ts` beside that file stops with TS5112, because naming files means ignoring the config, and TypeScript 7 makes you say so with `--ignoreConfig`. | stub |
| [`strict`](strict_mode_in_typescript/README.md) | 201 | In TypeScript 7 `strict` is on unless you turn it off, and it stands for eight checks: a file that breaks each once gets eight errors with no flag given and none under `--strict false`, while `--alwaysStrict false` is now error TS5108. | stub |
| [Annotations and inference](annotations_and_inference/README.md) | 101 | Inference types most variables unaided: `let count = 1` is `number`, `const one = 1` is the literal type `1`, and a `map` callback's parameter is typed from the array; a declared function's parameters are not, and `strict` reports them as TS7006. | stub |
| [TypeScript 7](typescript_7/README.md) | 101 | TypeScript 7 is the compiler ported to Go: `bin/tsc` in the npm package is a two-line Node script that starts a native executable which `go version -m` reports as built by go1.26.4 from `microsoft/typescript-go`, and `require("typescript")` now returns only a version. | stub |
<!-- /lessons -->

## Boundaries

The type syntax itself, from literal types to unions and object shapes, is the next chapter, Everyday types; how `.ts` files import each other and find `@types` packages belongs to the chapter on declaration files and module resolution.
