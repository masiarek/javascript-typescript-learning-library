# Resources for values and types — books by chapter, documentation, articles and videos

**Level:** 101 · for reading further on this chapter

**One line:** Thirteen books and the ES5 standard cover this chapter in the sections named here, beside three free online books, the specification, MDN, the TypeScript handbook, six articles and four videos; the older sources count five or six types, one number type and a writable `undefined`, and eight programs on this page show what Node 24 and TypeScript 7 do instead.

This page is for chapter 02 only: the eight types, `typeof`, `null` and `undefined`, wrapper objects, symbols, BigInt, and what assignment copies. Books are cited by title, author, edition, chapter and section, with every section name copied from the book itself; the numbers belong to the edition named. Every link was checked with curl and is given at its final address. The last section, *Read with care*, runs the claims that older sources get wrong. Checked 2026-09-23.

## Books

The whole collection, mapped chapter by chapter to every part of this library, is on the [Books](../../32_Resources/books/README.md) page. These are the parts of it that cover this chapter.

### Books that describe today's language

*JavaScript: The Definitive Guide* — David Flanagan (O'Reilly, 2020, 7th edition).

- ch. 3 *Types, Values, and Variables*: §3.1 *Overview and Definitions*, §3.2.5 *Arbitrary Precision Integers with BigInt*, §3.5 *null and undefined*, §3.6 *Symbols*, §3.8 *Immutable Primitive Values and Mutable Object References*, and the aside on wrapper objects in §3.9.2 *Explicit Conversions* → [Eight types](../eight_types/README.md), [BigInt](../bigint/README.md), [`null` and `undefined`](../null_and_undefined/README.md), [Symbols](../symbols/README.md), [Values and references](../values_and_references/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md)
- ch. 4 *Expressions and Operators*: §4.13.3 *The typeof Operator* (its Table 4-3 has a row for BigInt) and §4.13.6 *The void Operator* → [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md)
- ch. 6 *Objects*: §6.10.3 *Symbols as Property Names* → [Symbols](../symbols/README.md)
- One slip, run under *Read with care*: §3.1's list of the values that are not objects leaves out BigInt, the type its own §3.2.5 introduces.

*JavaScript: The New Toys* — T.J. Crowder (Wrox, 2020).

- ch. 5 *New Object Features*: *Symbol*, with *Why Symbols?*, *Creating and Using Symbols*, *Symbols Are Not for Privacy*, *Global Symbols* and *Well-Known Symbols*; *Object.getOwnPropertySymbols* under *New Object Functions* → [Symbols](../symbols/README.md)
- ch. 17 *Miscellany*: *BigInt*, with *Creating a BigInt*, *Explicit and Implicit Conversion*, *Performance*, *BigInt64Array and BigUint64Array* and *Utility Functions*; *Symbol description Property* under *Various Standard Library / Global Additions* → [BigInt](../bigint/README.md), [Symbols](../symbols/README.md)

*Eloquent JavaScript: A Modern Introduction to Programming* — Marijn Haverbeke (No Starch Press, 2019, 3rd edition).

- ch. 1 *Values, Types, and Operators*: *Values*, *Unary Operators* (where `typeof` first appears), *Empty Values* → [Eight types](../eight_types/README.md), [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md)
- ch. 4 *Data Structures: Objects and Arrays*: *Mutability*, *Strings and Their Properties* → [Values and references](../values_and_references/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md)
- ch. 6 *The Secret Life of Objects*: *Symbols* → [Symbols](../symbols/README.md)
- This edition predates BigInt: the word does not occur in it. What *Strings and Their Properties* says about setting a property on a string is run under *Read with care*.

*JavaScript: The Comprehensive Guide* — Philip Ackermann (Rheinwerk Publishing, 2022, 1st edition).

- ch. 3 *Language Core*: 3.2 *Using the Different Data Types*, with 3.2.6 *Special Data Types* (`null` and `undefined`) and 3.2.7 *Symbols* → [Eight types](../eight_types/README.md), [`null` and `undefined`](../null_and_undefined/README.md), [Symbols](../symbols/README.md)
- ch. 4 *Working with Reference Types*: 4.1 *Difference between Primitive Data Types and Reference Types*, from 4.1.1 *The Principle of Primitive Data Types* to 4.1.4 *Determining the Type of a Variable*; 4.2.10 *Using Symbols to Define Unique Object Properties*; 4.8.3 *Wrapper Objects for Primitive Data Types* → [Values and references](../values_and_references/README.md), [`typeof`](../the_typeof_operator/README.md), [Symbols](../symbols/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md)
- Its count of types and its `typeof` table leave out BigInt: see *Read with care*.

*Advanced JavaScript Unleashed: Master Advanced JavaScript Concepts like Prototypes, Symbols, Generators and More* — Yousaf Khan, edited by Zao Yang (Fullstack.io, 2024). Its chapters are not numbered.

- *What is JavaScript*, section *Stack overflow*: its last pages explain that the specification says nothing about where values are stored, so "primitives on the stack, objects on the heap" is not a rule of the language → [Values and references](../values_and_references/README.md)
- *Symbol*, with *Symbols and privacy* and *Adding a description to symbols* → [Symbols](../symbols/README.md)

### Older books, read with care

Each still explains its subject, and each says something about this chapter that no longer runs as written; the *Read with care* section below runs it.

*JavaScript: The Good Parts* — Douglas Crockford (O'Reilly, 2008, 1st edition).

- ch. 2 *Grammar*: *Numbers* → [BigInt](../bigint/README.md)
- ch. 3 *Objects*: the chapter's opening paragraphs, and *Reference* → [Eight types](../eight_types/README.md), [Values and references](../values_and_references/README.md)
- app. A *Awful Parts*: *typeof*, *Falsy Values* → [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md)
- app. B *Bad Parts*: *Bitwise Operators*, *Typed Wrappers*, *void* → [BigInt](../bigint/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md), [`null` and `undefined`](../null_and_undefined/README.md)

*Professional JavaScript for Web Developers* — Nicholas C. Zakas (Wrox, 2012, 3rd edition).

- ch. 3 *Language Basics*: *Data Types*, with *The typeof Operator*, *The Undefined Type* and *The Null Type* → [Eight types](../eight_types/README.md), [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md)
- ch. 4 *Variables, Scope, and Memory*: *Primitive and Reference Values*, with *Dynamic Properties*, *Copying Values*, *Argument Passing* and *Determining Type* → [Values and references](../values_and_references/README.md)
- ch. 5 *Reference Types*: *Primitive Wrapper Types*, with *The Boolean Type*, *The Number Type* and *The String Type* → [Primitives and wrappers](../primitives_and_wrapper_objects/README.md)

*Object-Oriented JavaScript* — Stoyan Stefanov (Packt, 2008).

- ch. 2 *Primitive Data Types, Arrays, Loops, and Conditions*: *Primitive Data Types*, with *Finding out the Value Type—the typeof Operator* and *Undefined and null*; *Primitive Data Types Recap* → [Eight types](../eight_types/README.md), [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md)

*JavaScript Step by Step* — Steve Suehring (Microsoft Press, 2013, 3rd edition).

- ch. 4 *Working with variables and data types*: *Data types in JavaScript*, with *Null* and *Undefined*; *References and garbage collection* → [Eight types](../eight_types/README.md), [`null` and `undefined`](../null_and_undefined/README.md), [Values and references](../values_and_references/README.md)

*Head First JavaScript* — Michael Morrison (O'Reilly, 2007, 1st edition).

- ch. 2 *storing data: Everything Has Its Place*: *Scripts think in data types*, *Variables start out without a value* → [Eight types](../eight_types/README.md), [`null` and `undefined`](../null_and_undefined/README.md)

*Learning JavaScript: A Hands-On Guide to the Fundamentals of Modern JavaScript* — Tim Wright (Addison-Wesley, 2012).

- ch. 5 *Storing Data in JavaScript*: *Variables*, with *Strings*, *Numbers* and *Boolean* → [Eight types](../eight_types/README.md)

*ECMAScript Language Specification* (ECMA-262) — Ecma International (2009, 5th edition).

- clause 8 *Types*: 8.1 *The Undefined Type* to 8.6 *The Object Type* → [Eight types](../eight_types/README.md)
- 11.4.3 *The typeof Operator* → [`typeof`](../the_typeof_operator/README.md)
- 15.1.1 *Value Properties of the Global Object*: in this edition `NaN`, `Infinity` and `undefined` became read-only; the 3rd edition of 1999 gave them only the attributes DontEnum and DontDelete → [`null` and `undefined`](../null_and_undefined/README.md)
- Its list of language types has six entries; today's list, with Symbol and BigInt, is linked under *Documentation*. Every edition, from the first of 1997, is on [Ecma's ECMA-262 page ↗](https://ecma-international.org/publications-and-standards/standards/ecma-262/).

### TypeScript books

*Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript* — Josh Goldberg (O'Reilly, 2022, 1st edition, third early release).

- ch. 2 *The Type System*: *What's in a Type?*, the seven primitives as TypeScript types → [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md)
- ch. 4 *Literals*: *Strict Null Checking*, with *The Billion Dollar Mistake*, *Truthiness Narrowing* and *Implicit Union Type Truthiness* → [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md), [Truthiness narrowing](../../24_Narrowing/truthiness_narrowing/README.md)
- This early release gets the direction of `strictNullChecks` backwards in one sentence and quotes an older wording of an error: see *Read with care*.

*TypeScript for Beginners: The Ultimate Guide* — Sufyan bin Uzayr (CRC Press, 2022, 1st edition).

- ch. 1 *TypeScript: Introduction to TypeScript*: *Basic TS Types*, with *Null and Undefined* and *Symbol* → [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md), [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md)
- ch. 2 *Key Concepts of TS*: *Symbols* → [Symbols](../symbols/README.md)
- Written for TypeScript 4.2: what it says about `null` by default no longer holds, as *Read with care* shows.

### Free online books

*The Modern JavaScript Tutorial* — Ilya Kantor, at javascript.info. In its part *The JavaScript language*:

- [Data types ↗](https://javascript.info/types) in *JavaScript Fundamentals*: the eight types, with sections from *Number* to *The typeof operator*
- [Object references and copying ↗](https://javascript.info/object-copy) and [Symbol type ↗](https://javascript.info/symbol) in *Objects: the basics*
- [Methods of primitives ↗](https://javascript.info/primitives-methods) in *Data types*: its section *A primitive as an object* is the wrapper story
- [BigInt ↗](https://javascript.info/bigint) in *Miscellaneous*

*You Don't Know JS Yet: Get Started* — Kyle Simpson (2nd edition, free to read on GitHub):

- [ch. 2 *Surveying JS* ↗](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md): *Values*, *Value Type Determination*
- [app. A *Exploring Further* ↗](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md): *Values vs. References*

*You Don't Know JS: Types & Grammar* — Kyle Simpson (1st edition, which O'Reilly published in 2014–2015 and which stays on GitHub, archived):

- [ch. 1 *Types* ↗](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md): *Built-in Types*; *Values as Types*, with *`undefined` vs "undeclared"* and *`typeof` Undeclared*
- [ch. 2 *Values* ↗](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md): *Special Values*, with *Undefined* and *`void` Operator*; *Value vs. Reference*
- [ch. 3 *Natives* ↗](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md): *Boxing Wrappers*, with *Object Wrapper Gotchas*; *Unboxing*; *`Symbol(..)`*
- Written before BigInt: its count of types and one sentence about `undefined` are run under *Read with care*.

## Documentation

### The specification

Links go to the current draft of ECMA-262 at tc39.es. Section numbers change between editions, so the sections are named.

- [ECMAScript Language Types ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types) — the eight: Undefined, Null, Boolean, String, Symbol, Number, BigInt and Object; then [The Undefined Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-undefined-type), [The Null Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-null-type), [The Symbol Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type), [The BigInt Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-bigint-type) and [The Object Type ↗](https://tc39.es/ecma262/#sec-object-type)
- [The typeof Operator ↗](https://tc39.es/ecma262/#sec-typeof-operator) — the table of answers, `"object"` for `null` included
- [The void Operator ↗](https://tc39.es/ecma262/#sec-void-operator) — evaluates its operand and returns `undefined`
- [ToObject ↗](https://tc39.es/ecma262/#sec-toobject) — wraps a primitive in its object, and throws a `TypeError` for `null` and `undefined`
- [PutValue ↗](https://tc39.es/ecma262/#sec-putvalue) — the assignment step that throws in strict code when a property cannot be set
- [undefined ↗](https://tc39.es/ecma262/#sec-undefined) and [NaN ↗](https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-nan) — properties of the global object, neither writable nor configurable
- [Symbol Objects ↗](https://tc39.es/ecma262/#sec-symbol-objects) and [BigInt Objects ↗](https://tc39.es/ecma262/#sec-bigint-objects) — the two functions and their methods
- [The Strict Mode of ECMAScript ↗](https://tc39.es/ecma262/#sec-strict-mode-of-ecmascript) — Annex C, the restrictions of strict code, among them the `TypeError` for assigning to a read-only property

### MDN

- [JavaScript data types and data structures ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures) — every type on one page, from *Primitive values* to *Symbol type*
- [Primitive ↗](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) — the glossary entry
- [typeof ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) — its section [typeof null ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) links the history and the rejected fix
- [null ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null), [undefined ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and [void ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)
- [String primitives and String objects ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects) — the wrapper, on the `String` page
- [Symbol ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) and [BigInt ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Comparing objects ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#comparing_objects) — objects compare by reference, in the guide's *Working with objects*
- [Strict mode ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) — its sections [setting properties on primitive values ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#setting_properties_on_primitive_values) and [failing to assign to object properties ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) describe two of the programs under *Read with care*

### TypeScript

- [Everyday Types ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — [The primitives: string, number, and boolean ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean), [null and undefined ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined) with `strictNullChecks` off and on, and [Less Common Primitives ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#less-common-primitives), `bigint` and `symbol`
- [typeof type guards ↗](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards) — in the handbook's *Narrowing*
- [Do's and Don'ts ↗](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#number-string-boolean-symbol-and-object) — never the types `Number`, `String`, `Boolean`, `Symbol` or `Object`, which are the wrapper objects; use the lowercase ones
- [Symbols ↗](https://www.typescriptlang.org/docs/handbook/symbols.html) — with [`unique symbol` ↗](https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol)
- The TSConfig reference: [strict ↗](https://www.typescriptlang.org/tsconfig/#strict), whose default it gives as `true`, and [strictNullChecks ↗](https://www.typescriptlang.org/tsconfig/#strictNullChecks), on whenever `strict` is
- [Basic Types ↗](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined) — a handbook page marked deprecated but still online; its *Null and Undefined* section describes the old default, as *Read with care* shows

### V8 and TC39

- [BigInt: arbitrary-precision integers in JavaScript ↗](https://v8.dev/features/bigint) — V8's explainer, 1 May 2018
- [Symbol.prototype.description ↗](https://v8.dev/features/symbol-description) — V8's explainer, 25 June 2019
- [tc39/proposal-bigint ↗](https://github.com/tc39/proposal-bigint) — the proposal; its sections *Gotchas & Exceptions* and *Design Goals, Or Why Is This Like This?* say why BigInt and Number do not mix

## Articles and papers

- Axel Rauschmayer, [The history of “typeof null” ↗](https://web.archive.org/web/20250130010953/https://2ality.com/2013/10/typeof-null.html) — 2ality, 29 October 2013: the type tags of the first engine, and why the answer can no longer change. The blog's own address, the one MDN links, returned 404 on the day checked: the author has taken his blog and his online books offline for now, so the link is the Internet Archive's copy of 30 January 2025.
- Axel Rauschmayer, [Categorizing values in JavaScript ↗](https://web.archive.org/web/20251230092825/https://2ality.com/2013/01/categorizing-values.html) — 2ality, 20 January 2013, archived: `typeof`, `instanceof`, `[[Class]]` and `Array.isArray` side by side. It was written before ES2015, and its list of primitives has five entries.
- [harmony:typeof_null ↗](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null) — the old ES wiki page, archived, of the proposal to make `typeof null` return `"null"`. It is marked rejected: V8 implemented it, and it broke existing sites.
- Allen Wirfs-Brock and Brendan Eich, [JavaScript: The First 20 Years ↗](https://zenodo.org/records/4960086) — Proceedings of the ACM on Programming Languages, vol. 4, HOPL, June 2020; the link is the authors' corrected version of March 2021. §3.2 *Data Types and Expressions* gives Eich's account of `typeof null`: the first engine stored `null` with the same type tag as objects. §20.1.1 *Strict Mode* lists the errors strict mode added, among them assigning to a read-only property, which older JavaScript ignored.
- Igor Sheludko and Santiago Aboy Solanes, [Pointer Compression in V8 ↗](https://v8.dev/blog/pointer-compression#value-tagging-in-v8) — V8 blog, 30 March 2020. Its section *Value tagging in V8* says V8 allocates numbers and strings on its heap as it does objects, and keeps only small integers inside the pointer itself.
- [Reference Vs Value - Most People Don't Understand This ↗](https://blog.webdevsimplified.com/2021-03/js-reference-vs-value/) — Web Dev Simplified, 29 March 2021: the written companion of the video below.

## Videos

Titles as YouTube gives them, checked through its oEmbed endpoint; dates and lengths from each video's page; timestamps from each video's own chapter list.

- [Why is typeof null "object"? | Netscape Source Code Dive ↗](https://www.youtube.com/watch?v=HAprhbkZGlM) — Syntax, 28 November 2024, 15:49. The whole video is on the topic: it reads the Netscape C source of 1998 to find where the answer comes from, and why it will probably never change.
- [Reference Vs Value In JavaScript ↗](https://www.youtube.com/watch?v=-hBJz2PPIVE) — Web Dev Simplified, 20 August 2019, 15:11. The whole video: values and references drawn with memory addresses, then passed to functions.
- [JavaScript bigint // The missing guide ↗](https://www.youtube.com/watch?v=1_M-btTiaVI) — basarat, 29 January 2024, 5:36. From 0:00, *JavaScript bigint Basics*; mixing with numbers from [1:53 ↗](https://www.youtube.com/watch?v=1_M-btTiaVI&t=113s), *BigInt and Number Interop*; then 3:26 *bigint Mathematical Operators* and 4:10 *JavaScript BigInt Comparison Operators*.
- [Symbols - Javascript In Depth ↗](https://www.youtube.com/watch?v=E5Bblr-SFbA) — Tech with Nader, 8 November 2022, 28:54. Symbols start at [1:53 ↗](https://www.youtube.com/watch?v=E5Bblr-SFbA&t=113s), *What are Symbols?*, after a recap of the primitives at 0:45; *Symbols as Object Keys* at 15:11 and *Well-known Symbols* at 20:14.

## Read with care

Claims from the sources above that do not survive a run today. Each claim is paraphrased from the source named, then a program shows what Node 24 or TypeScript 7 does; its output is the recorded answer key that CI checks. Several of these sources were right for the language of their year, and the programs show where the language has moved since.

### "Five primitive types", or six types, or seven — there are eight

- *JavaScript: The Good Parts*, ch. 3 *Objects*: the simple types are numbers, strings, booleans, `null` and `undefined`, and every other value is an object.
- *Object-Oriented JavaScript*, ch. 2 *Primitive Data Types Recap*: five primitive types; its `typeof` section lists six answers.
- *Professional JavaScript for Web Developers*, ch. 3 *Data Types*: five primitive types and Object, six in all, and six `typeof` answers.
- *JavaScript Step by Step*, ch. 4 *Data types in JavaScript*: six data types.
- ECMA-262, 5th edition, clause 8 *Types*: six language types.
- *JavaScript: The Comprehensive Guide* (2022), 3.2 *Using the Different Data Types*: six data types, before 3.2.7 adds symbols; the `typeof` table in 4.1.4 has no row for `"bigint"`.
- *You Don't Know JS: Types & Grammar*, ch. 1 *Built-in Types*: seven types and seven `typeof` answers.
- *JavaScript: The Definitive Guide*, §3.1: any value that is not a number, string, boolean, symbol, `null` or `undefined` is an object, which leaves out BigInt.
- *Head First JavaScript*, ch. 2 *Scripts think in data types*, and *Learning JavaScript*, ch. 5 *Storing Data in JavaScript*: three basic data types for a beginner, text (or strings), numbers and booleans.
- Rauschmayer, *Categorizing values in JavaScript* (2013): five primitives.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_eight_types_js -->
*[`values_resources_eight_types_js.js`](examples/values_resources_eight_types_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// Older books count five, six or seven types. Ask the language instead: one
// value of each kind, what typeof answers, and whether the value is a
// primitive. Object(value) returns an object unchanged but wraps a primitive
// (and makes a new empty object for null and undefined), so the two differ
// exactly when the value is a primitive.
const samples = [
  ["undefined", undefined],
  ["null", null],
  ["true", true],
  ["42", 42],
  ['"SKU-1"', "SKU-1"],
  ['Symbol("id")', Symbol("id")],
  ["42n", 42n],
  ["{ price: 5 }", { price: 5 }],
  ["() => 5", () => 5],
];

console.log(`${"value".padEnd(15)}${"typeof".padEnd(11)}primitive`);
for (const [label, value] of samples) {
  const primitive = Object(value) !== value;
  console.log(`${label.padEnd(15)}${(typeof value).padEnd(11)}${primitive ? "yes" : "no"}`);
}

const primitives = samples.filter(([, value]) => Object(value) !== value);
const answers = new Set(samples.map(([, value]) => typeof value));
console.log(`primitives in this table: ${primitives.length}`);
console.log(`different typeof answers: ${answers.size}`);
```
<!-- /source -->

</details>

<!-- output:values_resources_eight_types_js -->
*Verified output of [`values_resources_eight_types_js.js`](examples/values_resources_eight_types_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
value          typeof     primitive
undefined      undefined  yes
null           object     yes
true           boolean    yes
42             number     yes
"SKU-1"        string     yes
Symbol("id")   symbol     yes
42n            bigint     yes
{ price: 5 }   object     no
() => 5        function   no
primitives in this table: 7
different typeof answers: 8
```
<!-- /output -->

Seven rows are primitives and two are objects. `Symbol("id")` and `42n` are primitives that the older lists do not have: symbols came in ES2015 and BigInt in ES2020 (*The Definitive Guide*, §3.1 and §3.2.5). `typeof` has eight different answers, but they are not the eight types: `null` answers `"object"`, and a function, which is an object, answers `"function"`. The specification's list is [ECMAScript Language Types ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types); the lessons are [Eight types](../eight_types/README.md) and [`typeof`](../the_typeof_operator/README.md).

### "A single number type" — BigInt is a second, exact one

- *JavaScript: The Good Parts*, ch. 2 *Grammar*, *Numbers*: one number type, a 64-bit double, and no separate integer type.
- The same book, app. B *Bad Parts*, *Bitwise Operators*: JavaScript has no integers, only double-precision numbers.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_two_number_types_js -->
*[`values_resources_two_number_types_js.js`](examples/values_resources_two_number_types_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// "A single number type": since ES2020 there are two. A number is a double,
// exact for integers only up to 2 ** 53; a bigint is an exact integer of any
// size. Each pair of lines asks the same question of both.
const asNumber = 2 ** 64;
const asBigint = 2n ** 64n;

console.log(`typeof (2 ** 64):   ${typeof asNumber}`);
console.log(`typeof (2n ** 64n): ${typeof asBigint}`);
console.log(`2 ** 64   prints ${asNumber}`);
console.log(`2n ** 64n prints ${asBigint}`);
console.log(`2 ** 53 + 1 === 2 ** 53:      ${2 ** 53 + 1 === 2 ** 53}`);
console.log(`2n ** 53n + 1n === 2n ** 53n: ${2n ** 53n + 1n === 2n ** 53n}`);
console.log(`2 ** 40 | 0:    ${2 ** 40 | 0}`);
console.log(`2n ** 40n | 0n: ${2n ** 40n | 0n}`);
```
<!-- /source -->

</details>

<!-- output:values_resources_two_number_types_js -->
*Verified output of [`values_resources_two_number_types_js.js`](examples/values_resources_two_number_types_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
typeof (2 ** 64):   number
typeof (2n ** 64n): bigint
2 ** 64   prints 18446744073709552000
2n ** 64n prints 18446744073709551616
2 ** 53 + 1 === 2 ** 53:      true
2n ** 53n + 1n === 2n ** 53n: false
2 ** 40 | 0:    0
2n ** 40n | 0n: 1099511627776
```
<!-- /output -->

The first two lines are two different `typeof` answers. Printed, the number `2 ** 64` ends in `552000` and the bigint `2n ** 64n` in `551616`, which is the exact value of 2^64. Adding 1 to `2 ** 53` is lost as a number and kept as a bigint. `2 ** 40 | 0` is `0`, because `|` turns numbers into 32-bit integers first, while `2n ** 40n | 0n` keeps every bit ([MDN: bitwise OR ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR#description) describes both cases). What the book says about the number type itself still holds: see [Every number is a double](../../10_Numbers_and_Math/every_number_is_a_double/README.md), [Safe integers](../../10_Numbers_and_Math/safe_integers/README.md) and [Bitwise operators](../../10_Numbers_and_Math/bitwise_operators/README.md). The lesson on the second type is [BigInt](../bigint/README.md).

### "`undefined` and `NaN` can be changed" — read-only since ES5

- *JavaScript: The Good Parts*, app. A *Awful Parts*, *Falsy Values*: `undefined` and `NaN` are global variables whose values you can change.
- *You Don't Know JS: Types & Grammar*, ch. 2, *Undefined*: code that is not strict can assign a value to the global `undefined`.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_undefined_read_only_js -->
*[`values_resources_undefined_read_only_js.js`](examples/values_resources_undefined_read_only_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// "undefined and NaN are global variables you can change": since ES5 they are
// read-only properties of the global object.
for (const name of ["undefined", "NaN"]) {
  const { writable, configurable } = Object.getOwnPropertyDescriptor(globalThis, name);
  console.log(`${name.padEnd(10)}writable: ${writable}, configurable: ${configurable}`);
}

// Sloppy-mode code, like a script of 2008: the assignments run, and change nothing.
const oldScript = new Function(`
  undefined = "changed";
  NaN = 0;
  return typeof undefined + " " + String(NaN);
`);
console.log(`sloppy code, after assigning: ${oldScript()}`);

// Strict code (this file is an ES module, so it is strict): the same assignment throws.
try {
  undefined = "changed";
} catch (error) {
  console.log(`strict code: ${error.name}: ${error.message}`);
}
```
<!-- /source -->

</details>

<!-- output:values_resources_undefined_read_only_js -->
*Verified output of [`values_resources_undefined_read_only_js.js`](examples/values_resources_undefined_read_only_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
undefined writable: false, configurable: false
NaN       writable: false, configurable: false
sloppy code, after assigning: undefined NaN
strict code: TypeError: Cannot assign to read only property 'undefined' of object '#<Object>'
```
<!-- /output -->

Neither property is writable or configurable (the first two lines). The ES5 standard made them so in 15.1.1, where the 3rd edition had given them only DontEnum and DontDelete, and the current specification keeps it for [undefined ↗](https://tc39.es/ecma262/#sec-undefined) and [NaN ↗](https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-nan). In sloppy code the assignments run without an error and change nothing: `undefined` is still `undefined` and `NaN` still `NaN`. In strict code, which includes every ES module, the same assignment throws. MDN's [strict mode ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) page has the same example, and *JavaScript: The First 20 Years* (§20.1.1) lists it among the errors strict mode added. Whether a function may declare a variable of its own named `undefined` is a different question, taken up in [`null` and `undefined`](../null_and_undefined/README.md).

### "Engines disagree about `typeof /a/`" — V8 answers `"object"`, as the spec requires

- *JavaScript: The Good Parts*, app. A *Awful Parts*, *typeof*: some implementations answer `"object"` for a regular expression and others `"function"`.
- *Professional JavaScript for Web Developers*, ch. 3, *The typeof Operator*, names the browsers that answered `"function"`: Safari up to version 5 and Chrome up to version 7.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_typeof_regexp_js -->
*[`values_resources_typeof_regexp_js.js`](examples/values_resources_typeof_regexp_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// "Engines disagree about typeof /a/": some once answered "function", because
// their regular expressions could be called like functions. None can be now,
// and typeof answers "object" for every object that cannot be called.
const skuPattern = /^SKU-\d+$/;

console.log(`typeof skuPattern:        ${typeof skuPattern}`);
console.log(`typeof new RegExp("SKU"): ${typeof new RegExp("SKU")}`);
try {
  skuPattern("SKU-1");
} catch (error) {
  console.log(`calling it: ${error.name}: ${error.message}`);
}
```
<!-- /source -->

</details>

<!-- output:values_resources_typeof_regexp_js -->
*Verified output of [`values_resources_typeof_regexp_js.js`](examples/values_resources_typeof_regexp_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
typeof skuPattern:        object
typeof new RegExp("SKU"): object
calling it: TypeError: skuPattern is not a function
```
<!-- /output -->

A literal and a `RegExp` object both answer `"object"`, and calling one throws. The ES5 standard's table in 11.4.3 already kept `"function"` for objects that can be called, and the current [typeof table ↗](https://tc39.es/ecma262/#sec-typeof-operator) does the same, so a regular expression, which cannot be called, answers `"object"`. Node 24 and Node 25 print the same three lines. See [`typeof`](../the_typeof_operator/README.md) and [Regex literals and flags](../../15_Regular_Expressions/regex_literals_and_flags/README.md).

### "Setting a property on a string is silently ignored" — strict code throws

- *Eloquent JavaScript*, ch. 4, *Strings and Their Properties*: you can try to add a property to a string; nothing complains, and nothing is stored.
- *Professional JavaScript for Web Developers*, ch. 4, *Dynamic Properties*: adding a property to a primitive value causes no error.
- Rauschmayer, *Categorizing values in JavaScript* (2013), shows the same in a console.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_property_on_primitive_js -->
*[`values_resources_property_on_primitive_js.js`](examples/values_resources_property_on_primitive_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// "Setting a property on a string is ignored without an error": true in the
// sloppy-mode scripts those books were written for. Strict code throws, and
// every ES module (this file included) is strict.
const oldScript = new Function(`
  const sku = "SKU-1";
  sku.discount = 5;
  return String(sku.discount);
`);
console.log(`sloppy code: no error, sku.discount is ${oldScript()}`);

const sku = "SKU-1";
try {
  sku.discount = 5;
  console.log("module code: no error");
} catch (error) {
  console.log(`module code: ${error.name}: ${error.message}`);
}
```
<!-- /source -->

</details>

<!-- output:values_resources_property_on_primitive_js -->
*Verified output of [`values_resources_property_on_primitive_js.js`](examples/values_resources_property_on_primitive_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
sloppy code: no error, sku.discount is undefined
module code: TypeError: Cannot create property 'discount' on string 'SKU-1'
```
<!-- /output -->

The first line is the world those sources describe: sloppy code, no error, and no property afterwards. The second line comes from an ES module, and [every module is strict ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_for_modules): there the assignment throws a `TypeError`, because the property cannot be set on a primitive and [PutValue ↗](https://tc39.es/ecma262/#sec-putvalue) throws in strict code when a set fails. MDN describes the rule under [setting properties on primitive values ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#setting_properties_on_primitive_values). See [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) and [Primitives and wrappers](../primitives_and_wrapper_objects/README.md).

### "A property's value cannot be `undefined`" — it can

- *JavaScript: The Good Parts*, ch. 3 *Objects*: a property's value can be any JavaScript value except `undefined`.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_property_holds_undefined_js -->
*[`values_resources_property_holds_undefined_js.js`](examples/values_resources_property_holds_undefined_js.js) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```javascript
// "A property's value can be anything except undefined": a property can hold
// undefined, and it is then still there, unlike a property that was never set.
const order = { id: 1001, coupon: undefined };

console.log(`order.coupon:                   ${String(order.coupon)}`);
console.log(`"coupon" in order:              ${"coupon" in order}`);
console.log(`Object.hasOwn(order, "coupon"): ${Object.hasOwn(order, "coupon")}`);
console.log(`Object.keys(order):             ${JSON.stringify(Object.keys(order))}`);
console.log(`order.gift:                     ${String(order.gift)}`);
console.log(`"gift" in order:                ${"gift" in order}`);
```
<!-- /source -->

</details>

<!-- output:values_resources_property_holds_undefined_js -->
*Verified output of [`values_resources_property_holds_undefined_js.js`](examples/values_resources_property_holds_undefined_js.js) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
order.coupon:                   undefined
"coupon" in order:              true
Object.hasOwn(order, "coupon"): true
Object.keys(order):             ["id","coupon"]
order.gift:                     undefined
"gift" in order:                false
```
<!-- /output -->

`coupon` holds `undefined` and is still a property: `in`, `Object.hasOwn` and `Object.keys` all find it. `gift` was never set: reading it gives `undefined` as well, but `in` answers `false`. Reading a property cannot tell "holds `undefined`" from "missing"; `in` and `Object.hasOwn` can. See [`null` and `undefined`](../null_and_undefined/README.md).

### TypeScript: "`null` fits every type by default" — not in TypeScript 7

- *TypeScript for Beginners*, ch. 1, *Null and Undefined*: `null` and `undefined` are subtypes of every other type by default, so a variable of type `number` can hold `null`.
- The deprecated handbook page [Basic Types ↗](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined), still online, says the same.
- *Learning TypeScript* (third early release), ch. 4, *Strict Null Checking*: turning `strictNullChecks` on adds `| null | undefined` to every type, which is the reverse of what the option does.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_strict_by_default_sh -->
*[`values_resources_strict_by_default_sh.sh`](examples/values_resources_strict_by_default_sh.sh) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```bash
# TypeScript books of 2022 say that null and undefined can be assigned to a
# variable of any type unless strictNullChecks is turned on. TypeScript 7 turns
# it on by default. Check one line with no tsconfig.json: first with tsc's
# defaults, then with the check turned off.
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cd "$work" || exit 1
printf 'const discountCode: string = null;\nexport {};\n' > order.ts

echo '$ tsc --version'
tsc --version
echo '$ cat order.ts'
cat order.ts
echo '$ tsc --noEmit order.ts'
tsc --noEmit order.ts
echo "exit status: $?"
echo '$ tsc --noEmit --strictNullChecks false order.ts'
tsc --noEmit --strictNullChecks false order.ts
echo "exit status: $?"
```
<!-- /source -->

</details>

<!-- output:values_resources_strict_by_default_sh -->
*Verified output of [`values_resources_strict_by_default_sh.sh`](examples/values_resources_strict_by_default_sh.sh) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
$ tsc --version
Version 7.0.2
$ cat order.ts
const discountCode: string = null;
export {};
$ tsc --noEmit order.ts
order.ts(1,7): error TS2322: Type 'null' is not assignable to type 'string'.
exit status: 1
$ tsc --noEmit --strictNullChecks false order.ts
exit status: 0
```
<!-- /output -->

With no `tsconfig.json` at all, `tsc` 7.0.2 refuses `null` for a `string` and exits with status 1, because its defaults have `strict` on and `strict` turns `strictNullChecks` on: the TSConfig reference gives [strict ↗](https://www.typescriptlang.org/tsconfig/#strict) a default of `true` and [strictNullChecks ↗](https://www.typescriptlang.org/tsconfig/#strictNullChecks) the default `true` if `strict` is. Only with the check turned off does the line pass, with exit status 0: it is turning the check *off* that lets `null` into every type, as the handbook's [null and undefined ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined) section says of any type. See [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) and [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md).

### TypeScript: diagnostics as the books give them — one reworded, one wrong

- *Learning TypeScript* (third early release), ch. 4, *Strict Null Checking*: quotes the error for a value that may be `undefined` as `Object is possibly 'undefined'.`
- *TypeScript for Beginners*, ch. 1, *Null and Undefined*: under `strictNullChecks`, `null` and `undefined` can still be assigned to a variable of type `void`.

<details markdown="1">
<summary>The program</summary>

<!-- source:values_resources_possibly_undefined_tserror -->
*[`values_resources_possibly_undefined_tserror.ts`](examples/values_resources_possibly_undefined_tserror.ts) in full — pasted here by `tools/run_examples.py` from the file CI runs.*

```typescript
// Two diagnostics that TypeScript books of 2022 describe differently. One book
// quotes the error for a value that may be undefined as "Object is possibly
// 'undefined'"; tsc now names the variable. The other says that with
// strictNullChecks on, null may still be assigned to a variable of type void.
function couponLabel(coupon: string | undefined): string {
  return coupon.toUpperCase();
}

const noResult: void = null;
const emptyResult: void = undefined;

export { couponLabel, noResult, emptyResult };
```
<!-- /source -->

</details>

<!-- output:values_resources_possibly_undefined_tserror -->
*What `tsc` says about [`values_resources_possibly_undefined_tserror.ts`](examples/values_resources_possibly_undefined_tserror.ts) — regenerated by `tools/run_examples.py`, never hand-typed.*

```text
values_resources_possibly_undefined_tserror.ts:6:10 - error TS18048: 'coupon' is possibly 'undefined'.

6   return coupon.toUpperCase();
           ~~~~~~

values_resources_possibly_undefined_tserror.ts:9:7 - error TS2322: Type 'null' is not assignable to type 'void'.

9 const noResult: void = null;
        ~~~~~~~~


Found 2 errors in the same file, starting at: values_resources_possibly_undefined_tserror.ts:6
```
<!-- /output -->

`tsc` 7 reports TS18048 and names the variable, `'coupon' is possibly 'undefined'`: search for that wording, not the book's. `null` is refused for `void` (TS2322 on line 9), while `undefined` is accepted: line 10 has no diagnostic. The lessons are [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md) and [Narrowing](../../24_Narrowing/narrowing_by_control_flow/README.md), and the chapter's [errors page](../values_and_types_errors/README.md) collects the messages a learner meets.

## See also

- [Eight types](../eight_types/README.md), [`typeof`](../the_typeof_operator/README.md), [`null` and `undefined`](../null_and_undefined/README.md), [Primitives and wrappers](../primitives_and_wrapper_objects/README.md), [Symbols](../symbols/README.md), [BigInt](../bigint/README.md) and [Values and references](../values_and_references/README.md) — the chapter's lessons, which the entries above point to
- [Errors around values and types](../values_and_types_errors/README.md) — the messages Node and `tsc` print for this chapter's mistakes, each with its fix
- [Lints around values and types](../values_and_types_lints/README.md) — the ESLint rules and `tsc` checks that catch them first
- [Books](../../32_Resources/books/README.md) — every book in the collection, mapped to the whole library
- [Documentation](../../32_Resources/documentation/README.md) — the references all the pages cite
- [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md) — which edition added symbols, BigInt and the rest, for dating an older book
