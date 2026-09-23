# Arrays — ordered, growable, and objects underneath

**Level:** 101 · for anyone who has written a line of JavaScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An array is an object whose index keys are strings and whose `length` follows the largest index: on an empty array `a[5] = "x"` makes `length` 6, `a[-1] = "y"` adds a property that `length` ignores, and `a.length = 0` deletes the indexed elements only.

**Keywords:** `Array`, `Array.isArray`, `Array.from`, `Array.of`, `length`, `at`

## What the finished page will answer

- What happens to `length` when you assign `a[5]` on an empty array, and what are the keys of the result?
- Why does `a[-1] = "y"` leave `length` alone, and why does `a.at(-1)` still return the last element?
- What does `a.length = 0` delete, and what does it leave behind?
- Why is `typeof []` `"object"`, and what do `Array.isArray` and `instanceof Array` say about an array, an array-like object and a typed array?
- Why does `new Array(3)` make three empty slots while `Array.of(3)` makes `[3]`, and what does `Array.from({ length: 3 }, (_, i) => i)` make?

## Examples it will need

- [ ] `array_basics_length_js.js` — an empty array after `a[5] = "x"`, `a[-1] = "y"` and `a.length = 0`: its `length`, its keys and what `a[5]`, `a[-1]` and `a.at(-1)` return, one line per step
- [ ] `array_basics_is_array_js.js` — `typeof`, `Array.isArray` and `instanceof Array` for an array, an array-like object and a typed array, then `new Array(3)`, `Array.of(3)` and `Array.from({ length: 3 }, (_, i) => i)` side by side

## See also

- [Holes](../holes_and_sparse_arrays/README.md) — what the unassigned slots below index 5 really are
- [Property keys](../../06_Objects/property_keys/README.md) — why index keys are strings, and the order keys come back in
- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — why `typeof` cannot tell an array from an object
- [Mutating and copying methods](../mutating_and_copying_methods/README.md) — which array methods change the array in place
- [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md) — the types TypeScript gives arrays and fixed-length tuples
- [Rust: Array or `Vec`? ↗](https://masiarek.github.io/rust-learning-library/26_Collections/array_or_vec/index.html) — in Rust, fixed arrays and growable `Vec` are separate types; JavaScript has one

## Sources to start from

- [MDN — Array ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ECMA-262 — Array Exotic Objects ↗](https://tc39.es/ecma262/#sec-array-exotic-objects)
