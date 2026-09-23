# Template literals — interpolation, multi-line strings, and tags

**Level:** 101 · for anyone who has glued strings together with a plus sign

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `${x}` converts with the string hint and `"" + x` with the default hint, so an object whose `valueOf` returns `1` and `toString` returns `"two"` gives `"two"` in a template and `"1"` after `+`; a symbol makes a template throw where `String(symbol)` works.

**Keywords:** `template literal`, `${...}`, `backtick`

## What the finished page will answer

- Why does an object whose `valueOf` returns `1` and `toString` returns `"two"` give `"two"` in a template and `"1"` with `"" + x`?
- What do `${[1, 2]}`, `${{}}`, `${null}` and `${undefined}` produce?
- Why does `${Symbol("id")}` throw a `TypeError` when `String(Symbol("id"))` works, and what does `tsc` say about it?
- Which newlines and which indentation does a multi-line template keep?
- What does a tag function receive, and why is `\unicode` a syntax error in a plain template but allowed after `String.raw`?

## Examples it will need

- [ ] `template_literals_conversion_js.js` — one object with `valueOf` and `toString` interpolated, concatenated and passed to `String()`, then arrays, `null` and `undefined` interpolated, then a symbol caught as a `TypeError`
- [ ] `template_literals_multiline_js.js` — a multi-line template inside an indented function, shown with `JSON.stringify` so the kept newlines and spaces are visible
- [ ] `template_literals_symbol_tserror.ts` — tsc's TS2731 diagnostic for interpolating a symbol, which suggests wrapping it in `String(...)`

## See also

- [ToPrimitive](../../03_Equality_and_Coercion/toprimitive/README.md) — the string and default hints behind the two conversions
- [The `+` operator](../../03_Equality_and_Coercion/the_plus_operator/README.md) — why `"" + x` asks `valueOf` first
- [Tagged templates](../../17_Metaprogramming/tagged_templates/README.md) — what a tag function receives, and `String.raw`
- [Template literal types](../../27_Type_Operators/template_literal_types/README.md) — the same backtick syntax in a type position
- [Python: String literals ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/string_literals/index.html) — the f-strings of Python, and its other literal prefixes
- [Rust: The format mini-language ↗](https://masiarek.github.io/rust-learning-library/14_Strings/the_format_language/index.html) — in Rust, formatting uses a mini-language instead of interpolated expressions

## Sources to start from

- [MDN — Template literals (Template strings) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ECMA-262 — Template Literals ↗](https://tc39.es/ecma262/#sec-template-literals)
