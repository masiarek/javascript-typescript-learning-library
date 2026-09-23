# Safe integers — past 2^53, adding 1 can change nothing

**Level:** 201 · for anyone who stores ids, counters or timestamps as numbers

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Above 2^53 a double skips integers (between 2^53 and 2^54 it holds only even ones), so `2 ** 53 + 1 === 2 ** 53` is `true`, the literal `9007199254740993` prints `9007199254740992`, and `JSON.parse` rounds a 20-digit id without a word; `BigInt` keeps every digit.

**Keywords:** `Number.MAX_SAFE_INTEGER`, `Number.MIN_SAFE_INTEGER`, `Number.isSafeInteger`, `safe integer`

## What the finished page will answer

- Why does `2 ** 53 + 1 === 2 ** 53` hold, and which integers can a double represent between 2^53 and 2^54, and between 2^54 and 2^55?
- What do `Number.MAX_SAFE_INTEGER` and `Number.isSafeInteger` mean by safe, and why is `2 ** 53` itself not safe?
- What does `JSON.parse` do to a 20-digit id, and how does the reviver's `context.source` read it exactly as a `BigInt`?
- What happens to a counter that keeps adding 1 once it reaches 2^53?
- What do `Number(9007199254740993n)` and `BigInt(2 ** 53 + 1)` return?

## Examples it will need

- [ ] `safe_integers_edge_js.js` — the integers from 2^53 - 2 to 2^53 + 4 as `Number` and as `BigInt`, with `Number.isSafeInteger` for each
- [ ] `safe_integers_json_id_js.js` — a 20-digit id through plain `JSON.parse`, then read exactly with the reviver's `context.source` and `BigInt`, then written back with `JSON.rawJSON`

## See also

- [Every number is a double](../every_number_is_a_double/README.md) — the 53-bit significand behind the limit
- [BigInt](../../02_Values_and_Types/bigint/README.md) — integers with no fixed width, for values past 2^53
- [JSON](../../06_Objects/json/README.md) — what `JSON.parse` and `JSON.stringify` do to numbers
- [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md) — the rounded id still has the type `number` in TypeScript
- [Rust: Big integers: `BigInt` and Python's `int` ↗](https://masiarek.github.io/rust-learning-library/19_Numbers/other_number_types/big_integers/index.html) — the `u128` ceiling in Rust, and the Python `int` that has none
- [Python: Comparing an `int` with a `float` ↗](https://masiarek.github.io/python-learning-library/03_Numbers/comparing_int_and_float/index.html) — in Python, a big `int` and a `float` compare exactly

## Sources to start from

- [MDN — Number.MAX_SAFE_INTEGER ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
- [ECMA-262 — Number.MAX_SAFE_INTEGER ↗](https://tc39.es/ecma262/#sec-number.max_safe_integer)
- [MDN — JSON.parse() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
