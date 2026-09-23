# Truthiness narrowing — `if (value)` also drops `0` and `""`

**Level:** 201 · for TypeScript users who test for null with if (value)

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `if (count)` narrows `number | null` to `number`, which reads as 'not null', but at run time `0` fails the test too: `label(0)` prints `no count`, and only the type after the `if`, still `number | null`, hints that a number can arrive there.

**Keywords:** `truthiness narrowing`

## What the finished page will answer

- What does `label(0)` print when the function tests `if (count)`, and what types does `count` have inside and after the `if`?
- For `flag: 0 | 1 | null`, what are the types in the true and the false branch, and why can the checker be exact there?
- Which values fail `if (x)`, and which of them can a type name: `0`, `-0`, `0n`, `""`, `NaN`, `null`, `undefined`, `false`?
- Which test keeps `0` and `""`: `x != null`, `x !== null && x !== undefined`, or `x ?? fallback`?
- Why does `!!x` narrow in TypeScript 7.0.2 while `Boolean(x)` does not?

## Examples it will need

- [ ] `truthiness_narrowing_zero_sh.sh` — the narrowed types in both branches, printed by tsc through deliberate errors, then Node labelling 3, 0 and null
- [ ] `truthiness_narrowing_literal_union_tserror.ts` — the types `1` and `0 | null` that tsc gives the two branches of `if (flag)`
- [ ] `truthiness_narrowing_not_null_ts.ts` — the same labels computed with `count !== null`, where 0 is reported as a count

## See also

- [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md) — the short list of values `if` treats as false
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — the `??` default that keeps `0`
- [Narrowing](../narrowing_by_control_flow/README.md) — the other tests the checker understands
- [Short-circuit evaluation](../../11_Control_Flow_and_Iteration/short_circuit_evaluation/README.md) — the `&&` and `||` operators, which narrow the same way
- [Rust: Meet the `bool` ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/meet_the_bool/index.html) — no truthiness in Rust: `if count` does not compile
- [Rust: Six kinds of zero ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/six_kinds_of_zero/index.html) — keeping zero and missing apart as different values, in Rust

## Sources to start from

- [TypeScript Handbook — Narrowing: truthiness narrowing ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing)
- [ECMA-262 — ToBoolean ↗](https://tc39.es/ecma262/#sec-toboolean)
