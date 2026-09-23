# 17 — Metaprogramming

**One line:** JavaScript lets a program change how the language treats its objects — with well-known symbols, proxies, template tags, decorators and `using` — and each hook comes with rules the engine enforces even when your code does not.

The chapter moves from hooks the language calls on your objects to strings run as code. Well-known symbols come first, then `Proxy` and `Reflect`, which intercept every operation on an object. Tagged templates hand a function the pieces of a template. Decorators and `using` are the newest: the first is still a proposal that Node cannot run, the second shipped in Node 24. The chapter ends with `eval`, `new Function`, and the flag that switches both off.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Well-known symbols](well_known_symbols/README.md) | 301 | Node lists 15 well-known symbols, each a hook the language calls on your objects: a static `[Symbol.hasInstance]` makes `2 instanceof Even` answer `true`, and `[Symbol.toStringTag]` makes `Object.prototype.toString` report `[object Array]` for an object that is no array. | stub |
| [`Proxy` and `Reflect`](proxy_and_reflect/README.md) | 301 | A `Proxy` sees only the operations you trap — `"a" in p` never reaches a `get` trap, because `in` is the `has` trap — and it cannot lie about a frozen target: returning `0` for a frozen `answer: 42` throws a `TypeError`. | stub |
| [Tagged templates](tagged_templates/README.md) | 201 | A tag receives the literal pieces and the values separately — always one more piece than values — and the pieces array is frozen and is the same object on every call from one place in the source, with `.raw` keeping backslashes as typed. | stub |
| [Decorators](decorators/README.md) | 301 | Decorators are still a TC39 proposal, so Node 25.2.1 cannot run them — a `.ts` file with `@logged` fails with `SyntaxError` once its types are stripped — while TypeScript 7.0.2 type-checks the standard form and compiles it to JavaScript that Node runs. | stub |
| [`using` and `Symbol.dispose`](explicit_resource_management/README.md) | 301 | `using` calls `[Symbol.dispose]()` as its block exits — in reverse order of declaration, even when the block throws — and when a dispose throws too, both errors survive in one `SuppressedError`; Node 24 and 25.2.1 run it without a flag. | stub |
| [`eval` and `new Function`](eval_and_new_function/README.md) | 301 | Direct `eval` sees the caller's local variables, while `(0, eval)(code)` and `new Function(code)` see only globals — and starting Node with `--disallow-code-generation-from-strings` turns all three into an `EvalError`. | stub |
<!-- /lessons -->

## Boundaries

Symbols themselves, `Symbol.toPrimitive` and `Symbol.iterator` have their own pages in the values, coercion and iteration chapters; this chapter surveys the hooks and covers the rest.
