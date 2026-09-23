# Documentation — the spec, MDN, the TypeScript handbook and the Node docs

**Level:** 101 · for finding the official answer

**One line:** The references the pages here cite — ECMA-262, MDN, the TypeScript handbook and TSConfig reference, the Node 24 docs, the web platform standards and the compatibility tables — each with one line on what it is for, every link checked on 2026-09-22.

The official references behind this library: the language specification, the TypeScript and Node.js documentation, the web platform standards, and the tables that say which engine supports what. Lessons cite these by section; this page says what each one is for. Every link was checked with curl on 2026-09-22, returned 200, and is given at its final address after redirects.

## The language

- [ECMA-262, current draft ↗](https://tc39.es/ecma262/) — the specification as TC39 edits it, updated as proposals reach stage 4; the draft of 20 September 2026 is ECMAScript 2027. Lessons link its `#sec-` anchors.
- [ECMAScript 2026, ECMA-262 17th edition ↗](https://262.ecma-international.org/17.0/) — the latest published edition, June 2026, in the HTML form Ecma names as the normative copy.
- [ECMA-262 at Ecma International ↗](https://ecma-international.org/publications-and-standards/standards/ecma-262/) — the standard's page at Ecma, with a copy of every published edition back to the first, of June 1997.
- [ECMA-402, current draft ↗](https://tc39.es/ecma402/) — the Internationalization API specification: `Intl.Segmenter`, `Intl.NumberFormat`, `Intl.DateTimeFormat` and `localeCompare` with locales.
- [TC39 proposals ↗](https://github.com/tc39/proposals) — every active proposal, listed by stage.
- [TC39 finished proposals ↗](https://github.com/tc39/proposals/blob/main/finished-proposals.md) — the proposals that reached stage 4, each with the year of the edition it ships in.
- [The TC39 process ↗](https://tc39.es/process-document/) — what a proposal must have to enter each stage.
- [MDN JavaScript Guide ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — tutorial chapters on the language, in reading order.
- [MDN JavaScript Reference ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) — one page per built-in object, operator and statement, each with a browser-compatibility table.

## TypeScript

- [The TypeScript Handbook ↗](https://www.typescriptlang.org/docs/handbook/intro.html) — the official guide to the type system.
- [TSConfig reference ↗](https://www.typescriptlang.org/tsconfig/) — every compiler option, with its default.
- [Announcing TypeScript 7.0 ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) — the release post of 8 July 2026 for the compiler ported to Go: what changed since 5.x and 6.0, the new behaviours, and how to run 6.0 and 7.0 side by side.
- [A 10x Faster TypeScript ↗](https://devblogs.microsoft.com/typescript/typescript-native-port/) — the earlier post that announced the port of the compiler to Go.
- [microsoft/TypeScript ↗](https://github.com/microsoft/TypeScript) — the TypeScript repository, where development and discussion of TypeScript 7 continue.
- [microsoft/typescript-go ↗](https://github.com/microsoft/typescript-go) — the staging repository of the Go port; its README says it is closed and will be archived in September 2026.
- [typescript-go CHANGES.md ↗](https://github.com/microsoft/typescript-go/blob/main/CHANGES.md) — the intentional differences between the TypeScript-based compiler and the Go one, most of them in how JavaScript files are checked.

## Node.js

- [Node.js 24 API documentation ↗](https://nodejs.org/docs/latest-v24.x/api/) — the documentation for Node 24, the version this library's CI runs; the address follows the newest 24.x release, v24.21.0 on the day checked.
- [Node.js 24 — Modules: TypeScript ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html) — how Node runs `.ts` files by stripping types, and which TypeScript features it cannot strip.
- [Node.js releases ↗](https://nodejs.org/en/about/previous-releases) — the release schedule: which release lines are Current, Active LTS or Maintenance LTS, and when each reaches end of life.

## The platform

- [HTML Standard ↗](https://html.spec.whatwg.org/multipage/) — the WHATWG standard for HTML and the browser APIs defined with it, including script loading, timers, workers and web storage.
- [HTML Standard — event loops ↗](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) — where a browser's tasks, microtasks and rendering steps are defined.
- [DOM Standard ↗](https://dom.spec.whatwg.org/) — nodes, events and event dispatch, and `AbortController` with `AbortSignal`.
- [Fetch Standard ↗](https://fetch.spec.whatwg.org/) — `fetch()`, requests and responses, and CORS.
- [Encoding Standard ↗](https://encoding.spec.whatwg.org/) — `TextEncoder`, `TextDecoder` and the text encodings a browser supports.
- [MDN Web APIs ↗](https://developer.mozilla.org/en-US/docs/Web/API) — reference pages for the web APIs, several of which Node also provides.

## Compatibility

- [node.green ↗](https://node.green/) — which ECMAScript features each Node version passes, from test runs; on the day checked its tables ran from ES2015 to ES2025 and included a nightly build.
- [ECMAScript compatibility table ↗](https://compat-table.github.io/compat-table/es2016plus/) — feature-by-feature support for ES2016 and later across compilers and polyfills, desktop and mobile browsers, and server runtimes.
- [Can I use ↗](https://caniuse.com/) — browser support for web platform and JavaScript features.
- [MDN browser-compat-data ↗](https://github.com/mdn/browser-compat-data) — the machine-readable data behind MDN's compatibility tables, covering browsers and JavaScript runtimes.

## V8

- [V8 blog ↗](https://v8.dev/blog) — posts from the team behind Node's JavaScript engine on its internals and performance; the newest post on the day checked was from August 2025.
- [V8 JavaScript and WebAssembly features ↗](https://v8.dev/features) — one explainer per language feature, most of them with a table of which browsers and runtimes support it.
