# Property keys — strings and symbols only, and the order they come back in

**Level:** 201 · for anyone who has used a number as an object key

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A property key is always a string or a symbol — `o[1]` and `o["1"]` are the same property, and `o[{}]` is `o["[object Object]"]` — and own keys come back integer-like first in ascending order, then other strings in insertion order, then symbols.

**Keywords:** `Object.keys`, `Reflect.ownKeys`, `Object.getOwnPropertyNames`

## What the finished page will answer

- What key do `o[1]`, `o[1.5]`, `o[-0]`, `o[true]`, `o[null]` and `o[{}]` actually create?
- In what order do `Object.keys`, `for...in`, `JSON.stringify` and `Reflect.ownKeys` list `{ b: 1, 2: 1, a: 1, 1: 1 }`?
- Which strings count as integer-like for that order: is `"01"`, `"-1"`, `"1.5"` or `"4294967295"` sorted with the numbers?
- Which of `Object.keys`, `Object.getOwnPropertyNames`, `Object.getOwnPropertySymbols` and `Reflect.ownKeys` include symbols, and which include non-enumerable keys?
- What does a `Map` keep that an object loses: the number type of the key `1`, and plain insertion order for `"2"` then `"1"`?

## Examples it will need

- [ ] `property_keys_conversion_js.js` — the key that 1, 1.5, -0, true, null, a symbol and an object each turn into, read back with Reflect.ownKeys
- [ ] `property_keys_order_js.js` — one object's keys as listed by Object.keys, for...in, JSON.stringify and Reflect.ownKeys, integer-like keys first
- [ ] `property_keys_listings_js.js` — a table of which listing function includes symbol, non-enumerable and inherited keys

## See also

- [Symbols](../../02_Values_and_Types/symbols/README.md) — the one key type that is not a string
- [`for...in` and `for...of`](../../11_Control_Flow_and_Iteration/for_in_and_for_of/README.md) — the loop that walks these keys in this order
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — keys of any type, in plain insertion order
- [Arrays](../../08_Arrays_and_Collections/array_basics/README.md) — array indexes are string keys as well
- [Property descriptors](../property_descriptors/README.md) — the enumerable flag that hides a key from Object.keys
- [Rust: `HashMap` ↗](https://masiarek.github.io/rust-learning-library/26_Collections/the_hashmap/index.html) — how a Rust HashMap orders keys: differently on every run

## Sources to start from

- [MDN — Object.keys() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [ECMA-262 — OrdinaryOwnPropertyKeys ↗](https://tc39.es/ecma262/#sec-ordinaryownpropertykeys)
- [ECMA-262 — ToPropertyKey ↗](https://tc39.es/ecma262/#sec-topropertykey)
