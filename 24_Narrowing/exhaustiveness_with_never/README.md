# Exhaustiveness checking — `never` catches the forgotten case

**Level:** 201 · for TypeScript users modelling data with unions

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Once every member of a union has its `case`, what reaches `default` is `never`; assign it to a `never` variable there, and adding a `triangle` member later turns the forgotten case into TS2322 on that line, naming the triangle type.

**Keywords:** `exhaustiveness checking`, `never`

## What the finished page will answer

- What does tsc report at `const forgotten: never = shape` after a `triangle` member is added and no `case` handles it?
- Why does a function with return type `number` report TS2366 when its `switch` misses a member, even without a `never` variable?
- Does `shape satisfies never` in `default` work as the same check, and what does TS1360 say?
- What should `default` do at run time when a value outside the type arrives anyway, for example from `JSON.parse`?
- Why does a `default` that returns a fallback value switch the check off, like Rust's `_` arm?

## Examples it will need

- [ ] `exhaustiveness_never_tserror.ts` — TS2322 naming the unhandled triangle type at the `never` assignment, and TS2366 for a second function with no `default`
- [ ] `exhaustiveness_runtime_fallback_ts.ts` — the Error thrown by the `default` branch when a shape parsed from JSON has a kind the type does not list

## See also

- [Discriminated unions](../discriminated_unions/README.md) — the tagged union the switch walks through
- [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md) — what `never` is, and why only `never` fits into it
- [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md) — where a value outside the union comes from
- [`if`, `switch` and `? :`](../../11_Control_Flow_and_Iteration/if_switch_and_the_conditional_operator/README.md) — `switch` fall-through at run time
- [Rust: `match` expressions ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/match_expressions/index.html) — a `match` in Rust must cover every case with no helper
- [Rust: The wildcard `_` ↗](https://masiarek.github.io/rust-learning-library/30_Pattern_Matching/the_wildcard/index.html) — the catch-all arm that switches Rust's check off

## Sources to start from

- [TypeScript Handbook — Narrowing: exhaustiveness checking ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking)
- [TypeScript Handbook — Narrowing: the never type ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
