# `<` and `>` — string order, number order, and `null >= 0`

**Level:** 201 · for anyone who has sorted numbers stored as strings

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `<` compares two strings by UTF-16 code units, so `"10" < "9"` and `"Z" < "a"` are true, and anything else as numbers, where `null` becomes `0` — so `null >= 0` is true although `null > 0` and `null == 0` are false.

**Keywords:** `<`, `>`, `<=`, `>=`, `IsLessThan`

## What the finished page will answer

- Why is `"10" < "9"` true while `"10" < 9` is false?
- How can `null >= 0` be true when `null > 0` and `null == 0` are both false?
- Why is every comparison with `undefined` or `NaN` false, including `NaN <= NaN`?
- Why is `"\u{1F600}" < "\uFFFF"` true, and where do accented letters land (`"é" < "z"`)?
- What do `1 < 2 < 3` and `3 > 2 > 1` return, and why?

## Examples it will need

- [ ] `comparing_with_less_than_strings_js.js` — string pairs compared with <, including digits, case, an accented letter and an emoji
- [ ] `comparing_with_less_than_null_js.js` — null, undefined and NaN compared with 0 using <, >, <=, >= and ==

## See also

- [Comparing and sorting strings](../../09_Strings_and_Unicode/comparing_and_sorting_strings/README.md) — `localeCompare`, for when code-unit order is wrong
- [`sort()` compares strings](../../08_Arrays_and_Collections/sort_compares_strings/README.md) — `sort()` uses the same string order
- [Strings are UTF-16](../../09_Strings_and_Unicode/strings_are_utf16/README.md) — the code units that `<` compares
- [`===` and `==`](../strict_and_loose_equality/README.md) — why `==` treats `null` differently
- [Perl: `sort` is not alphabetical ↗](https://masiarek.github.io/perl-learning-library/04_Records_and_Fields/sort_is_not_alphabetical/index.html) — in Perl too, `10` sorts before `9`; `<=>` compares numbers
- [Python: Sorting is not comparing ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/sorting_is_not_comparing/index.html) — code-point order is not alphabetical in Python either
- [Rust: Comparing and sorting text ↗](https://masiarek.github.io/rust-learning-library/14_Strings/comparing_strings/index.html) — in Rust, strings compare as UTF-8 bytes, which is code-point order

## Sources to start from

- [MDN — Less than (<) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- [ECMA-262 — IsLessThan ↗](https://tc39.es/ecma262/#sec-islessthan)
