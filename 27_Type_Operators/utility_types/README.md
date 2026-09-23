# Utility types — `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`

**Level:** 201 · for anyone who has written an object type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Pick<User, "nmae">` is an error, but `Omit<User, "nmae">` is accepted and removes nothing: `Omit` takes any string as a key, so a misspelt key passes silently and surfaces later as a missing-property error.

**Keywords:** `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`

## What the finished page will answer

- Why is `Pick<User, "nmae">` an error while `Omit<User, "nmae">` is accepted, and what does the second leave in the type?
- Is `Partial<User>` deep — may `{ profile: {} }` be a `Partial<User>` when `profile` has required fields?
- What is `ReturnType<typeof load>` for an `async function load`, and what does wrapping it in `Awaited` add?
- What does `Record<"a" | "b", number>` require that `Record<string, number>` does not?
- How are these types written in the standard library's `lib.es5.d.ts`, and which are mapped types and which conditional?

## Examples it will need

- [ ] `utility_types_omit_typo_tserror.ts` — the TS2344 error for Pick with a misspelt key, and the missing-property error that is the only sign Omit ignored it
- [ ] `utility_types_partial_is_shallow_tserror.ts` — the error for a partial User whose nested object leaves out a required field
- [ ] `utility_types_awaited_ts.ts` — the value an async loader resolves to, stored in a variable typed with Awaited and ReturnType

## See also

- [Mapped types](../mapped_types/README.md) — how Partial, Pick and Record are built
- [Conditional types](../conditional_types_and_infer/README.md) — how ReturnType and Awaited are built
- [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md) — the promises Awaited unwraps
- [Object types](../../23_Everyday_Types/object_types/README.md) — the optional and readonly properties these types add and remove

## Sources to start from

- [TypeScript Handbook — Utility types ↗](https://www.typescriptlang.org/docs/handbook/utility-types.html)
