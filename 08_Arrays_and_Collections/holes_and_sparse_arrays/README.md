# Holes — the empty slots that `forEach` skips and `map` keeps

**Level:** 201 · once arrays and their length are familiar

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `[1, , 3]` has a hole, not an `undefined`: `1 in arr` is `false`, `forEach` and `map` skip index 1 (and `map` keeps the gap), spread reads it as `undefined`, and `indexOf(undefined)` is `-1` while `includes(undefined)` is `true`.

**Keywords:** `sparse array`, `hole`, `empty item`

## What the finished page will answer

- How is a hole different from an element set to `undefined`, as seen by `in`, `Object.keys` and `Object.hasOwn`?
- Which methods skip holes (`forEach`, `map`, `filter`, `reduce`) and which read them as `undefined` (`for...of`, spread, `toSorted`, `includes`)?
- Why does `indexOf(undefined)` return `-1` on `[1, , 3]` while `includes(undefined)` returns `true`?
- Why does `Array(3).map((_, i) => i)` return three empty slots, and what builds `[0, 1, 2]` instead?
- What does `JSON.stringify([1, , 3])` write for the hole, and what does `delete arr[1]` do to `length`?

## Examples it will need

- [ ] `holes_and_sparse_arrays_methods_js.js` — one row per operation on `[1, , 3]` (`in`, `forEach`, `map`, `filter`, `indexOf`, `includes`, spread, `for...of`, `for...in`, `JSON.stringify`) and what it does with the hole
- [ ] `holes_and_sparse_arrays_making_js.js` — four ways a hole appears (a literal comma, `new Array(3)`, `delete arr[i]`, assigning past the end), and `Array.from({ length: 3 })`, which makes none

## See also

- [Arrays](../array_basics/README.md) — why `length` and the index keys can disagree
- [`map`, `filter`, `reduce` and friends](../map_filter_reduce/README.md) — the iteration methods, and which of them visit holes
- [`for...in` and `for...of`](../../11_Control_Flow_and_Iteration/for_in_and_for_of/README.md) — `for...in` skips holes, `for...of` reads them as `undefined`
- [Own and inherited properties](../../07_Prototypes_and_Classes/own_and_inherited_properties/README.md) — `in` and `Object.hasOwn`, the tests that tell a hole from `undefined`
- [JSON](../../06_Objects/json/README.md) — `JSON.stringify` writes a hole as `null`

## Sources to start from

- [MDN — Array: array methods and empty slots ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots)
- [MDN — Indexed collections: sparse arrays ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)
- [ECMA-262 — Array.prototype.forEach ↗](https://tc39.es/ecma262/#sec-array.prototype.foreach)
