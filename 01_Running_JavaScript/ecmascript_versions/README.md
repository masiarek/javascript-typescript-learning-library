# ECMAScript versions — ES2015 to ES2026, and how a feature gets in

**Level:** 101 · for anyone who has seen ES6 and ES2015 used for the same thing

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Since ES2015 an edition comes out every year, named for the year, holding the proposals that reached Stage 4 in time; engines ship in their own order, so Node 25.2.1 has ES2027's `DisposableStack` but not ES2026's `Math.sumPrecise`.

**Keywords:** `ES6`, `ES2015`, `TC39`, `Stage 4`, `ECMA-262`

## What the finished page will answer

- Which edition number goes with which year (ES6 is ES2015, ES11 is ES2020), and why did the names switch to years?
- What must a proposal show at Stages 1, 2, 2.7, 3 and 4, and why does Stage 4 need two compatible implementations?
- Which ES2025, ES2026 and ES2027 features does Node 24 run, which does Node 25.2.1 run, and which does neither?
- How do you find the edition a feature arrived in, using the finished-proposals list and the spec draft?

## Examples it will need

- [ ] `ecmascript_versions_by_edition_js.js` — one feature per edition from ES2015 to ES2027, with the edition and whether this Node has it

## See also

- [Which features your Node has](../which_features_your_node_has/README.md) — checking one feature before you depend on it
- [`using` and `Symbol.dispose`](../../17_Metaprogramming/explicit_resource_management/README.md) — an ES2027 feature Node already runs
- [Temporal](../../16_Dates_and_Time/temporal/README.md) — a Stage 4 feature Node does not run by default
- [Documentation](../../32_Resources/documentation/README.md) — where the spec and the proposals live
- [Rust: RFC 1054 — the method that renamed itself to promise less ↗](https://masiarek.github.io/rust-learning-library/14_Strings/rfc_1054_str_words/index.html) — how a change reaches Rust's standard library through an RFC

## Sources to start from

- [TC39 — The TC39 Process ↗](https://tc39.es/process-document/)
- [TC39 — Finished proposals ↗](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- [Ecma International — ECMA-262 ↗](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
