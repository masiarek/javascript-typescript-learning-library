# Closures — a function keeps the variables it was born with

**Level:** 201 · for anyone who has returned a function from a function

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A closure keeps the variable, not a copy of its value: a function made before `greeting` changes sees the new value, and two functions returned by one call share one `count`, while a second call gets a fresh one.

**Keywords:** `closure`, `lexical scope`

## What the finished page will answer

- When a function reads a variable that changes after the function is made, which value does it see?
- Do two functions returned from one call share their captured variables, and does a second call create new ones?
- Can any code outside the function reach `count`, and how does that privacy compare with a `#private` field?
- Does a closure keep a large object alive when the function never uses it, and what do `--expose-gc` and a `WeakRef` show?

## Examples it will need

- [ ] `closures_counter_js.js` — two counters from one factory incremented separately, and a function that sees a variable change after it was made
- [ ] `closures_shared_scope_js.js` — two closures from one call writing and reading the same variable

## See also

- [Closures in loops](../closures_in_loops/README.md) — the loop where capturing the variable matters most
- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — functions that take and return functions
- [Memory leaks](../../18_Memory_and_Garbage_Collection/memory_leaks/README.md) — what a closure keeps alive
- [Private fields](../../07_Prototypes_and_Classes/private_fields/README.md) — `#private`, the other way to hide state
- [Rust: What a closure is ↗](https://masiarek.github.io/rust-learning-library/23_Closures/what_a_closure_is/index.html) — a Rust closure is a struct holding what it captured
- [Rust: The `move` keyword ↗](https://masiarek.github.io/rust-learning-library/23_Closures/the_move_keyword/index.html) — in Rust you choose whether a closure borrows or moves

## Sources to start from

- [MDN — Closures ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
- [ECMA-262 — Environment Records ↗](https://tc39.es/ecma262/#sec-environment-records)
