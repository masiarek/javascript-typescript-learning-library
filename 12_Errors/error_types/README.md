# Built-in error types — `TypeError`, `RangeError`, `SyntaxError` and when each appears

**Level:** 101 · for anyone who has read an error and wondered why it has that type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The engine picks the type: `TypeError` for using a value the wrong way, `ReferenceError` for an unknown name, `RangeError` for a number out of range, `SyntaxError` for text it cannot parse — and `EvalError` only when the host forbids `eval` altogether.

**Keywords:** `TypeError`, `RangeError`, `SyntaxError`, `ReferenceError`, `URIError`, `EvalError`

## What the finished page will answer

- Which error type do `null.x`, `undefined()`, assigning to a `const` and `1n + 1` throw?
- What throws `RangeError` — `new Array(-1)`, `(1).toFixed(101)`, recursion without end — and what do the messages say?
- Why is a `SyntaxError` in your own file thrown before its first line runs, while `JSON.parse("{")` throws at run time and can be caught?
- When is `ReferenceError` thrown for a name that is declared?
- Which built-in error does the specification never throw, and what makes V8 throw it anyway?
- Which parts of an error can a program rely on — the constructor and `name` — and which differ between engines, such as the message text?

## Examples it will need

- [ ] `error_types_by_mistake_js.js` — one line per mistake: the code, the error type it throws and the message
- [ ] `error_types_syntax_before_run_sh.sh` — a file whose first line logs and whose second is a syntax error: nothing printed, the SyntaxError and the exit status
- [ ] `error_types_evalerror_sh.sh` — `eval` under `--disallow-code-generation-from-strings` throwing `EvalError`

## See also

- [`throw` and `try...catch`](../throw_and_try_catch/README.md) — catching the errors listed here
- [Custom errors and `cause`](../custom_errors_and_cause/README.md) — adding your own type to the list
- [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md) — the `RangeError` that ends runaway recursion
- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — the `ReferenceError` for a declared name used too early
- [`eval` and `new Function`](../../17_Metaprogramming/eval_and_new_function/README.md) — code run from a string, and the flag that forbids it

## Sources to start from

- [MDN — Error ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [ECMA-262 — Native Error Types Used in This Standard ↗](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard)
- [MDN — EvalError ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
