# `typeof` — eight answers, and the `null` that says object

**Level:** 101 · for anyone who has written a line of JavaScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `typeof` answers with one of eight strings, and two answers surprise everyone: `typeof null` is `"object"`, and a function, which is an object, answers `"function"`.

**Keywords:** `typeof`

## What the finished page will answer

- What does `typeof` return for each of the eight types, and for a function, an array and a class?
- Why is `typeof null` `"object"`, and why can the language never change it?
- Why does `typeof` of an undeclared name return `"undefined"` instead of throwing, and when does it throw after all?
- How do you test for an array, for `null`, or for a plain object, given what `typeof` cannot tell apart?

## Examples it will need

- [ ] `typeof_every_type_js.js` — one line per value: the value, then what typeof says about it
- [ ] `typeof_in_the_tdz_sh.sh` — typeof on an undeclared name beside typeof on a let in its temporal dead zone, with the ReferenceError and the exit status

## See also

- [Eight types](../eight_types/README.md) — the eight types typeof is trying to name
- [`null` and `undefined`](../null_and_undefined/README.md) — the two absences, and the one typeof gets wrong
- [`keyof` and `typeof` in types](../../27_Type_Operators/keyof_and_typeof/README.md) — typeof in a type position is a different operator
- [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md) — tsc narrows a type after a typeof check
- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — the one place typeof throws

## Sources to start from

- [MDN — typeof ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [ECMA-262 — The typeof Operator ↗](https://tc39.es/ecma262/#sec-typeof-operator)
