# Converting on purpose — `Number()`, `String()`, `Boolean()` and unary `+`

**Level:** 101 · for anyone turning input text into numbers

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Unary `+x` is `Number(x)` with one exception — `+1n` throws where `Number(1n)` is `1`; both read `""` and `" "` as `0` and `"12px"` as `NaN`, and `String(sym)` works where `"" + sym` throws.

**Keywords:** `Number()`, `String()`, `Boolean()`, `unary +`

## What the finished page will answer

- What do `Number("")`, `Number(" ")`, `Number("12px")`, `Number("0x1f")` and `Number("1_000")` return?
- Why does `+1n` throw a `TypeError` while `Number(1n)` returns `1`?
- What do `Number(null)`, `Number(undefined)`, `Number([])`, `Number([5])` and `Number({})` return, and which rule produces each?
- Why does `String(Symbol("id"))` work while `"" + Symbol("id")` and a template literal throw?
- Is `!!value` the same as `Boolean(value)` for every value?

## Examples it will need

- [ ] `explicit_conversion_number_js.js` — Number() and unary + on fifteen inputs side by side, with the one row where they differ
- [ ] `explicit_conversion_string_and_boolean_js.js` — String(), a template literal and Boolean() on symbols, BigInts, arrays and wrapper objects

## See also

- [Parsing numbers](../../10_Numbers_and_Math/parsing_numbers/README.md) — `parseInt` and `parseFloat`, which read a prefix instead
- [The `+` operator](../the_plus_operator/README.md) — the implicit conversions these replace
- [Truthy and falsy](../truthy_and_falsy/README.md) — what `Boolean()` returns for each value
- [BigInt](../../02_Values_and_Types/bigint/README.md) — why a BigInt refuses unary plus
- [Ruby text: `to_i` never fails; `Integer()` does ↗](https://masiarek.github.io/ruby-text-learning-library/07_Parsing_and_Formatting/to_i_never_fails/index.html) — the lenient `to_i` and the strict `Integer()` in Ruby
- [C: Parsing a number from text ↗](https://masiarek.github.io/c-learning-library/03_Strings/parsing_a_number_from_text/index.html) — three C parsers that fail in three different ways

## Sources to start from

- [MDN — Number() constructor ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [MDN — Unary plus (+) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [ECMA-262 — StringToNumber ↗](https://tc39.es/ecma262/#sec-stringtonumber)
