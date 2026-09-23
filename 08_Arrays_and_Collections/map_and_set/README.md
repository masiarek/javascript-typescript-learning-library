# `Map` and `Set` — keys of any type, in insertion order

**Level:** 101 · for anyone who has used an object as a dictionary

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `Map` matches keys with SameValueZero: `NaN` finds `NaN` and `-0` finds `0`, but a new `{}` finds nothing; `Map` and `Set` give entries back in insertion order, where a plain object lists integer-like keys such as `"1"` and `"2"` first.

**Keywords:** `Map`, `Set`

## What the finished page will answer

- Which keys does a `Map` treat as the same: `NaN` and `NaN`, `0` and `-0`, `1` and `"1"`, two `{}` literals?
- In what order do a `Map`, a `Set` and a plain object give back the keys `"b"`, `"2"`, `"a"`, `"1"`?
- Why does `JSON.stringify(new Map([[1, "a"]]))` print `{}`, and how do you serialize a `Map` and read it back?
- What does `map["x"] = 1` do to a `Map`: does `size` change, and does `has("x")` see it?
- What does `Object.fromEntries(map)` do with keys that are not strings?

## Examples it will need

- [ ] `map_and_set_keys_js.js` — `get` with `NaN`, `-0`, the string `"1"` against the number `1`, and a fresh `{}`, for a `Map` and for a plain object
- [ ] `map_and_set_order_js.js` — the same keys put into an object, a `Map` and a `Set`, the order each gives them back, then `JSON.stringify` of the `Map` before and after `Object.fromEntries`

## See also

- [`Object.is`, `NaN` and `-0`](../../03_Equality_and_Coercion/samevalue_and_samevaluezero/README.md) — the equality a `Map` uses for keys, SameValueZero
- [Property keys](../../06_Objects/property_keys/README.md) — the key order a plain object uses instead
- [`WeakMap` and `WeakSet`](../weakmap_and_weakset/README.md) — the variant whose keys do not keep objects alive
- [Grouping and set operations](../grouping_and_set_operations/README.md) — `Map.groupBy` and the ES2025 `Set` methods
- [JSON](../../06_Objects/json/README.md) — why `JSON.stringify` turns a `Map` into `{}`
- [Rust: `HashMap` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/the_hashmap/index.html) — in Rust, `HashMap` iterates in a different order on every run
- [Rust: `BTreeMap` and `BTreeSet` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/sorted_collections/index.html) — `BTreeMap` iterates in key order, a third choice

## Sources to start from

- [MDN — Map ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN — Set ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [ECMA-262 — SameValueZero ↗](https://tc39.es/ecma262/#sec-samevaluezero)
