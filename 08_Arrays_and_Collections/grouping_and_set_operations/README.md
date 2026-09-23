# Grouping and set operations — `Object.groupBy`, `union`, `intersection`

**Level:** 201 · for anyone who has grouped or merged lists by hand

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Object.groupBy` returns an object with a `null` prototype and string keys, so grouping by an object files every row under `"[object Object]"` where `Map.groupBy` keeps the object; the ES2025 `Set` methods accept any set-like, a `Map` included, but throw on an array.

**Keywords:** `Object.groupBy`, `Map.groupBy`, `union`, `intersection`, `difference`, `symmetricDifference`

## What the finished page will answer

- What does `Object.groupBy` return, why does it have a `null` prototype, and what happens to object and boolean keys?
- When does `Map.groupBy` give a different answer from `Object.groupBy` on the same rows?
- What do `union`, `intersection`, `difference`, `symmetricDifference`, `isSubsetOf`, `isSupersetOf` and `isDisjointFrom` return for two small sets, and in what order are the elements of the result?
- Why does `set.union([3, 4])` throw a `TypeError`, and why does `set.intersection(new Map(...))` work?
- Which `lib` setting does `tsc` need before `set.union(...)` type-checks?

## Examples it will need

- [ ] `grouping_and_set_operations_groupby_js.js` — `Object.groupBy` and `Map.groupBy` on the same rows, grouped by a string and by an object, with the prototype of each result
- [ ] `grouping_and_set_operations_sets_js.js` — all seven ES2025 set methods on two small sets, then `union` with a `Map` (accepted) and with an array (the `TypeError`)
- [ ] `grouping_and_set_operations_types_ts.ts` — the inferred types of a grouped result and of a `union`, type-checked and run; needs `lib` es2025

## See also

- [`Map` and `Set`](../map_and_set/README.md) — the `Map` and `Set` these methods build on
- [Property keys](../../06_Objects/property_keys/README.md) — why every `Object.groupBy` key becomes a string
- [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md) — what an object with a `null` prototype is missing
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — the `lib` option that decides whether `union` type-checks
- [Rust: `HashSet` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/the_hashset/index.html) — the four set operations of a Rust `HashSet`

## Sources to start from

- [MDN — Object.groupBy() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [MDN — Set.prototype.union() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union)
- [ECMA-262 — GetSetRecord ↗](https://tc39.es/ecma262/#sec-getsetrecord)
