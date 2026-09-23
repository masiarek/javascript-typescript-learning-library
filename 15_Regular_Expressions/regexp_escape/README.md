# `RegExp.escape` — matching user text literally

**Level:** 201 · for anyone building a regex from text a user typed

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `RegExp.escape` (ES2025, in Node 24) turns text into a pattern that matches only itself — `new RegExp("1.5")` matches `"125"`, the escaped one does not — and it escapes more than punctuation: `RegExp.escape("1.5")` is `\x31\.5`.

**Keywords:** `RegExp.escape`

## What the finished page will answer

- What does `RegExp.escape` return for `"1.5"`, `"a+b"`, `"c-d, e"` and a space, and why is a leading digit or letter written as `\x31`?
- Why does `new RegExp("1.5")` match `"125"`, and what does the escaped pattern match instead?
- Is the escaped text safe right after a backreference like `\1`, inside a character class, and in a `v`-mode pattern?
- Which input breaks the pre-2025 idiom `s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")`?
- Which Node versions have `RegExp.escape`, and how does a program check before using it?

## Examples it will need

- [ ] `regexp_escape_outputs_js.js` — RegExp.escape of several strings, and a pattern built with and without it tested against 125
- [ ] `regexp_escape_old_idiom_js.js` — the pre-2025 replace idiom beside RegExp.escape, on a digit placed right after a backreference

## See also

- [Regex literals and flags](../regex_literals_and_flags/README.md) — new RegExp, where escaped text ends up
- [Named groups and replacements](../named_groups_and_replacements/README.md) — the other escape: $ in replacement text
- [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md) — checking for RegExp.escape before relying on it
- [Regex: `\Q…\E` ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/quote/index.html) — \Q…\E, and every language's escape function
- [Regex: Escaping and literal text ↗](https://masiarek.github.io/regex-learning-library/11_Topics/escaping_and_literal_text/index.html) — which characters need a backslash, engine by engine

## Sources to start from

- [MDN — RegExp.escape() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape)
- [ECMA-262 — RegExp.escape ↗](https://tc39.es/ecma262/#sec-regexp.escape)
- [TC39 — RegExp escaping proposal ↗](https://github.com/tc39/proposal-regex-escaping)
