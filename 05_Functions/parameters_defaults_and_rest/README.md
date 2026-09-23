# Parameters — defaults evaluated per call, rest, and the old `arguments`

**Level:** 101 · for anyone who has written a function with an optional argument

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A default parameter is evaluated again at every call that passes `undefined` — not `null` — so `(item, list = [])` gives each call a fresh array, where Python's `lst=[]` is built once and shared; a rest parameter is a real array, `arguments` is not.

**Keywords:** `arguments`, `rest parameters`, `default parameters`

## What the finished page will answer

- When is a default expression evaluated, and what do two calls to `add(item, list = [])` return next to Python's `def add(item, lst=[])`?
- Which argument values trigger the default: `undefined`, `null`, `0`, or a missing argument?
- Can a default refer to an earlier parameter, to a later one, or to a `var` declared in the function body?
- How does a rest parameter differ from `arguments`: is it an array, does it include the named parameters, and does it exist in an arrow?
- In a sloppy function, why does assigning to a parameter change `arguments[0]`, and why does adding one default parameter stop that?

## Examples it will need

- [ ] `parameters_defaults_per_call_js.js` — a function with an array default called twice, then with undefined, null, 0 and no argument, marking which calls used the default
- [ ] `parameters_defaults_python_py.py` — the same function in Python, where the one default list grows from call to call
- [ ] `parameters_rest_and_arguments_cjs.cjs` — rest beside arguments with Array.isArray for each, then a sloppy function where a parameter assignment shows in arguments until a default is added

## See also

- [Destructuring](../../04_Variables_and_Scope/destructuring/README.md) — destructuring defaults follow the same only-undefined rule
- [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md) — ??, the fallback that also replaces null
- [Functions are objects](../functions_are_objects/README.md) — why a default or rest parameter shortens length
- [Arrow functions](../arrow_functions_and_this/README.md) — arrows have no arguments object at all
- [Function types](../../23_Everyday_Types/function_types_and_overloads/README.md) — optional and rest parameters with types
- [Rust: Optional function arguments ↗](https://masiarek.github.io/rust-learning-library/17_Option_and_Result/optional_arguments/index.html) — how Rust copes with no default parameters at all

## Sources to start from

- [MDN — Default parameters ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN — Rest parameters ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN — The arguments object ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
