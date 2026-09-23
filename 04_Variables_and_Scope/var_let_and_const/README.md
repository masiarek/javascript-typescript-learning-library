# `var`, `let` and `const` — function scope versus block scope

**Level:** 101 · for anyone who has seen var in old code and let in new code

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `var` belongs to the whole function, so a `var` declared inside an `if` block is still there after the block ends, while `let` and `const` stop at the closing brace; `const` also refuses reassignment, with a `TypeError` at run time.

**Keywords:** `var`, `let`, `const`, `block scope`

## What the finished page will answer

- After an `if` block that declares one `var` and one `let`, which of the two can the rest of the function still read?
- What happens when you declare the same name twice with `var`, and twice with `let`?
- Is assigning to a `const` a syntax error or a run-time `TypeError`, and when is it reported?
- Does the counter declared in a `for` loop's header survive the loop with `var`, and with `let`?
- Where does a function declared inside a block belong in sloppy mode, and in strict mode?

## Examples it will need

- [ ] `var_let_and_const_block_scope_js.js` — a var and a let declared in an if block and read after it, and a for loop's counter read after the loop
- [ ] `var_let_and_const_redeclare_sh.sh` — a file that declares let twice and one that assigns to a const, with the SyntaxError, the TypeError and each exit status

## See also

- [Hoisting and the temporal dead zone](../hoisting_and_the_tdz/README.md) — when each kind of name comes into existence
- [`const` is not frozen](../const_is_not_frozen/README.md) — what `const` fixes and what it does not
- [Closures in loops](../closures_in_loops/README.md) — where the function scope of `var` bites
- [The global object](../the_global_object/README.md) — which declarations land on `globalThis`
- [`using` and `Symbol.dispose`](../../17_Metaprogramming/explicit_resource_management/README.md) — `using`, a fourth block-scoped declaration
- [Rust: Scope is about names, not values ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/scope_is_about_names/index.html) — in Rust too, a name's scope ends at the closing brace
- [Rust: `const` and `static` ↗](https://masiarek.github.io/rust-learning-library/27_Modules/const_and_static/index.html) — in Rust, `const` is a value substituted at compile time

## Sources to start from

- [MDN — var ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN — let ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [ECMA-262 — Let, Const, Using, and Await Using Declarations ↗](https://tc39.es/ecma262/#sec-let-and-const-declarations)
