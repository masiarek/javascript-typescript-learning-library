# Bitwise operators — every number becomes a 32-bit integer first

**Level:** 301 · for anyone packing flags, hashing or reading binary formats

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Bitwise operators first cut number operands to 32-bit two's-complement integers: `2 ** 32 | 0` is `0`, `3000000000 | 0` is `-1294967296`, `1 << 32` is `1` because shift counts wrap at 32, and `-1 >>> 0` is `4294967295`; `BigInt` operands keep every bit.

**Keywords:** `&`, `|`, `^`, `~`, `<<`, `>>>`

## What the finished page will answer

- What does `x | 0` return for 3.7, -3.7, 2^31, 3000000000, 2^32 and `NaN`?
- Why is `1 << 31` negative, and why is `1 << 32` equal to `1`?
- How do `>>` and `>>>` differ on `-8`, and why is `-1 >>> 0` equal to 4294967295?
- Why is `2 ^ 3` equal to `1`?
- What do the same operators do with `BigInt` operands, why does `1n | 1` throw, and why does `1n >>> 1n` throw too?

## Examples it will need

- [ ] `bitwise_operators_toint32_js.js` — values from 3.7 to 2^53 through `| 0`, `~~`, `>>> 0` and `Math.trunc`, one row each
- [ ] `bitwise_operators_shifts_js.js` — `1 << n` for n = 30, 31, 32 and 33, and `-8 >> 1` beside `-8 >>> 1`, in decimal and in binary
- [ ] `bitwise_operators_bigint_mix_tserror.ts` — tsc's TS2365 diagnostic for `1n | 1`, the mix that throws a `TypeError` at run time

## See also

- [Safe integers](../safe_integers/README.md) — the 53-bit integers that a 32-bit operator cannot hold
- [BigInt](../../02_Values_and_Types/bigint/README.md) — bitwise operators on integers of any width
- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — `Int32Array` and `Uint32Array`, the same conversion on store
- [Rounding and formatting](../rounding_and_formatting/README.md) — `Math.trunc`, the truncation that works past 2^31
- [Rust: Bit flags ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/bit_flags/index.html) — masks and shifts on fixed-width integers in Rust
- [Encodings: Arithmetic has its own width ↗](https://masiarek.github.io/encodings-learning-library/01_Bits_and_Bytes/arithmetic_has_its_own_width/index.html) — `255 << 2` in five languages, and where each one wraps
- [C: Comparing signed and unsigned ↗](https://masiarek.github.io/c-learning-library/06_Numbers/comparing_signed_and_unsigned/index.html) — signed against unsigned, the difference `>>>` exposes

## Sources to start from

- [MDN — Bitwise OR (|) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [MDN — Unsigned right shift (>>>) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
- [ECMA-262 — ToInt32 ↗](https://tc39.es/ecma262/#sec-toint32)
