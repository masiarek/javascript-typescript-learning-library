# Regex literals and flags — `g`, `i`, `m`, `s`, `u`, `v`, `y`, `d`

**Level:** 101 · for anyone who has written a regex in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A regex has eight flags, and `.flags` reports them in one fixed order whatever order you typed — `/a/yigd.flags` is `"dgiy"` — while `u` with `v`, a repeated flag or an unknown letter is a `SyntaxError`.

**Keywords:** `RegExp`, `flags`, `dotAll`, `sticky`, `hasIndices`

## What the finished page will answer

- In what order does `.flags` list the flags, and which property reports each one (`global`, `dotAll`, `hasIndices` and the rest)?
- What does each of `d`, `g`, `i`, `m`, `s`, `u`, `v` and `y` change, shown on one subject string?
- When is a bad pattern reported: `/(/` in the source, against `new RegExp("(")` at run time?
- Which flag combinations are errors, and what message does each give?
- Can a flag apply to part of a pattern: what do `(?i:a)b` and `(?i)ab` do in Node 24?

## Examples it will need

- [ ] `regex_literals_and_flags_each_js.js` — one subject matched under each of the eight flags, one line per flag with what changed
- [ ] `regex_literals_and_flags_errors_sh.sh` — a bad regex literal failing before the first line runs, beside new RegExp failing at run time, with the exit statuses

## See also

- [The `g` flag and `lastIndex`](../the_g_flag_and_lastindex/README.md) — the state that g and y add to a regex
- [Unicode mode](../unicode_mode/README.md) — u and v, the two flags that change what a character is
- [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md) — the ES versions that added s, d, v and modifiers
- [Built-in error types](../../12_Errors/error_types/README.md) — the SyntaxError a bad pattern throws, early or late
- [Regex: Flags, and where you can turn one on ↗](https://masiarek.github.io/regex-learning-library/07_Anchors/flags_and_inline_modifiers/index.html) — the same flag letters compared across eight engines
- [Regex: `(?i)`, `(?m)`, `(?s)`, `(?x)`, `(?-i)` ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/inline_flags/index.html) — inline flags in other engines; JavaScript's (?i:…) arrived later, in ES2025

## Sources to start from

- [MDN — Regular expressions: advanced searching with flags ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)
- [ECMA-262 — get RegExp.prototype.flags ↗](https://tc39.es/ecma262/#sec-get-regexp.prototype.flags)
- [MDN — Modifier: (?ims-ims:...) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
