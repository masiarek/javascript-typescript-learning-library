# `for...in` and `for...of` — keys of an object versus values of an iterable

**Level:** 101 · for anyone who has looped over an array or an object

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `for...in` walks an object's enumerable string keys, inherited ones included — on an array it yields `"0"`, `"1"` and any extra property — while `for...of` walks the values an iterable hands out, and throws `TypeError` on a plain object.

**Keywords:** `for...in`, `for...of`

## What the finished page will answer

- What does `for...in` give for `["a", "b"]` — the values, or the strings `"0"` and `"1"` — and what else turns up when the array has an extra property?
- Why does `for...in` visit keys inherited from the prototype, and how do `Object.keys` or `Object.hasOwn` leave them out?
- Why does `for (const v of { a: 1 })` throw, and which of `Object.keys`, `Object.values` and `Object.entries` makes an object loopable?
- What do the two loops do with the hole in `[1, , 3]`?
- Why does TypeScript type the `for...in` variable as `string` rather than `keyof T`, so that `obj[key]` fails under `strict`?

## Examples it will need

- [ ] `for_in_and_for_of_side_by_side_js.js` — both loops over an array, an array with an extra property, a sparse array and an object with a prototype
- [ ] `for_in_key_is_string_tserror.ts` — tsc's TS7053 for indexing an object with a `for...in` key

## See also

- [Own and inherited properties](../../07_Prototypes_and_Classes/own_and_inherited_properties/README.md) — why `for...in` also reaches inherited keys
- [Property keys](../../06_Objects/property_keys/README.md) — the order the keys come back in
- [The iteration protocol](../the_iteration_protocol/README.md) — what makes a value work with `for...of`
- [Holes](../../08_Arrays_and_Collections/holes_and_sparse_arrays/README.md) — holes, which `for...in` skips and `for...of` reads as `undefined`
- [Code points](../../09_Strings_and_Unicode/code_points_and_iteration/README.md) — `for...of` over a string walks code points
- [Rust: `for` loops ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/for_loops/index.html) — the Rust `for`, which has only the value-walking kind

## Sources to start from

- [MDN — for...in ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [MDN — for...of ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [ECMA-262 — The for-in, for-of, and for-await-of Statements ↗](https://tc39.es/ecma262/#sec-for-in-and-for-of-statements)
