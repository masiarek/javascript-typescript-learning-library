# Function types — parameters, optional arguments and overloads

**Level:** 201 · for TypeScript users typing functions and callbacks

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Callers see only the overload signatures, never the implementation's: `pad("a", 3)` is rejected although `(value: string | number, width?: number)` would accept it, and a callback may take fewer parameters than its type declares but not more.

**Keywords:** `function type`, `overload`, `optional parameter`

## What the finished page will answer

- Why is `pad("a", 3)` rejected when the implementation signature accepts a string and a width, and which overload does tsc's message name?
- Why may `() => {}` be assigned to `(event: string, time: number) => void`, and why does a three-parameter function fail with 'Target signature provides too few arguments'?
- What is the difference for a caller between `width?: number` and `width: number | undefined` (TS2554)?
- Why can a function that returns a number be assigned to a type that returns `void`, and what does the caller receive?
- How is a rest parameter typed, and what does `(...args: [string, number])` accept?

## Examples it will need

- [ ] `function_types_overload_tserror.ts` — TS2345 for a call that only the implementation signature would accept, and TS2322 for a callback with one parameter too many
- [ ] `function_types_void_return_ts.ts` — the value that a `() => void` variable actually returns when it holds a function returning a number

## See also

- [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md) — defaults and rest parameters at run time
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — functions passed as values, which function types describe
- [Generic functions](../../26_Generics/generic_functions/README.md) — one generic signature instead of several overloads
- [Variance](../../25_Type_Compatibility/variance/README.md) — why parameter types are compared the other way round
- [Rust: Optional function arguments ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/optional_arguments/index.html) — no optional parameters and no overloading in Rust, and what replaces them

## Sources to start from

- [TypeScript Handbook — More on Functions: overloads ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [TypeScript Handbook — More on Functions: optional parameters in callbacks ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters-in-callbacks)
- [TypeScript Handbook — More on Functions: return type void ↗](https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void)
