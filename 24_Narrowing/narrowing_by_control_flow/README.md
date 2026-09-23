# Narrowing — how `typeof`, `in` and `instanceof` change a type

**Level:** 201 · for TypeScript users working with union types

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** After `if (typeof value === "string") return`, the rest of the function knows `value` is not a string; but `typeof value === "object"` also lets `null` through, so reading `value.tags` in that branch is TS18047, 'value' is possibly 'null'.

**Keywords:** `narrowing`, `type guard`, `control flow analysis`

## What the finished page will answer

- What type does `value` have after `typeof value === "object"`, and why is `null` still in it (TS18047)?
- How do an early `return` and an `else` narrow the code that follows, and what do `in` and `instanceof` narrow to?
- Does a test stored in a constant, `const isText = typeof x === "string"`, still narrow `x` inside `if (isText)`?
- Does narrowing survive into a callback, for a parameter that is never reassigned and for a `let` that is reassigned later?
- Which other tests narrow: `Array.isArray`, `x === undefined`, `x == null`, a `switch (typeof x)`?

## Examples it will need

- [ ] `narrowing_typeof_null_tserror.ts` — TS18047 for a property read after `typeof value === "object"`, and no errors on the string, number and Date branches
- [ ] `narrowing_aliases_and_callbacks_tserror.ts` — the narrowed types seen through an aliased test and inside callbacks, printed through deliberate TS2322 errors
- [ ] `narrowing_in_and_instanceof_ts.ts` — one line per input value, naming the branch that `typeof`, `in` and `instanceof` sent it to

## See also

- [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md) — the run-time operator the checker reads, `null` quirk included
- [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md) — what `instanceof` checks at run time
- [Own and inherited properties](../../07_Prototypes_and_Classes/own_and_inherited_properties/README.md) — the `in` operator, which also finds inherited keys
- [Truthiness narrowing](../truthiness_narrowing/README.md) — the test that narrows and also turns away `0` and `""`
- [Union and intersection types](../../23_Everyday_Types/union_and_intersection_types/README.md) — the unions that narrowing takes apart
- [Rust: `if let`: one arm, and move on ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/if_let/index.html) — narrowing by pattern instead of by test, with Rust's `if let`

## Sources to start from

- [TypeScript Handbook — Narrowing: typeof type guards ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)
- [TypeScript Handbook — Narrowing: control flow analysis ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis)
- [ECMA-262 — The typeof Operator ↗](https://tc39.es/ecma262/#sec-typeof-operator)
