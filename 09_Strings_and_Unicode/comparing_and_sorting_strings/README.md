# Comparing and sorting strings — code-unit order versus `localeCompare`

**Level:** 201 · for anyone who has sorted a list of names

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `<` and a bare `sort()` compare UTF-16 code units, so `"Z" < "a"`, `"Éclair"` sorts after `"zebra"`, and `"😀" < "\u{FF61}"` though U+1F600 is the larger code point; `localeCompare` and `Intl.Collator` follow a locale's alphabet, and `numeric: true` puts `item9` before `item10`.

**Keywords:** `localeCompare`, `Intl.Collator`

## What the finished page will answer

- Why is `"Z" < "a"` true, and where does `"Éclair"` land in a default sort?
- Why is `"😀" < "\u{FF61}"` true when U+1F600 is the larger code point?
- How does the order of `ä` and `z` change between `localeCompare` in `en`, `de` and `sv`?
- What does `Intl.Collator` with `numeric: true` do to `item10`, `item9` and `item1`?
- What do the four `sensitivity` settings (`base`, `accent`, `case`, `variant`) do to `a`, `A` and `á`?

## Examples it will need

- [ ] `comparing_and_sorting_strings_order_js.js` — one word list sorted by `sort()`, by `localeCompare` in `en`, `de` and `sv`, and by an `Intl.Collator` with `numeric: true`
- [ ] `comparing_and_sorting_strings_sensitivity_js.js` — a table of `localeCompare` results for `a`/`A`/`á` pairs under the four `sensitivity` settings

## See also

- [`sort()` compares strings](../../08_Arrays_and_Collections/sort_compares_strings/README.md) — the default sort compares strings even when the elements are numbers
- [`<` and `>`](../../03_Equality_and_Coercion/comparing_with_less_than/README.md) — the rules `<` follows for strings and for mixed types
- [Strings are UTF-16](../strings_are_utf16/README.md) — the code units the comparison runs on
- [Normalization](../normalization/README.md) — two spellings `localeCompare` treats as one
- [Case conversion](../case_conversion/README.md) — case-insensitive comparison without lowercasing both sides
- [Encodings: Sorting and collation ↗](https://masiarek.github.io/encodings-learning-library/07_Real_Data/sorting_and_collation/index.html) — collation's three levels, and why the locale decides the order
- [Python: Sorting is not comparing ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/sorting_is_not_comparing/index.html) — the Polish names a code-point sort misorders in Python
- [Rust: Comparing and sorting text ↗](https://masiarek.github.io/rust-learning-library/14_Strings/comparing_strings/index.html) — in Rust, strings compare byte by byte and collation needs a crate

## Sources to start from

- [MDN — String.prototype.localeCompare() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
- [MDN — Intl.Collator ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [ECMA-262 — IsLessThan ↗](https://tc39.es/ecma262/#sec-islessthan)
