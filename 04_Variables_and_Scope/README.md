# 04 — Variables and scope

**One line:** A JavaScript variable is a binding in a scope, and nearly every scope surprise comes down to when a binding is created, how far it reaches, and whether a loop turn or a function call gets its own.

The chapter starts with the three declarations and the two kinds of scope they create, then what `const` does and does not fix. Hoisting and the temporal dead zone explain when a name exists before its line runs. Closures follow, because a function keeps the bindings of the scope it was made in, and then the loop where that matters most. It ends with the global object and with destructuring, which declares several bindings at once.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`var`, `let` and `const`](var_let_and_const/README.md) | 101 | `var` belongs to the whole function, so a `var` declared inside an `if` block is still there after the block ends, while `let` and `const` stop at the closing brace; `const` also refuses reassignment, with a `TypeError` at run time. | stub |
| [`const` is not frozen](const_is_not_frozen/README.md) | 101 | `const` fixes the binding, not the value: `const list = [1]` still lets you `push`, only `list = []` throws, and even `Object.freeze` stops at the first level, so a frozen object's array property still takes new items. | stub |
| [Hoisting and the temporal dead zone](hoisting_and_the_tdz/README.md) | 201 | Every declaration is known from the top of its scope: a `var` reads as `undefined` before its line, a function declaration can already be called, and a `let` or `const` throws a `ReferenceError` until its line has run — a matter of time, not position. | stub |
| [Closures](closures/README.md) | 201 | A closure keeps the variable, not a copy of its value: a function made before `greeting` changes sees the new value, and two functions returned by one call share one `count`, while a second call gets a fresh one. | stub |
| [Closures in loops](closures_in_loops/README.md) | 201 | Functions made in a `for (var i ...)` loop all see the one `i` the loop finished with, so they return `3, 3, 3`; `for (let i ...)` gives each turn its own copy of `i`, so they return `0, 1, 2`. | stub |
| [The global object](the_global_object/README.md) | 201 | In a classic script, a top-level `var` or function declaration becomes a property of `globalThis` but `let`, `const` and `class` do not; in a module none of them do, so `var x` at the top of an `.mjs` file never reaches `globalThis.x`. | stub |
| [Destructuring](destructuring/README.md) | 101 | A destructuring default fires only for `undefined`: `const { a = 1 } = { a: null }` leaves `a` as `null` and `const [c = 1] = [0]` keeps `0`; and destructuring `null` itself throws a `TypeError`, even when the pattern asks for nothing. | stub |
<!-- /lessons -->

## Boundaries

`this` and function parameters are chapter 5, and the scope of a module and its imports is chapter 14.
