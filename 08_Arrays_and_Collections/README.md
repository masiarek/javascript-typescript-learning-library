# 08 — Arrays and collections

**One line:** An array is an object with string index keys and a self-adjusting `length`, and its defaults (string sorting, skipped holes, methods that change it in place) catch everyone once; `Map`, `Set`, `WeakMap` and typed arrays exist for the jobs an array or a plain object does badly.

The chapter starts with what an array is, an object with index keys and a self-adjusting `length`, and the three surprises that follow: `sort` comparing strings, holes, and methods that change the array in place beside their ES2023 copying twins. The iteration methods come next, because every later page uses them. The second half covers the collections built for other jobs: `Map` and `Set` for keys of any type, `WeakMap` for keys that must not stay alive, typed arrays for raw bytes, and grouping and set operations.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Arrays](array_basics/README.md) | 101 | An array is an object whose index keys are strings and whose `length` follows the largest index: on an empty array `a[5] = "x"` makes `length` 6, `a[-1] = "y"` adds a property that `length` ignores, and `a.length = 0` deletes the indexed elements only. | stub |
| [`sort()` compares strings](sort_compares_strings/README.md) | 101 | Without a comparator, `sort()` compares elements as strings, by UTF-16 code units, so `[10, 9, 1].sort()` is `[1, 10, 9]`; `(a, b) => a - b` sorts numbers, and the boolean comparator `a > b` leaves `[3, 1, 2]` unsorted in Node. | stub |
| [Holes](holes_and_sparse_arrays/README.md) | 201 | `[1, , 3]` has a hole, not an `undefined`: `1 in arr` is `false`, `forEach` and `map` skip index 1 (and `map` keeps the gap), spread reads it as `undefined`, and `indexOf(undefined)` is `-1` while `includes(undefined)` is `true`. | stub |
| [Mutating and copying methods](mutating_and_copying_methods/README.md) | 101 | `sort`, `reverse` and `splice` change the array they are called on, and `sort` returns that same array, so `const b = a.sort()` sorts `a` too; ES2023's `toSorted`, `toReversed`, `toSpliced` and `with` return a new array, a shallow copy that shares its objects. | stub |
| [`map`, `filter`, `reduce` and friends](map_filter_reduce/README.md) | 101 | Every callback gets the element, its index and the whole array, so `["1", "2", "3"].map(parseInt)` hands each index to `parseInt` as a radix and returns `[1, NaN, NaN]`; `reduce` with no initial value throws a `TypeError` on an empty array, where `reduce(fn, 0)` returns `0`. | stub |
| [`Map` and `Set`](map_and_set/README.md) | 101 | A `Map` matches keys with SameValueZero: `NaN` finds `NaN` and `-0` finds `0`, but a new `{}` finds nothing; `Map` and `Set` give entries back in insertion order, where a plain object lists integer-like keys such as `"1"` and `"2"` first. | stub |
| [`WeakMap` and `WeakSet`](weakmap_and_weakset/README.md) | 301 | An object used as a `Map` key stays alive as long as the `Map` does; used as a `WeakMap` key, it is collected once nothing else refers to it, which is why a `WeakMap` has no `size`, no `keys()` and cannot be iterated. | stub |
| [Typed arrays and `ArrayBuffer`](typed_arrays/README.md) | 201 | A typed array converts each value to its element type, so `new Uint8Array([256, -1, 3.7])` holds `0, 255, 3`; it never grows, and views share one `ArrayBuffer`: a `Uint32Array` writes it little-endian on x86 and ARM, while `DataView` reads big-endian by default. | stub |
| [Grouping and set operations](grouping_and_set_operations/README.md) | 201 | `Object.groupBy` returns an object with a `null` prototype and string keys, so grouping by an object files every row under `"[object Object]"` where `Map.groupBy` keeps the object; the ES2025 `Set` methods accept any set-like, a `Map` included, but throw on an array. | stub |
<!-- /lessons -->

## Boundaries

Walking any iterable with `for...of`, generators and lazy iterator helpers is in Control flow and iteration; copying objects and JSON are in Objects; the TypeScript types for arrays and tuples are in Everyday types.
