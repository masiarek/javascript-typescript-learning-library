# 26 — Generics

**One line:** A type parameter is a blank that tsc fills in at every call from the arguments, and most surprises come from what it fills in when you did not say.

Generics let one function or type work for many types while keeping the link between what goes in and what comes out. The chapter starts with generic functions and how tsc infers a type parameter from the arguments, then constraints that limit what it may be, then generic interfaces and classes with default type arguments. The last two pages steer inference: `const` type parameters keep literal types, and `NoInfer` and explicit type arguments handle calls where inference picks the wrong answer or has nothing to go on.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Generic functions](generic_functions/README.md) | 201 | The caller never writes `T`: tsc infers it from the arguments, so `pair(1, 2)` returns `number[]`. Disagreeing arguments do not make a union — `pair(1, "x")` is an error, because tsc takes `number` from the first argument and checks the second against it. | stub |
| [Constraints](generic_constraints/README.md) | 201 | `<T extends { length: number }>` lets the body read `.length` and makes `longest(10, 20)` an error. Inside the body, though, `T` is not its constraint: returning `{ length: 0 }` as a `T` fails, because the caller's `T` may be a narrower type. | stub |
| [Generic types](generic_types_and_defaults/README.md) | 201 | With nothing to infer from, `new Stack()` becomes `Stack<unknown>` and accepts any push; a default `<T = string>` makes `new Queue()` a `Queue<string>`; and the standard library's `new Map()` is `Map<any, any>`, which checks nothing. | stub |
| [`const` type parameters](const_type_parameters/README.md) | 301 | `<const T>` infers what `as const` would: `keep(["get", "post"])` is `readonly ["get", "post"]` where a plain `<T>` gives `string[]`. It acts only on a literal written in the call — pass a variable and the result is `string[]` again. | stub |
| [When inference guesses wrong](when_inference_fails/README.md) | 301 | tsc infers a type parameter from every argument it appears in, so `light(["red", "green"], "blue")` quietly adds `"blue"` to `C`; marking the second parameter `NoInfer<C>` stops it counting, and the same call becomes an error. | stub |
<!-- /lessons -->

## Boundaries

The operators generics are usually combined with — `keyof`, indexed access, mapped and conditional types — are in the next chapter, Type operators.
