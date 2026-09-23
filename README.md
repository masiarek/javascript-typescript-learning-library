# JavaScript and TypeScript — a learning library

**JavaScript and TypeScript, one question per page.** What `==` does before it compares, what a closure keeps, why a resolved promise beats a zero-millisecond timer, what `"😀".length` counts, and, on the TypeScript side, what a type promises, what `tsc` checks, and where the types stop telling the truth. Every claim on a finished page is backed by a program whose output is checked against a recorded answer key in CI, on Ubuntu and on macOS.

TypeScript is JavaScript with types that are checked and then erased, so the two share one library: the JavaScript chapters come first, and the TypeScript chapters build on them.

<!-- progress -->
**222 pages in 33 chapters: 4 checked, 218 stubs.** A stub is an outline — the claim, the questions the finished page will answer and the examples it will need — and says so at the top. It becomes a lesson when its first example runs in CI.
<!-- /progress -->

## Start here

[**00 — Start here**](00_Start_Here/README.md) — who this is for, how a page is laid out, and [how a page is checked](00_Start_Here/how_a_page_is_checked/README.md): one function run by Node and checked by `tsc`. To look up a single term, use the [keyword index](KEYWORDS.md).

## The chapters

<!-- chapters -->
### JavaScript, the language

Values, equality, scope, functions, objects, collections, text, numbers, control flow, errors, async, modules, regular expressions, dates, metaprogramming and memory.

| | Chapter | What it covers | Pages |
|---|---|---|---|
| 01 | [Running JavaScript](01_Running_JavaScript/README.md) | What a line of JavaScript does depends on how it was run — script or module, strict or sloppy, and on which Node — so the first skill is knowing which of those you are in. | 7 (7 stubs) |
| 02 | [Values and types](02_Values_and_Types/README.md) | JavaScript has eight types — seven immutable primitives and the object — and most surprises about values come from the line between them: `typeof null`, wrapper objects, and assignment that copies a primitive but shares an object. | 7 (7 stubs) |
| 03 | [Equality and coercion](03_Equality_and_Coercion/README.md) | Most JavaScript operators convert their operands before they work, and every famous surprise — `[] == false`, `"1" + 1`, `null >= 0` — follows from a handful of fixed conversion rules you can run and read. | 7 (7 stubs) |
| 04 | [Variables and scope](04_Variables_and_Scope/README.md) | A JavaScript variable is a binding in a scope, and nearly every scope surprise comes down to when a binding is created, how far it reaches, and whether a loop turn or a function call gets its own. | 7 (7 stubs) |
| 05 | [Functions](05_Functions/README.md) | A function is an object like any other, stored, passed and given properties, and for every function except an arrow, `this` is chosen by the call rather than by the place the function was written. | 8 (8 stubs) |
| 06 | [Objects](06_Objects/README.md) | An object is a set of properties keyed only by strings and symbols, and the everyday tools that copy or lock one — spread, `Object.assign`, `Object.freeze` — stop at the first level, leaving nested objects shared and writable. | 8 (8 stubs) |
| 07 | [Prototypes and classes](07_Prototypes_and_Classes/README.md) | Every object inherits through a chain of prototypes, and a class is a constructor function that builds that chain for you, with a few rules of its own: `new` is required, the body is strict, and `this` waits for `super()`. | 8 (8 stubs) |
| 08 | [Arrays and collections](08_Arrays_and_Collections/README.md) | An array is an object with string index keys and a self-adjusting `length`, and its defaults (string sorting, skipped holes, methods that change it in place) catch everyone once; `Map`, `Set`, `WeakMap` and typed arrays exist for the jobs an array or a plain object does badly. | 9 (9 stubs) |
| 09 | [Strings and Unicode](09_Strings_and_Unicode/README.md) | A JavaScript string is a list of UTF-16 code units, so length, iteration, comparison, case and bytes each have a code-unit answer that differs from what a reader would call a character. | 9 (9 stubs) |
| 10 | [Numbers and math](10_Numbers_and_Math/README.md) | Every JavaScript number is a 64-bit binary double, so exactness ends at 2^53 and at the first decimal fraction, and each page in this chapter is a consequence of that or a way around it. | 8 (8 stubs) |
| 11 | [Control flow and iteration](11_Control_Flow_and_Iteration/README.md) | Every way of walking a sequence in JavaScript — `for...of`, spread, destructuring, generators, iterator helpers and `for await` — runs on one small protocol, `[Symbol.iterator]()` and `next()`, while the older statements keep rules of their own: `switch` compares with `===` and `&&` returns an operand. | 8 (8 stubs) |
| 12 | [Errors](12_Errors/README.md) | JavaScript lets you throw any value and catch it anywhere up the stack, but only an `Error` carries a stack and a `cause`, and an error nobody catches — thrown or rejected — ends a Node process with exit status 1. | 6 (6 stubs) |
| 13 | [Async and the event loop](13_Async_and_the_Event_Loop/README.md) | JavaScript runs one piece of code at a time on one thread, and callbacks, promises, `await` and timers are all ways of queueing the next piece — so what runs when is decided by queues, not by threads. | 11 (11 stubs) |
| 14 | [Modules](14_Modules/README.md) | Node runs two module systems side by side, and a file's extension or the nearest `package.json` settles which one it gets before a single line of it runs. | 8 (8 stubs) |
| 15 | [Regular expressions](15_Regular_Expressions/README.md) | A JavaScript regex carries state as well as a pattern: its flags change what `.` and `\p{…}` mean, and with `g` the same call can answer differently the second time. | 7 (7 stubs) |
| 16 | [Dates and time](16_Dates_and_Time/README.md) | A `Date` is one number of milliseconds since 1970 UTC, and nearly every date bug comes from converting to and from it: months counted from zero, strings read as UTC or as local time, and a zone chosen only when printing. | 6 (6 stubs) |
| 17 | [Metaprogramming](17_Metaprogramming/README.md) | JavaScript lets a program change how the language treats its objects — with well-known symbols, proxies, template tags, decorators and `using` — and each hook comes with rules the engine enforces even when your code does not. | 6 (6 stubs) |
| 18 | [Memory and garbage collection](18_Memory_and_Garbage_Collection/README.md) | Node frees an object when nothing can reach it any more, not when you are done with it, so every leak is a reference you forgot, and collection is something a program can observe but never schedule. | 4 (4 stubs) |

### Where JavaScript runs

Node's own APIs, threads and processes, and the browser.

| | Chapter | What it covers | Pages |
|---|---|---|---|
| 19 | [The Node.js runtime](19_Node_Runtime/README.md) | Node is the language plus an operating-system process, and most of its surprises are the operating system showing through: arguments and environment as strings, files as bytes, pipes that buffer, and exit statuses. | 9 (9 stubs) |
| 20 | [Workers and parallelism](20_Workers_and_Parallelism/README.md) | One JavaScript agent never runs two things at once; parallelism in Node needs a second agent, a worker or a process, and data crosses between them by copy, by transfer, or through shared memory that needs `Atomics`. | 5 (5 stubs) |
| 21 | [The browser](21_The_Browser/README.md) | Everything a page does beyond computing — its document, events, painting, network rules and storage — comes from the browser, not from JavaScript, and each part has rules that Node never enforces. | 6 (6 stubs) |

### TypeScript

The type system that is checked by `tsc` and erased before Node runs the code.

| | Chapter | What it covers | Pages |
|---|---|---|---|
| 22 | [TypeScript basics](22_TypeScript_Basics/README.md) | TypeScript is checked by one program and run by another: `tsc` reads the types and reports errors, Node deletes the types and runs what is left, and nothing connects the two unless you run both. | 8 (8 stubs) |
| 23 | [Everyday types](23_Everyday_Types/README.md) | Each everyday type names a set of values, and the surprises follow from that: a union of two object types lets you use fewer members, a `readonly` property guards only one path to the object, and a tuple can still `push`. | 9 (9 stubs) |
| 24 | [Narrowing](24_Narrowing/README.md) | After a test that only some members of a union can pass, the checker shrinks the variable's type inside that branch; the chapter is about which tests it understands, which it takes on trust, and how to make it prove no case was forgotten. | 6 (6 stubs) |
| 25 | [Type compatibility](25_Type_Compatibility/README.md) | TypeScript decides assignability by shape, not by name: a value fits a type when it has the members the type asks for, and each page here is either a rule that follows from that or a way around it. | 5 (5 stubs) |
| 26 | [Generics](26_Generics/README.md) | A type parameter is a blank that tsc fills in at every call from the arguments, and most surprises come from what it fills in when you did not say. | 5 (5 stubs) |
| 27 | [Type operators](27_Type_Operators/README.md) | Types can be computed from values and from other types, so one definition can produce the rest instead of being copied by hand and drifting. | 7 (7 stubs) |
| 28 | [Classes in TypeScript](28_Classes_in_TypeScript/README.md) | Almost everything TypeScript adds to a class is checked by tsc and then erased, so each modifier is a compile-time promise, not a run-time wall. | 5 (5 stubs) |
| 29 | [Declaration files and module resolution](29_Declaration_Files_and_Module_Resolution/README.md) | tsc checks your code against declarations it takes on trust and files it finds by its own rules, and either can disagree with what Node actually loads. | 5 (5 stubs) |
| 30 | [Where types lie](30_Where_Types_Lie/README.md) | A program that tsc accepts under `strict` can still crash with a `TypeError`: five pages here show a way it happens, the clean type check beside the crash, and one shows the fix. | 6 (6 stubs) |

### Around both

The tools every project meets, and where to read further.

| | Chapter | What it covers | Pages |
|---|---|---|---|
| 31 | [Tooling](31_Tooling/README.md) | Each tool around a JavaScript project answers one question the others never check — which versions, which binary, which types, which mistakes, which layout, which syntax, which line runs next — and each can be swapped without touching the language. | 8 (8 stubs) |
| 32 | [Resources](32_Resources/README.md) | Three ways to read further: the books on the shelf beside this library, mapped to its chapters; the official references its pages cite; and the same questions answered in the sibling libraries. | 3 (3 checked) |
<!-- /chapters -->

## Running the examples

You need **Node 24 or later** and Python 3 (for the runner). Node runs a `.ts` file itself by erasing its types; the TypeScript compiler that checks the types is pinned in `package.json`, so install it once:

```bash
npm ci
python3 tools/run_examples.py --check
```

Each example is one file, run from its own folder:

```bash
node page_check_total_js.js
```

## The one rule

No page hand-types what a program prints. A lesson marks the spot and the runner fills it from a real run, so an example that behaves differently in a new Node or TypeScript release breaks the build instead of quietly making a page wrong. A stub has no output at all, and says so. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Sibling libraries

The same questions, put to other languages. Stubs link the matching sibling page under **See also**.

- [**Encodings** ↗](https://masiarek.github.io/encodings-learning-library/) — bytes, code points, UTF-16 and surrogate pairs, normalization: the ground under every JavaScript string.
- [**Regex** ↗](https://masiarek.github.io/regex-learning-library/) — one regular-expression question per page, with a JavaScript column beside Python, Perl, Java, Go, Rust and others.
- [**Concurrency** ↗](https://masiarek.github.io/concurrency-learning-library/) — event loops, async and await, workers and shared memory, across six languages.
- [**Java text** ↗](https://masiarek.github.io/java-text-learning-library/) — Java's `char` is a UTF-16 code unit too, and fails the same way.
- [**Math** ↗](https://masiarek.github.io/math-learning-library/) — machine numbers, the doubles every JavaScript `number` is.
- [**Python** ↗](https://masiarek.github.io/python-learning-library/), [**Rust** ↗](https://masiarek.github.io/rust-learning-library/), [**Go** ↗](https://masiarek.github.io/go-learning-library/), [**C** ↗](https://masiarek.github.io/c-learning-library/) and [**Linux** ↗](https://masiarek.github.io/linux-learning-library/) — for side-by-side comparisons.
