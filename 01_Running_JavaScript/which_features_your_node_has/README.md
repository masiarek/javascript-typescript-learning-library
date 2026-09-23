# Which features your Node has — versions, V8, and checking before you rely on one

**Level:** 201 · for anyone about to use a feature they read about last week

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A newer Node is not a superset of an older one: `node --harmony-temporal` gives Node 24 a working `Temporal` but leaves it `undefined` in Node 25.2.1, so test for a feature with `typeof` rather than trusting a version number.

**Keywords:** `process.versions`, `process.version`, `--v8-options`, `--harmony`, `V8`

## What the finished page will answer

- What do `process.version`, `process.versions.v8` and `process.versions.unicode` print on Node 24 and on Node 25.2.1?
- Which `--harmony-` and `--js-` flags does `node --v8-options` list, and which of them change anything when passed?
- Why does `--harmony-temporal` produce a `Temporal` object in Node 24.21.0 and nothing in Node 25.2.1?
- How do you check for a built-in with `typeof` and for new syntax such as `using` with `new Function`, and why does syntax need the second kind of check?

## Examples it will need

- [ ] `which_features_versions_js.js` — process.version, the V8, ICU and Unicode versions, and process.features
- [ ] `which_features_detect_js.js` — typeof checks for five recent built-ins and a new Function check for using declarations, each with yes or no
- [ ] `which_features_temporal_flag_sh.sh` — typeof Temporal with and without --harmony-temporal, on the Node that runs it

## See also

- [ECMAScript versions](../ecmascript_versions/README.md) — which edition a feature belongs to
- [Temporal](../../16_Dates_and_Time/temporal/README.md) — the feature the flag example is about
- [npm](../../31_Tooling/npm_and_package_json/README.md) — `engines`, where a project states the Node it needs
- [The language and the host](../the_language_and_the_host/README.md) — which features come from V8 and which from Node
- [Rust: MSRV: the oldest compiler you promise to support ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/msrv/index.html) — the oldest compiler a Rust crate promises to support
- [Rust: rustup: the `rustc` you run is not the compiler ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/rustup/index.html) — the compiler on your PATH may not be the one you think
- [Encodings: The table has a version ↗](https://masiarek.github.io/encodings-learning-library/02_Characters/the_table_has_a_version/index.html) — each runtime carries its own Unicode version, Node included

## Sources to start from

- [Node.js 24 — process.versions ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processversions)
- [Node.js 24 — --v8-options ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--v8-options)
- [Node.js — Node.js Releases ↗](https://nodejs.org/en/about/previous-releases)
