# Type assertions — `as` overrides the checker whenever the types overlap

**Level:** 201 · for anyone who has told tsc what type a value has

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `{} as User` compiles and `user.name.toUpperCase()` then throws `TypeError`: `as` changes what tsc believes, not the value. tsc refuses only types with no overlap, like `"42" as number`, and `as unknown as number` gets past even that.

**Keywords:** `type assertion`, `as`, `non-null assertion`, `as unknown as`

## What the finished page will answer

- What does `{} as User` produce at run time, and where does the program first fail?
- Why is `"42" as number` error TS2352 while `"42" as unknown as number` is accepted?
- What does the non-null assertion in `[1, 2].find(x => x > 5)!` promise, and what happens when `find` returns `undefined`?
- How is `as const` different from every other `as`?
- What would a run-time check in place of `as User` look like, and what does it cost?

## Examples it will need

- [ ] `type_assertions_empty_user_sh.sh` — tsc's silence for {} as User, then Node's TypeError from user.name.toUpperCase()
- [ ] `type_assertions_overlap_tserror.ts` — the TS2352 error for "42" as number, and nothing for the double assertion that gets past it
- [ ] `type_assertions_non_null_sh.sh` — a non-null assertion on a find that matched nothing, and the TypeError that follows

## See also

- [`satisfies`, `as` and annotations](../../24_Narrowing/satisfies_as_and_annotations/README.md) — as beside satisfies and annotations, which do check
- [Type predicates](../../24_Narrowing/type_predicates_and_assertion_functions/README.md) — asserts x is T, another claim tsc trusts
- [Run-time validation](../runtime_validation/README.md) — what to do instead of asserting
- [`any` is contagious](../any_is_contagious/README.md) — any, the assertion nobody has to write
- [Rust: Casting with `as` ↗](https://masiarek.github.io/rust-learning-library/29_Conversion/casting_with_as/index.html) — the Rust as converts the value; TypeScript's as converts only the type
- [Rust: `mem::transmute` ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/transmute/index.html) — the nearest Rust match to as unknown as T, checking only size

## Sources to start from

- [TypeScript Handbook — Type assertions ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [TypeScript Handbook — Non-null assertion operator ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)
