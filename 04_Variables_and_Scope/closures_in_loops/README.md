# Closures in loops — `var` shares one variable, `let` makes one per turn

**Level:** 201 · for anyone who has made functions in a loop and got the last value every time

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Functions made in a `for (var i ...)` loop all see the one `i` the loop finished with, so they return `3, 3, 3`; `for (let i ...)` gives each turn its own copy of `i`, so they return `0, 1, 2`.

**Keywords:** `per-iteration binding`, `IIFE`

## What the finished page will answer

- What do three functions pushed in a `for (var i ...)` loop return, and three pushed in a `for (let i ...)` loop?
- Why does `setTimeout(() => console.log(i))` in a `var` loop print the final value three times?
- If the loop body changes `i`, which value does that turn's function see, and when is the next turn's copy made?
- Why does a function created in the loop's initializer, `for (let i = 0, get = () => i; ...)`, always return `0`?
- How did code written before `let` fix the loop with an immediately invoked function, and does `for (const x of list)` need any fix?

## Examples it will need

- [ ] `closures_in_loops_var_and_let_js.js` — functions made in a var loop and a let loop, with what each returns
- [ ] `closures_in_loops_timers_js.js` — setTimeout callbacks scheduled in a var loop, a let loop and an IIFE loop, in the order they fire

## See also

- [Closures](../closures/README.md) — what a closure captures
- [`var`, `let` and `const`](../var_let_and_const/README.md) — function scope against block scope
- [Timers](../../13_Async_and_the_Event_Loop/timers/README.md) — the `setTimeout` loop where this usually shows up
- [Loops](../../11_Control_Flow_and_Iteration/loops/README.md) — the loop forms themselves
- [Rust: The `move` keyword ↗](https://masiarek.github.io/rust-learning-library/23_Closures/the_move_keyword/index.html) — a Rust closure made in a loop moves or borrows that turn's value

## Sources to start from

- [MDN — Closures: creating closures in loops ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#creating_closures_in_loops_a_common_mistake)
- [MDN — for: lexical declarations in the initialization block ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#lexical_declarations_in_the_initialization_block)
- [ECMA-262 — CreatePerIterationEnvironment ↗](https://tc39.es/ecma262/#sec-createperiterationenvironment)
