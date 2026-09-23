# `eval` and `new Function` — running a string as code, and why not to

**Level:** 301 · for anyone tempted to build code out of a string

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Direct `eval` sees the caller's local variables, while `(0, eval)(code)` and `new Function(code)` see only globals — and starting Node with `--disallow-code-generation-from-strings` turns all three into an `EvalError`.

**Keywords:** `eval`, `new Function`, `--disallow-code-generation-from-strings`

## What the finished page will answer

- What do direct `eval`, indirect `(0, eval)` and `new Function` return for a name that is both a local and a global?
- Can `eval("var z = 1")` add `z` to the calling function in sloppy mode, and in strict mode?
- What does `--disallow-code-generation-from-strings` do to each of the three forms?
- What can a string from outside the program do once it reaches `eval`, for example read `process.env`?
- What does `new Function("a", "b", "return a + b")` build, and how does it differ from an arrow written in the source?

## Examples it will need

- [ ] `eval_and_new_function_scopes_js.js` — what direct eval, indirect eval and new Function each return for a name defined locally and globally
- [ ] `eval_and_new_function_flag_sh.sh` — the same file run normally and under --disallow-code-generation-from-strings, one EvalError per form
- [ ] `eval_and_new_function_var_leak_cjs.cjs` — a var created by eval in a sloppy function, visible afterwards, beside the strict version where it is not

## See also

- [Declarations, expressions and arrows](../../05_Functions/three_ways_to_write_a_function/README.md) — the ways to make a function without a string
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — the rule that keeps eval's var to itself
- [The global object](../../04_Variables_and_Scope/the_global_object/README.md) — the global scope that indirect eval and new Function see
- [C: A format string is a program ↗](https://masiarek.github.io/c-learning-library/03_Strings/a_format_string_is_a_program/index.html) — another place where a string from outside becomes a program

## Sources to start from

- [MDN — eval(): direct and indirect eval ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)
- [ECMA-262 — PerformEval ↗](https://tc39.es/ecma262/#sec-performeval)
- [Node.js 24 — CLI: --disallow-code-generation-from-strings ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#--disallow-code-generation-from-strings)
