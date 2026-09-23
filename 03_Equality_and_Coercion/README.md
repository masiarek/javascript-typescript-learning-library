# 03 — Equality and coercion

**One line:** Most JavaScript operators convert their operands before they work, and every famous surprise — `[] == false`, `"1" + 1`, `null >= 0` — follows from a handful of fixed conversion rules you can run and read.

The chapter starts with the two equality operators, `===` and `==`, and the four algorithms behind every equality check in the language. Then the conversion to boolean that every `if` performs, the `+` operator that chooses between adding and joining, and ToPrimitive, the step that turns an object into something an operator can use. It ends with `<` and `>`, which convert differently from `==`, and with the explicit conversions to write instead of relying on the implicit ones.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`===` and `==`](strict_and_loose_equality/README.md) | 101 | `==` converts its operands before comparing, which makes `"" == 0` and `"0" == 0` both true while `"" == "0"` is false, so `==` is not even transitive; `===` never converts, and only `NaN` breaks its rule that a value equals itself. | stub |
| [`Object.is`, `NaN` and `-0`](samevalue_and_samevaluezero/README.md) | 201 | The three equality checks that never convert types disagree only on `NaN` and `-0`: `===` says `NaN !== NaN` and `0 === -0`, `Object.is` says the opposite of both, and `includes`, `Map` and `Set` match `NaN` but treat `0` and `-0` as one. | stub |
| [Truthy and falsy](truthy_and_falsy/README.md) | 101 | Eight values are falsy in Node — `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` — and a browser adds `document.all`; so `"0"`, `"false"`, `" "`, `[]`, `{}` and even `new Boolean(false)` all make an `if` run. | stub |
| [The `+` operator](the_plus_operator/README.md) | 201 | `+` turns both operands into primitives, joins if either is a string and adds if not, left to right: `1 + 2 + "3"` is `"33"`, `"1" + 2 + 3` is `"123"`, `[1, 2] + [3]` is `"1,23"`, and `"3" - 1` is `2`. | stub |
| [ToPrimitive](toprimitive/README.md) | 301 | When an operator needs a primitive from an object it passes a hint — `"number"`, `"string"` or `"default"` — to `Symbol.toPrimitive`, or else tries `valueOf` then `toString` (a string hint reverses the order); `Date` treats `"default"` as string, so `date + 1` concatenates. | stub |
| [`<` and `>`](comparing_with_less_than/README.md) | 201 | `<` compares two strings by UTF-16 code units, so `"10" < "9"` and `"Z" < "a"` are true, and anything else as numbers, where `null` becomes `0` — so `null >= 0` is true although `null > 0` and `null == 0` are false. | stub |
| [Converting on purpose](explicit_conversion/README.md) | 101 | Unary `+x` is `Number(x)` with one exception — `+1n` throws where `Number(1n)` is `1`; both read `""` and `" "` as `0` and `"12px"` as `NaN`, and `String(sym)` works where `"" + sym` throws. | stub |
<!-- /lessons -->

## Boundaries

Reading numbers out of text with `parseInt` and `parseFloat` is chapter 10, and ordering strings with `localeCompare` is chapter 9.
