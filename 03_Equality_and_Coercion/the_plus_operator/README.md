# The `+` operator — addition or concatenation, decided at run time

**Level:** 201 · for anyone who has seen "1" + 1 give "11"

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `+` turns both operands into primitives, joins if either is a string and adds if not, left to right: `1 + 2 + "3"` is `"33"`, `"1" + 2 + 3` is `"123"`, `[1, 2] + [3]` is `"1,23"`, and `"3" - 1` is `2`.

**Keywords:** `+`, `+=`, `concatenation`

## What the finished page will answer

- Why do `1 + 2 + "3"` and `"1" + 2 + 3` give different strings?
- What do `[] + {}`, `[1, 2] + [3]`, `true + 1`, `1 + null` and `1 + undefined` return, and why?
- Why does `{} + []` give `0` when it is a statement on its own but `"[object Object]"` inside parentheses?
- Why do `-`, `*` and `/` never concatenate, so that `"3" - 1` is `2` while `"3" + 1` is `"31"`?
- How does `"b" + "a" + +"a" + "a"` spell `baNaNa`?

## Examples it will need

- [ ] `the_plus_operator_cases_js.js` — twelve + expressions, each with its result and the result's type
- [ ] `the_plus_operator_statement_js.js` — eval of {} + [] as a statement beside ({} + []) as an expression

## See also

- [ToPrimitive](../toprimitive/README.md) — the conversion `+` runs on an object first
- [Converting on purpose](../explicit_conversion/README.md) — converting on purpose before you add
- [Template literals](../../09_Strings_and_Unicode/template_literals/README.md) — interpolation, which only ever joins
- [Every number is a double](../../10_Numbers_and_Math/every_number_is_a_double/README.md) — what the numeric branch of `+` actually adds
- [Java text: `+` is not `StringBuilder` ↗](https://masiarek.github.io/java-text-learning-library/06_Performance/plus_is_not_stringbuilder/index.html) — what Java's string `+` compiles to
- [Rust: Concatenating strings ↗](https://masiarek.github.io/rust-learning-library/14_Strings/concatenating_strings/index.html) — in Rust, `+` takes only an owned `String` and a `&str`
- [Perl: Numbers from text ↗](https://masiarek.github.io/perl-learning-library/04_Records_and_Fields/numbers_from_text/index.html) — in Perl, `+` always means numbers, even between strings

## Sources to start from

- [MDN — Addition (+) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [ECMA-262 — ApplyStringOrNumericBinaryOperator ↗](https://tc39.es/ecma262/#sec-applystringornumericbinaryoperator)
- [ECMA-262 — The Addition Operator ( + ) ↗](https://tc39.es/ecma262/#sec-addition-operator-plus)
