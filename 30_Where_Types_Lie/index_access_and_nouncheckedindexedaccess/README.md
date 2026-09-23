# Index access — `arr[99]` is typed as present

**Level:** 201 · for anyone who has indexed an array in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `prices[99]` on a `number[]` is typed `number`, so `prices[99].toFixed(2)` passes tsc under `strict` and throws `TypeError` in Node; `noUncheckedIndexedAccess`, which `strict` leaves off, adds `undefined` to every index read and catches it.

**Keywords:** `noUncheckedIndexedAccess`

## What the finished page will answer

- What type does `prices[99]` have under `strict`, and what does Node do with `prices[99].toFixed(2)`?
- Does `noUncheckedIndexedAccess` also cover `record.missing` on a `Record<string, number>`?
- Why is `prices[0]` still possibly `undefined` under the flag after `if (prices.length > 0)`, and which of `for...of`, destructuring and `.at()` are typed `number`?
- Why is `prices.at(99)` already `number | undefined` without the flag?
- Why is reading a tuple past its end, `t[5]` on `[number, number]`, an error even without the flag?
- What does `process.argv[2]` claim about a missing argument, with and without the flag?

## Examples it will need

- [ ] `index_access_prices_sh.sh` — tsc's silence, Node's TypeError for prices[99].toFixed, and TS18048 once noUncheckedIndexedAccess is on
- [ ] `index_access_forms_tserror.ts` — the errors under the flag for indexing after a length check, for a Record key, and for a tuple past its end
- [ ] `index_access_safe_forms_ts.ts` — the same prices read with for...of, at() with a default, and a checked index, none of which can throw

## See also

- [Arrays](../../08_Arrays_and_Collections/array_basics/README.md) — what an out-of-range read returns at run time
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — strict, which leaves this flag off
- [Indexed access types](../../27_Type_Operators/indexed_access_types/README.md) — the same lookup done in a type, T[number]
- [Object types](../../23_Everyday_Types/object_types/README.md) — index signatures, which the flag also covers
- [Rust: Partial functions: why `Option` exists ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/partial_functions/index.html) — in Rust get returns Option, so the missing element is in the type

## Sources to start from

- [TSConfig reference — noUncheckedIndexedAccess ↗](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)
- [TypeScript 4.1 release notes — Checked indexed accesses ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#checked-indexed-accesses---nouncheckedindexedaccess)
