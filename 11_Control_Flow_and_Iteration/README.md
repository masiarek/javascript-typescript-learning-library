# 11 — Control flow and iteration

**One line:** Every way of walking a sequence in JavaScript — `for...of`, spread, destructuring, generators, iterator helpers and `for await` — runs on one small protocol, `[Symbol.iterator]()` and `next()`, while the older statements keep rules of their own: `switch` compares with `===` and `&&` returns an operand.

The chapter starts with the statements every program uses — `if`, `switch`, the conditional operator and the loops — and with `&&`, `||` and `??`, which decide as much control flow as any statement. It then separates `for...in`, which walks keys, from `for...of`, which walks values, and opens up what `for...of` runs on: the iteration protocol. Generators write that protocol for you, iterator helpers chain lazily on top of it, and async iteration stretches it over values that arrive later.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`if`, `switch` and `? :`](if_switch_and_the_conditional_operator/README.md) | 101 | `switch` matches its cases with `===`, so `"1"` never reaches `case 1` and `NaN` never reaches `case NaN` — and a `case` without `break` falls through into the next one. | stub |
| [Loops](loops/README.md) | 101 | `do...while` always runs its body once, a plain `break` leaves only the innermost loop, and `break outer` leaves every loop out to the label — a label even lets `break` leave a plain block, though `continue` must name a loop. | stub |
| [Short-circuit evaluation](short_circuit_evaluation/README.md) | 101 | <code>a &#124;&#124; b</code>, `a && b` and `a ?? b` hand back one of their operands, not `true` or `false` — `0 ?? 5` is `0` and `"a" && "b"` is `"b"` — and the right side never runs once the left side decides. | stub |
| [`for...in` and `for...of`](for_in_and_for_of/README.md) | 101 | `for...in` walks an object's enumerable string keys, inherited ones included — on an array it yields `"0"`, `"1"` and any extra property — while `for...of` walks the values an iterable hands out, and throws `TypeError` on a plain object. | stub |
| [The iteration protocol](the_iteration_protocol/README.md) | 201 | Any object whose `[Symbol.iterator]()` returns something with a `next()` method works with `for...of`, spread and destructuring — and when a `break` or a short destructuring stops early, JavaScript calls the iterator's `return()` so it can clean up. | stub |
| [Generators](generators/README.md) | 201 | Calling a generator function runs none of its body: each `next()` runs it to the following `yield`, the argument of `next(x)` becomes that `yield`'s value, and the generator object can be walked only once. | stub |
| [Iterator helpers](iterator_helpers/README.md) | 201 | `map`, `filter`, `take` and the other methods on `Iterator.prototype` do nothing until a value is asked for, so `naturals().map(square).take(3)` works on an endless generator and calls `square` exactly three times. | stub |
| [Async iteration](async_iteration/README.md) | 301 | `for await...of` waits for each value before asking for the next, so looping over an array of running promises is a trap: one that rejects before the loop reaches it is unhandled, and Node exits with status 1 despite the `try` around the loop. | stub |
<!-- /lessons -->

## Boundaries

Closures made inside loops belong to Variables and scope, the array methods `map`, `filter` and `reduce` to Arrays and collections, and TypeScript's exhaustive `switch` to Narrowing.
