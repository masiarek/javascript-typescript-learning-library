# 02 — Values and types

**One line:** JavaScript has eight types — seven immutable primitives and the object — and most surprises about values come from the line between them: `typeof null`, wrapper objects, and assignment that copies a primitive but shares an object.

The chapter starts with the eight types and the operator that names them, `typeof`, including the answer it gets wrong. Then the two empty values, `null` and `undefined`. Next come the wrapper objects that let a primitive have methods, and the two newer primitives, symbols and BigInt, each with rules of its own. It ends with what assignment copies, because that is where primitives and objects part ways.

Every lesson ends with a kata whose solution is a program CI runs. The last three pages are the chapter's companions: [the errors](values_and_types_errors/README.md) a learner meets with these values, each with its fix; [the lints](values_and_types_lints/README.md) that catch the chapter's mistakes, and the ones no lint catches; and [resources](values_and_types_resources/README.md) — the books by chapter, the documentation, and the claims in them that fail when run.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Eight types](eight_types/README.md) | 101 | Every value has one of eight types — seven primitives (undefined, null, boolean, number, bigint, string, symbol) and Object — and `Object(v) === v` is `true` only for an object; a primitive takes no property and never changes, while arrays, functions, dates, regular expressions and the instances of your own classes are kinds of Object, not types of their own. | checked |
| [`typeof`](the_typeof_operator/README.md) | 101 | `typeof` answers with one of eight strings, and two of its answers do not name the value's type: `typeof null` is `"object"` though no other test calls `null` an object, and a function or a class, which is an object, answers `"function"`; for a name nothing declares it answers `"undefined"`, yet it throws a `ReferenceError` for a `let` read before its line. | checked |
| [`null` and `undefined`](null_and_undefined/README.md) | 101 | `undefined` is what the language fills in when nothing was assigned — a missing property, argument or return value — while `null` appears only where some code returns it; the two are `==` but not `===`, and `null + 1` is `1` while `undefined + 1` is `NaN`. | checked |
| [Primitives and wrappers](primitives_and_wrapper_objects/README.md) | 201 | `"abc".length` works because the lookup wraps the string in a temporary `String` object — a sloppy-mode method is even handed a new wrapper as `this` on every call — while `new String("abc")` keeps its wrapper, so `typeof` says `"object"`, two equal ones are not `===`, and `new Boolean(false)` is truthy. | checked |
| [Symbols](symbols/README.md) | 201 | `Symbol("id") === Symbol("id")` is `false`, so two modules' symbol keys never collide, while `Symbol.for("id")` hands every caller one shared symbol and brings the collision back; `Object.keys`, `for...in`, `JSON.stringify` and `structuredClone` skip a symbol key, but spread and `Object.assign` copy it and `Reflect.ownKeys` lists it — hidden from accidents, not from anyone looking. | checked |
| [BigInt](bigint/README.md) | 201 | `2n ** 64n` is exact and `-7n / 2n` is `-3n`, because division truncates toward zero, but `1n + 1` throws a `TypeError`: arithmetic never mixes BigInt with Number, while comparison does and compares exact values, so `1n == 1` is `true` and `2n ** 53n + 1n == 2 ** 53 + 1` is `false`; a BigInt grows as needed up to V8's ceiling of about 2^30 bits. | checked |
| [Values and references](values_and_references/README.md) | 101 | Assignment copies what a variable holds, and for an object that is a reference: after `const b = a`, `b.count = 2` changes `a.count` too; a function can change an object you pass it, but assigning to its parameter never changes which object your variable holds; and `{ n: 1 } === { n: 1 }` is `false`, because `===` on two objects asks whether they are one object. | checked |
| [Errors around values and types](values_and_types_errors/README.md) | 201 | Seventeen messages, each printed by a run on this page — thirteen by Node while a program ran, four by `tsc` before one could — and under each, the program behind it, what that program assumed, and a fix that runs. | checked |
| [Lints around values and types](values_and_types_lints/README.md) | 201 | Twelve core ESLint rules each flag a mistake from this chapter — nine of the bad programs print a wrong answer, two throw, one is only untidy — and pass the fixed program with no report; `tsc --strict` refuses seven of those mistakes on its own and accepts five, and six more mistakes pass both tools and still print a wrong answer. | checked |
| [Resources for values and types](values_and_types_resources/README.md) | 101 | Thirteen books and the ES5 standard cover this chapter in the sections named here, beside three free online books, the specification, MDN, the TypeScript handbook, six articles and four videos; the older sources count five or six types, one number type and a writable `undefined`, and eight programs on this page show what Node 24 and TypeScript 7 do instead. | checked |
<!-- /lessons -->

## Boundaries

Numbers and strings get chapters of their own (10 and 9), and converting one type into another is chapter 3.
