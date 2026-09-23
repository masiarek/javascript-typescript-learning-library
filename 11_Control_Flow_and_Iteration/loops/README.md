# Loops — `for`, `while`, `do...while`, and labelled `break`

**Level:** 101 · for anyone who has written a loop in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `do...while` always runs its body once, a plain `break` leaves only the innermost loop, and `break outer` leaves every loop out to the label — a label even lets `break` leave a plain block, though `continue` must name a loop.

**Keywords:** `for`, `while`, `do...while`, `break`, `continue`, `label`

## What the finished page will answer

- How many times does `do { ... } while (false)` run its body, and how many times does `while (false) { ... }`?
- In two nested loops, which loop does a plain `break` leave, and which does `break outer` leave?
- Why does a `continue` placed before `i++` in a `while` loop spin forever, when the same `continue` in a `for` loop still runs the update?
- What does `break` do inside a labelled block that is not a loop, and why is `continue` to that label a `SyntaxError`?
- What does `for (let i = 0, j = 9; i < j; i++, j--)` visit, and what does `for (;;)` do?

## Examples it will need

- [ ] `loops_break_and_labels_js.js` — the pairs a nested search visits with `break`, with `break outer` and with a labelled block
- [ ] `loops_continue_in_while_js.js` — `continue` in a `for` loop beside the same `continue` in a `while` loop, the second stopped by a guard after 20 turns
- [ ] `loops_continue_label_sh.sh` — the SyntaxError for `continue` naming a block label, and for a label that does not exist

## See also

- [Closures in loops](../../04_Variables_and_Scope/closures_in_loops/README.md) — a `let` in a `for` header is a new variable every turn
- [`for...in` and `for...of`](../for_in_and_for_of/README.md) — the two loops that walk keys and values for you
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — array methods that replace many counting loops
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — what a long loop does to every timer
- [Rust: Loop labels ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/loop_labels/index.html) — the same labelled `break`, spelled `'outer` in Rust
- [Rust: `break` ↗](https://masiarek.github.io/rust-learning-library/25_Control_Flow/break_expressions/index.html) — in Rust `break` can carry a value out of a loop

## Sources to start from

- [MDN — Labeled statement ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
- [MDN — do...while ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [ECMA-262 — Labelled Statements ↗](https://tc39.es/ecma262/#sec-labelled-statements)
