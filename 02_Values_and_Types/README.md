# 02 — Values and types

**One line:** JavaScript has eight types — seven immutable primitives and the object — and most surprises about values come from the line between them: `typeof null`, wrapper objects, and assignment that copies a primitive but shares an object.

The chapter starts with the eight types and the operator that names them, `typeof`, including the answer it gets wrong. Then the two empty values, `null` and `undefined`. Next come the wrapper objects that let a primitive have methods, and the two newer primitives, symbols and BigInt, each with rules of its own. It ends with what assignment copies, because that is where primitives and objects part ways.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Eight types](eight_types/README.md) | 101 | Every value has one of eight types: seven primitives (undefined, null, boolean, number, bigint, string, symbol) and Object; arrays, functions, dates and regular expressions are not types of their own but kinds of object. | stub |
| [`typeof`](the_typeof_operator/README.md) | 101 | `typeof` answers with one of eight strings, and two answers surprise everyone: `typeof null` is `"object"`, and a function, which is an object, answers `"function"`. | stub |
| [`null` and `undefined`](null_and_undefined/README.md) | 101 | `undefined` fills anything never assigned — a missing property, argument or return value — while `null` is a value some code chose to return; they are `==` but not `===`, and `null + 1` is `1` but `undefined + 1` is `NaN`. | stub |
| [Primitives and wrappers](primitives_and_wrapper_objects/README.md) | 201 | `"abc".length` works because the lookup wraps the string in a temporary `String` object; `new String("abc")` keeps the wrapper, so `typeof` says `"object"`, two equal ones are not `===`, and `new Boolean(false)` is truthy. | stub |
| [Symbols](symbols/README.md) | 201 | Every `Symbol()` call makes a new value, even with the same description, so a symbol key cannot collide; `Object.keys`, `for...in` and `JSON.stringify` skip it, but `Reflect.ownKeys` still lists it — hidden from accidents, not from anyone looking. | stub |
| [BigInt](bigint/README.md) | 201 | `2n ** 64n` is exact and `7n / 2n` is `3n`, but `1n + 1` throws a `TypeError`: arithmetic never mixes BigInt with Number, although comparison does, so `1n == 1` is `true` and `2n > 1` works. | stub |
| [Values and references](values_and_references/README.md) | 101 | Assignment copies what the variable holds, and for an object that is a reference: after `b = a`, setting `b.count` changes `a.count`, and a function can change an object you pass it but can never make your variable point somewhere else. | stub |
<!-- /lessons -->

## Boundaries

Numbers and strings get chapters of their own (10 and 9), and converting one type into another is chapter 3.
