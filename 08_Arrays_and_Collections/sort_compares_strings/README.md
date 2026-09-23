# `sort()` compares strings — `[10, 9, 1]` sorts to `[1, 10, 9]`

**Level:** 101 · for anyone who has sorted an array of numbers

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Without a comparator, `sort()` compares elements as strings, by UTF-16 code units, so `[10, 9, 1].sort()` is `[1, 10, 9]`; `(a, b) => a - b` sorts numbers, and the boolean comparator `a > b` leaves `[3, 1, 2]` unsorted in Node.

**Keywords:** `sort`, `comparator`

## What the finished page will answer

- Why does `[10, 9, 1].sort()` return `[1, 10, 9]`, and what does `[-1, -2, 3, 20].sort()` return?
- Where do `undefined` and holes end up after a sort, with and without a comparator?
- Why does the comparator `(a, b) => a > b` leave `[3, 1, 2]` unsorted in Node, and what does `tsc` say about it?
- Is `sort` stable, so that records with equal keys keep their order, and since which edition is that guaranteed?
- How do you sort numbers in descending order, and strings by length and then alphabetically?

## Examples it will need

- [ ] `sort_compares_strings_default_js.js` — numbers, negative numbers and an `undefined` sorted with no comparator, beside the same arrays sorted with `(a, b) => a - b`
- [ ] `sort_compares_strings_boolean_tserror.ts` — tsc's TS2345 diagnostic for a comparator that returns `a > b`, a boolean where a number is expected
- [ ] `sort_compares_strings_stable_js.js` — records with equal keys sorted by one field and then another, showing that equal elements keep their earlier order

## See also

- [Comparing and sorting strings](../../09_Strings_and_Unicode/comparing_and_sorting_strings/README.md) — the code-unit order the default sort uses, and `localeCompare`
- [Mutating and copying methods](../mutating_and_copying_methods/README.md) — `sort` changes the array; `toSorted` leaves it alone
- [`<` and `>`](../../03_Equality_and_Coercion/comparing_with_less_than/README.md) — how `<` orders strings and numbers
- [Typed arrays and `ArrayBuffer`](../typed_arrays/README.md) — a typed array sorts numbers as numbers by default
- [Rust: `slice::sort_by` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/slice_methods/slice_sort_by/index.html) — in Rust, numbers sort numerically and a closure is needed only for other orders
- [Python: Sorting is not comparing ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/sorting_is_not_comparing/index.html) — the same code-point sort in Python, and the Polish names it misorders

## Sources to start from

- [MDN — Array.prototype.sort() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [ECMA-262 — Array.prototype.sort ↗](https://tc39.es/ecma262/#sec-array.prototype.sort)
- [ECMA-262 — CompareArrayElements ↗](https://tc39.es/ecma262/#sec-comparearrayelements)
