# Typed arrays and `ArrayBuffer` — fixed-type views over raw bytes

**Level:** 201 · for anyone who has to handle raw bytes

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A typed array converts each value to its element type, so `new Uint8Array([256, -1, 3.7])` holds `0, 255, 3`; it never grows, and views share one `ArrayBuffer`: a `Uint32Array` writes it little-endian on x86 and ARM, while `DataView` reads big-endian by default.

**Keywords:** `ArrayBuffer`, `TypedArray`, `Uint8Array`, `Uint8ClampedArray`, `DataView`

## What the finished page will answer

- What does each typed array do with a value it cannot hold: 256, -1 and 3.7 in a `Uint8Array`, a `Uint8ClampedArray` and an `Int8Array`, and 0.1 in a `Float32Array`?
- What happens when you assign past the end of a typed array, and why is there no `push`?
- When a `Uint32Array` and a `Uint8Array` share one `ArrayBuffer`, in what byte order do they see a number, and what does `DataView` read with and without `littleEndian`?
- Why does `new Uint8Array([10, 9, 1]).sort()` sort numerically when a plain array does not?
- Which methods share memory (`subarray`) and which copy (`slice`), and what does `JSON.stringify` make of a typed array?

## Examples it will need

- [ ] `typed_arrays_conversion_js.js` — the same values stored in `Uint8Array`, `Uint8ClampedArray`, `Int8Array`, `Float32Array` and `Float64Array`, one line per type
- [ ] `typed_arrays_views_js.js` — one `ArrayBuffer` seen through `Uint8Array`, `Uint32Array` and `DataView` in both byte orders, then `subarray` sharing memory where `slice` copies

## See also

- [`Buffer`](../../19_Node_Runtime/buffers/README.md) — the `Buffer` class, a `Uint8Array` subclass with more methods
- [Strings and bytes](../../09_Strings_and_Unicode/strings_and_bytes/README.md) — `TextEncoder` returns a `Uint8Array` of UTF-8
- [`SharedArrayBuffer` and `Atomics`](../../20_Workers_and_Parallelism/sharedarraybuffer_and_atomics/README.md) — a buffer that two threads can see at once
- [Bitwise operators](../../10_Numbers_and_Math/bitwise_operators/README.md) — the 32-bit conversion that `Int32Array` also applies on store
- [`sort()` compares strings](../sort_compares_strings/README.md) — why a plain array sorts `[10, 9, 1]` as strings
- [Encodings: The bytes do not say which end ↗](https://masiarek.github.io/encodings-learning-library/01_Bits_and_Bytes/which_end_comes_first/index.html) — bytes never record which end is the big one
- [C: Byte order on the wire ↗](https://masiarek.github.io/c-learning-library/05_Bytes_on_the_Wire/byte_order_on_the_wire/index.html) — network byte order, the big-endian that `DataView` uses by default
- [Encodings: Arithmetic has its own width ↗](https://masiarek.github.io/encodings-learning-library/01_Bits_and_Bytes/arithmetic_has_its_own_width/index.html) — where a value wraps when it is stored back into a byte

## Sources to start from

- [MDN — TypedArray ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [MDN — DataView ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- [ECMA-262 — TypedArray Objects ↗](https://tc39.es/ecma262/#sec-typedarray-objects)
