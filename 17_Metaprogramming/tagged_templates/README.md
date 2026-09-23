# Tagged templates — a function that receives the pieces of a template

**Level:** 201 · for anyone who has seen html`...` or sql`...` in a codebase

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A tag receives the literal pieces and the values separately — always one more piece than values — and the pieces array is frozen and is the same object on every call from one place in the source, with `.raw` keeping backslashes as typed.

**Keywords:** `tagged template`, `String.raw`

## What the finished page will answer

- What does a tag receive for `` tag`a${1}b${10}\n` ``: how many pieces, and how many values?
- Why is the pieces array frozen, and the same object on every call from one call site?
- What does `.raw` hold that the cooked pieces do not, and what does `String.raw` return for `\n`?
- Why may a tagged template contain an invalid escape such as `\unicode`, when an untagged one is a `SyntaxError`?
- Must a tag return a string, and how does an HTML-escaping tag treat the values differently from the literal pieces?

## Examples it will need

- [ ] `tagged_templates_pieces_js.js` — the pieces, raw pieces and values a tag receives, and whether two calls share one pieces array
- [ ] `tagged_templates_escape_html_js.js` — a tag that escapes <, > and & in the values but not in the literal pieces

## See also

- [Template literals](../../09_Strings_and_Unicode/template_literals/README.md) — untagged templates, and where tags first appear
- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — the rest parameter a tag collects its values with
- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the frozen array a tag receives
- [C: A format string is a program ↗](https://masiarek.github.io/c-learning-library/03_Strings/a_format_string_is_a_program/index.html) — a C format string, also a little program run over the values
- [Rust: Why `println!` is a macro ↗](https://masiarek.github.io/rust-learning-library/37_Procedural_Macros/why_println_is_a_macro/index.html) — the compile-time alternative: Rust checks its format string before running

## Sources to start from

- [MDN — Template literals: tagged templates ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [ECMA-262 — GetTemplateObject ↗](https://tc39.es/ecma262/#sec-gettemplateobject)
- [MDN — String.raw() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
