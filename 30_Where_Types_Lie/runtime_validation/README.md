# Run-time validation — checking data where it enters the program

**Level:** 201 · for anyone who reads data from outside the program

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Types are gone at run time, so the check has to be code: a `parseOrder(data: unknown): Order` that tests each field with `typeof` and `in` satisfies tsc and turns `{"total": "99"}` into a `TypeError` at the border instead of a wrong `991` later.

**Keywords:** `runtime validation`, `schema validation`

## What the finished page will answer

- What must `parseOrder(data: unknown): Order` test before tsc accepts its return value?
- Why does `return data` fail after every check has passed, while `return { id: data.id, total: data.total }` succeeds?
- What does the validator do with `{"id": 1, "total": "99"}`, and where in the program does the failure now appear?
- What happens when a type predicate `isOrder(x): x is Order` has a bug in its body — does tsc notice?
- How can the `Order` type be taken from the validator with `ReturnType<typeof parseOrder>`, so the two cannot drift apart?

## Examples it will need

- [ ] `runtime_validation_parse_order_sh.sh` — tsc's silence, 100 for a valid order, and the TypeError the validator throws for a string total
- [ ] `runtime_validation_return_data_tserror.ts` — the TS2322 error for returning the narrowed object itself, whose properties are still unknown
- [ ] `runtime_validation_wrong_predicate_ts.ts` — a type predicate with a bug, the bad value it lets through, and the wrong sum that follows

## See also

- [External data](../json_parse_and_external_data/README.md) — where unchecked data comes from
- [Type predicates](../../24_Narrowing/type_predicates_and_assertion_functions/README.md) — x is T, which tsc trusts without checking
- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — the typeof and in checks a validator is built from
- [Type assertions](../type_assertions_are_unchecked/README.md) — the assertion a validator replaces
- [Encodings: Validation is a boundary ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/validation_is_a_boundary/index.html) — the UTF-8 version: check at the door, and let the type remember
- [Rust: Validating at the boundary ↗](https://masiarek.github.io/rust-learning-library/31_C_and_Cpp/migrating_c_to_rust/validating_at_the_boundary/index.html) — the same rule at Rust's C boundary: validate first, then trust
- [Regex: Validating input ↗](https://masiarek.github.io/regex-learning-library/11_Topics/validating_input/index.html) — checking a string field's format, the regex part of validation

## Sources to start from

- [TypeScript Handbook — The in operator narrowing ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)
- [TypeScript 4.9 release notes — Unlisted property narrowing with the in operator ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#unlisted-property-narrowing-with-the-in-operator)
