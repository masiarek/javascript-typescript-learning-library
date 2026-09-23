# Books — the JavaScript and TypeScript shelf, chapter by chapter

**Level:** 101 · for choosing what to read beside a page

**One line:** Thirty books and the ES5 standard, each mapped by chapter name to the pages here that cover the same ground; the older ones say what has changed since they were written.

These are the JavaScript and TypeScript books on the shelf beside this library, each mapped to the chapters here that cover the same ground. The mappings were made from each book's own table of contents. A lesson cites a book by title and chapter name, for example *Eloquent JavaScript*, ch. 11 *Asynchronous Programming*, because chapter numbers move between editions; the numbers on this page belong to the edition named in each entry. Each entry gives the publisher, the year the edition was first released (the copyright year when the book gives no release date), and the edition where the book states one, then one sentence on what the book is best for. Books about frameworks, services and other languages outside this library are listed at the end, by title and author only. Checked 2026-09-22.

## JavaScript, the language

*JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language* — David Flanagan (O'Reilly, 2020, 7th edition). Best for checking how any part of the language or its standard library behaves: it takes ES5 as the baseline, covers everything through ES2020, and ends with chapters on browsers, Node and tools.

- ch. 1 *Introduction to JavaScript* → [Running JavaScript](../../01_Running_JavaScript/README.md)
- ch. 2 *Lexical Structure* → [Automatic semicolon insertion](../../01_Running_JavaScript/semicolons_and_asi/README.md), [Normalization](../../09_Strings_and_Unicode/normalization/README.md)
- ch. 3 *Types, Values, and Variables* → [Values and types](../../02_Values_and_Types/README.md), [Equality and coercion](../../03_Equality_and_Coercion/README.md), [Variables and scope](../../04_Variables_and_Scope/README.md), [Numbers and math](../../10_Numbers_and_Math/README.md)
- ch. 4 *Expressions and Operators* → [Equality and coercion](../../03_Equality_and_Coercion/README.md), [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md), [Bitwise operators](../../10_Numbers_and_Math/bitwise_operators/README.md)
- ch. 5 *Statements* → [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md), [Strict mode](../../01_Running_JavaScript/strict_mode/README.md)
- ch. 6 *Objects* → [Objects](../../06_Objects/README.md)
- ch. 7 *Arrays* → [Arrays and collections](../../08_Arrays_and_Collections/README.md), [Holes](../../08_Arrays_and_Collections/holes_and_sparse_arrays/README.md)
- ch. 8 *Functions* → [Functions](../../05_Functions/README.md), [Closures](../../04_Variables_and_Scope/closures/README.md)
- ch. 9 *Classes* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 10 *Modules* → [Modules](../../14_Modules/README.md)
- ch. 11 *The JavaScript Standard Library* → [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md), [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md), [Regular expressions](../../15_Regular_Expressions/README.md), [Dates and time](../../16_Dates_and_Time/README.md), [Errors](../../12_Errors/README.md), [JSON](../../06_Objects/json/README.md), [Timers](../../13_Async_and_the_Event_Loop/timers/README.md)
- ch. 12 *Iterators and Generators* → [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md), [Generators](../../11_Control_Flow_and_Iteration/generators/README.md)
- ch. 13 *Asynchronous JavaScript* → [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md), [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md)
- ch. 14 *Metaprogramming* → [Property descriptors](../../06_Objects/property_descriptors/README.md), [Metaprogramming](../../17_Metaprogramming/README.md)
- ch. 15 *JavaScript in Web Browsers* → [The browser](../../21_The_Browser/README.md), [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- ch. 16 *Server-Side JavaScript with Node* → [The Node.js runtime](../../19_Node_Runtime/README.md), [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md), [Worker threads](../../20_Workers_and_Parallelism/worker_threads/README.md)
- ch. 17 *JavaScript Tools and Extensions* → [Tooling](../../31_Tooling/README.md)

*JavaScript: The New Toys* — T.J. Crowder (Wrox, 2020). Best for learning what ES2015 through ES2020 added, one feature at a time; chapters 2 to 18 each end with a section on the old habits the new feature replaces.

- ch. 1 *The New Toys in ES2015–ES2020, and Beyond* → [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md)
- ch. 2 *Block-Scoped Declarations: let and const* → [`var`, `let` and `const`](../../04_Variables_and_Scope/var_let_and_const/README.md), [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md), [`const` is not frozen](../../04_Variables_and_Scope/const_is_not_frozen/README.md), [Closures in loops](../../04_Variables_and_Scope/closures_in_loops/README.md)
- ch. 3 *New Function Features* → [Arrow functions](../../05_Functions/arrow_functions_and_this/README.md), [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md)
- ch. 4 *Classes* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 5 *New Object Features* → [Object literals](../../06_Objects/object_literals/README.md), [Symbols](../../02_Values_and_Types/symbols/README.md), [Property keys](../../06_Objects/property_keys/README.md), [`Object.is`, `NaN` and `-0`](../../03_Equality_and_Coercion/samevalue_and_samevaluezero/README.md)
- ch. 6 *Iterables, Iterators, for-of, Iterable Spread, Generators* → [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md), [Generators](../../11_Control_Flow_and_Iteration/generators/README.md)
- ch. 7 *Destructuring* → [Destructuring](../../04_Variables_and_Scope/destructuring/README.md)
- ch. 8 *Promises* → [Promises](../../13_Async_and_the_Event_Loop/promises/README.md), [`all`, `allSettled`, `race` and `any`](../../13_Async_and_the_Event_Loop/promise_combinators/README.md)
- ch. 9 *Asynchronous Functions, Iterators, and Generators* → [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md), [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md)
- ch. 10 *Templates, Tag Functions, and New String Features* → [Template literals](../../09_Strings_and_Unicode/template_literals/README.md), [Tagged templates](../../17_Metaprogramming/tagged_templates/README.md), [Code points](../../09_Strings_and_Unicode/code_points_and_iteration/README.md), [Normalization](../../09_Strings_and_Unicode/normalization/README.md)
- ch. 11 *New Array Features, Typed Arrays* → [Arrays and collections](../../08_Arrays_and_Collections/README.md), [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md)
- ch. 12 *Maps and Sets* → [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md), [`WeakMap` and `WeakSet`](../../08_Arrays_and_Collections/weakmap_and_weakset/README.md)
- ch. 13 *Modules* → [Modules](../../14_Modules/README.md)
- ch. 14 *Reflection—Reflect and Proxy* → [`Proxy` and `Reflect`](../../17_Metaprogramming/proxy_and_reflect/README.md)
- ch. 15 *Regular Expression Updates* → [Regular expressions](../../15_Regular_Expressions/README.md)
- ch. 16 *Shared Memory* → [`SharedArrayBuffer` and `Atomics`](../../20_Workers_and_Parallelism/sharedarraybuffer_and_atomics/README.md)
- ch. 17 *Miscellany* → [BigInt](../../02_Values_and_Types/bigint/README.md), [Safe integers](../../10_Numbers_and_Math/safe_integers/README.md), [`?.` and `??`](../../06_Objects/optional_chaining_and_nullish_coalescing/README.md), [The global object](../../04_Variables_and_Scope/the_global_object/README.md)
- ch. 18 *Upcoming Class Features* → [Private fields](../../07_Prototypes_and_Classes/private_fields/README.md), [Static members and static blocks](../../07_Prototypes_and_Classes/static_members/README.md)
- ch. 19 *A Look Ahead …* → [Dynamic `import()` and top-level `await`](../../14_Modules/dynamic_import_and_top_level_await/README.md), [`WeakRef` and `FinalizationRegistry`](../../18_Memory_and_Garbage_Collection/weakref_and_finalizationregistry/README.md)

*Eloquent JavaScript: A Modern Introduction to Programming* — Marijn Haverbeke (No Starch Press, 2019, 3rd edition). Best for a first pass through the language as a programmer learns it, with exercises at the end of most chapters and five project chapters (7, 12, 16, 19 and 21, not mapped here).

- ch. 1 *Values, Types, and Operators* → [Values and types](../../02_Values_and_Types/README.md), [Equality and coercion](../../03_Equality_and_Coercion/README.md)
- ch. 2 *Program Structure* → [Variables and scope](../../04_Variables_and_Scope/README.md), [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 3 *Functions* → [Functions](../../05_Functions/README.md), [Closures](../../04_Variables_and_Scope/closures/README.md), [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md)
- ch. 4 *Data Structures: Objects and Arrays* → [Objects](../../06_Objects/README.md), [Arrays and collections](../../08_Arrays_and_Collections/README.md), [Destructuring](../../04_Variables_and_Scope/destructuring/README.md), [JSON](../../06_Objects/json/README.md)
- ch. 5 *Higher-Order Functions* → [Higher-order functions](../../05_Functions/higher_order_functions/README.md), [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md), [Strings are UTF-16](../../09_Strings_and_Unicode/strings_are_utf16/README.md)
- ch. 6 *The Secret Life of Objects* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md), [Symbols](../../02_Values_and_Types/symbols/README.md), [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md), [Getters and setters](../../06_Objects/getters_and_setters/README.md)
- ch. 8 *Bugs and Errors* → [Errors](../../12_Errors/README.md), [Strict mode](../../01_Running_JavaScript/strict_mode/README.md)
- ch. 9 *Regular Expressions* → [Regular expressions](../../15_Regular_Expressions/README.md), [The `g` flag and `lastIndex`](../../15_Regular_Expressions/the_g_flag_and_lastindex/README.md)
- ch. 10 *Modules* → [Modules](../../14_Modules/README.md)
- ch. 11 *Asynchronous Programming* → [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md)
- chs. 13–15 *JavaScript and the Browser*, *The Document Object Model*, *Handling Events* → [The browser](../../21_The_Browser/README.md)
- ch. 18 *HTTP and Forms* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md), [Storage](../../21_The_Browser/web_storage_and_cookies/README.md)
- ch. 20 *Node.js* → [The Node.js runtime](../../19_Node_Runtime/README.md)
- ch. 22 *JavaScript and Performance* → [Memory and garbage collection](../../18_Memory_and_Garbage_Collection/README.md)

*JavaScript: The Comprehensive Guide* — Philip Ackermann (Rheinwerk Publishing, 2022, 1st edition). Best for a long, broad tutorial that runs from language basics through the DOM, web APIs, object-oriented and functional style to a chapter on Node; it is translated from the third German edition.

- ch. 1 *Basics and Introduction* → [Running JavaScript](../../01_Running_JavaScript/README.md)
- ch. 2 *Getting Started* → [Loading scripts](../../21_The_Browser/script_loading/README.md)
- ch. 3 *Language Core* → [Values and types](../../02_Values_and_Types/README.md), [Variables and scope](../../04_Variables_and_Scope/README.md), [Functions](../../05_Functions/README.md), [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md), [Errors](../../12_Errors/README.md)
- ch. 4 *Working with Reference Types* → [Values and references](../../02_Values_and_Types/values_and_references/README.md), [Objects](../../06_Objects/README.md), [Arrays and collections](../../08_Arrays_and_Collections/README.md), [Strings and Unicode](../../09_Strings_and_Unicode/README.md), [Regular expressions](../../15_Regular_Expressions/README.md)
- chs. 5–9 *Dynamically Changing Web Pages* to *Dynamically Reloading Contents of a Web Page* → [The browser](../../21_The_Browser/README.md), [JSON](../../06_Objects/json/README.md)
- ch. 12 *Using Modern Web APIs* → [Storage](../../21_The_Browser/web_storage_and_cookies/README.md), [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- ch. 13 *Object-Oriented Programming* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 14 *Functional Programming* → [Higher-order functions](../../05_Functions/higher_order_functions/README.md)
- ch. 15 *Correctly Structuring the Source Code* → [Modules](../../14_Modules/README.md)
- ch. 16 *Using Asynchronous Programming and Other Advanced Features* → [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md), [Generators](../../11_Control_Flow_and_Iteration/generators/README.md), [`Proxy` and `Reflect`](../../17_Metaprogramming/proxy_and_reflect/README.md)
- ch. 17 *Creating Server-Based Applications with Node.js* → [The Node.js runtime](../../19_Node_Runtime/README.md), [npm](../../31_Tooling/npm_and_package_json/README.md)
- ch. 21 *Establishing a Professional Development Process* → [Tooling](../../31_Tooling/README.md)
- Not mapped: ch. 10 (jQuery), ch. 11 (images and graphics), chs. 18–20 (mobile, desktop and microcontroller applications).

*Advanced JavaScript Unleashed: Master Advanced JavaScript Concepts like Prototypes, Symbols, Generators and More* — Yousaf Khan, edited by Zao Yang (Fullstack.io, 2024). Best for the parts of the language people most often get wrong — hoisting, coercion, closures, `this`, promises — taken one mechanism at a time. Its chapters are not numbered.

- *What is JavaScript* → [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md), [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md)
- *Hoisting* → [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md)
- *Scope* → [Variables and scope](../../04_Variables_and_Scope/README.md)
- *Coercion* → [Equality and coercion](../../03_Equality_and_Coercion/README.md), [ToPrimitive](../../03_Equality_and_Coercion/toprimitive/README.md)
- *Closures* → [Closures](../../04_Variables_and_Scope/closures/README.md), [Closures in loops](../../04_Variables_and_Scope/closures_in_loops/README.md)
- *Prototypes* → [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md)
- *'this' keyword* → [`this`](../../05_Functions/this_is_set_by_the_call/README.md), [Arrow functions](../../05_Functions/arrow_functions_and_this/README.md)
- *Symbol* → [Symbols](../../02_Values_and_Types/symbols/README.md), [Well-known symbols](../../17_Metaprogramming/well_known_symbols/README.md)
- *Asynchronous JavaScript* → [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md)
- *Iterators and Generators* → [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md), [Generators](../../11_Control_Flow_and_Iteration/generators/README.md), [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md)
- *Debugging JavaScript* → [Debugging Node](../../31_Tooling/debugging_node/README.md) (the book uses the browser's developer tools)

*Simplifying JavaScript: Writing Modern JavaScript with ES5, ES6, and Beyond* — Joe Morgan (Pragmatic Bookshelf, 2018, version P1.0). Best for replacing older idioms with ES2015 and later ones, in 51 short numbered tips.

- ch. 1 *Signal Intention with Variable Assignment* → [`var`, `let` and `const`](../../04_Variables_and_Scope/var_let_and_const/README.md), [Template literals](../../09_Strings_and_Unicode/template_literals/README.md)
- ch. 2 *Manage Data Collections with Arrays* → [Mutating and copying methods](../../08_Arrays_and_Collections/mutating_and_copying_methods/README.md)
- ch. 3 *Maximize Code Clarity with Special Collections* → [Copying objects](../../06_Objects/copying_objects/README.md), [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md)
- ch. 4 *Write Clear Conditionals* → [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md), [Short-circuit evaluation](../../11_Control_Flow_and_Iteration/short_circuit_evaluation/README.md)
- ch. 5 *Simplify Loops* → [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md), [`for...in` and `for...of`](../../11_Control_Flow_and_Iteration/for_in_and_for_of/README.md)
- ch. 6 *Clean Up Parameters and Return Statements* → [Parameters](../../05_Functions/parameters_defaults_and_rest/README.md), [Destructuring](../../04_Variables_and_Scope/destructuring/README.md)
- ch. 7 *Build Flexible Functions* → [Higher-order functions](../../05_Functions/higher_order_functions/README.md), [Arrow functions](../../05_Functions/arrow_functions_and_this/README.md)
- ch. 8 *Keep Interfaces Clear with Classes* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md), [Getters and setters](../../06_Objects/getters_and_setters/README.md), [Generators](../../11_Control_Flow_and_Iteration/generators/README.md), [`call`, `apply` and `bind`](../../05_Functions/call_apply_and_bind/README.md)
- ch. 9 *Access External Data* → [Promises](../../13_Async_and_the_Event_Loop/promises/README.md), [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md), [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md), [Storage](../../21_The_Browser/web_storage_and_cookies/README.md)
- ch. 10 *Gather Related Files with Component Architecture* → [`import` and `export`](../../14_Modules/import_and_export/README.md), [npm](../../31_Tooling/npm_and_package_json/README.md), [Bundlers and transpilers](../../31_Tooling/bundlers_and_transpilers/README.md)

*Structure and Interpretation of Computer Programs: JavaScript Edition* — Harold Abelson and Gerald Jay Sussman, adapted to JavaScript by Martin Henz and Tobias Wrigstad, with Julie Sussman (MIT Press, 2022, JavaScript edition). Best for the ideas underneath any language — functions as values, environments, state, streams, evaluators; it uses only a small part of JavaScript and warns readers not to learn the language from it.

- ch. 1 *Building Abstractions with Functions* → [Higher-order functions](../../05_Functions/higher_order_functions/README.md), [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md)
- ch. 3 *Modularity, Objects, and State* (its sections on local state, concurrency and streams) → [Closures](../../04_Variables_and_Scope/closures/README.md), [`SharedArrayBuffer` and `Atomics`](../../20_Workers_and_Parallelism/sharedarraybuffer_and_atomics/README.md), [Iterator helpers](../../11_Control_Flow_and_Iteration/iterator_helpers/README.md)
- ch. 5 *Computing with Register Machines* (its section on storage allocation and garbage collection) → [Memory and garbage collection](../../18_Memory_and_Garbage_Collection/README.md)
- Not mapped: ch. 2 *Building Abstractions with Data* and ch. 4 *Metalinguistic Abstraction*.

## TypeScript

*Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript* — Josh Goldberg (O'Reilly, 2022, 1st edition, third early release). Best for learning the type system in the order it builds on itself, from unions and narrowing to declaration files and `tsconfig`. This early release, of January 2022, has eleven chapters and none yet on generics; the finished book may number its chapters differently, so cite them by name.

- ch. 1 *From JavaScript to TypeScript* → [TypeScript basics](../../22_TypeScript_Basics/README.md)
- ch. 2 *The Type System* → [Annotations and inference](../../22_TypeScript_Basics/annotations_and_inference/README.md), [Structural typing](../../25_Type_Compatibility/structural_typing/README.md)
- ch. 3 *Unions and Narrowing* → [Union and intersection types](../../23_Everyday_Types/union_and_intersection_types/README.md), [Narrowing](../../24_Narrowing/README.md)
- ch. 4 *Literals* → [Primitive and literal types](../../23_Everyday_Types/primitive_and_literal_types/README.md), [`strictNullChecks`](../../23_Everyday_Types/null_and_undefined_in_types/README.md), [Truthiness narrowing](../../24_Narrowing/truthiness_narrowing/README.md)
- ch. 5 *Functions* → [Function types](../../23_Everyday_Types/function_types_and_overloads/README.md)
- ch. 6 *Arrays* → [Arrays and tuples](../../23_Everyday_Types/arrays_and_tuples/README.md)
- ch. 7 *Objects and Interfaces* → [Object types](../../23_Everyday_Types/object_types/README.md), [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md), [Type compatibility](../../25_Type_Compatibility/README.md)
- ch. 8 *Classes* → [Classes in TypeScript](../../28_Classes_in_TypeScript/README.md)
- ch. 9 *Type Modifiers* → [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md), [Type predicates](../../24_Narrowing/type_predicates_and_assertion_functions/README.md), [`keyof` and `typeof` in types](../../27_Type_Operators/keyof_and_typeof/README.md), [Type assertions](../../30_Where_Types_Lie/type_assertions_are_unchecked/README.md)
- ch. 10 *Declaration Files* → [Declaration files and module resolution](../../29_Declaration_Files_and_Module_Resolution/README.md)
- ch. 11 *Configuration Options* → [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md), [Module resolution](../../29_Declaration_Files_and_Module_Resolution/module_resolution/README.md)

*TypeScript for Beginners: The Ultimate Guide* — Sufyan bin Uzayr (CRC Press, 2022, 1st edition). Best for a quick survey of TypeScript's features up to version 4.2, including namespaces and declaration merging.

- ch. 1 *TypeScript: Introduction to TypeScript* → [TypeScript basics](../../22_TypeScript_Basics/README.md), [Everyday types](../../23_Everyday_Types/README.md), [Discriminated unions](../../24_Narrowing/discriminated_unions/README.md)
- ch. 2 *Key Concepts of TS* → [Classes in TypeScript](../../28_Classes_in_TypeScript/README.md), [Function types](../../23_Everyday_Types/function_types_and_overloads/README.md), [Type compatibility](../../25_Type_Compatibility/README.md), [Generics](../../26_Generics/README.md), [Enums](../../23_Everyday_Types/enums_and_alternatives/README.md)
- ch. 3 *Modules and Namespaces* → [Modules](../../14_Modules/README.md), [Module resolution](../../29_Declaration_Files_and_Module_Resolution/module_resolution/README.md)
- ch. 4 *TS Runtime* → [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md), [Deno and Bun](../../31_Tooling/deno_and_bun/README.md), [Declaration merging](../../29_Declaration_Files_and_Module_Resolution/declaration_merging_and_augmentation/README.md)
- Not mapped: ch. 5 *TypeScript Architecture* (MVC frameworks) and ch. 6 *Appraisal*.

*TypeScript Design Patterns: Boost your development efficiency by learning about design patterns in TypeScript* — Vilic Vane (Packt, 2016). Best for the classic object-oriented design patterns written out in TypeScript. Written in 2016 (it mentions TypeScript 2.1 and Node.js 6), it installs declaration files with the `typings` tool, which `@types` packages have since replaced.

- ch. 1 *Tools and Frameworks* → [Editor setup](../../31_Tooling/editor_setup/README.md), [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md)
- chs. 3–6 *Creational Design Patterns*, *Structural Design Patterns*, *Behavioral Design Patterns*, *Behavioral Design Patterns: Continuous* → [Classes in TypeScript](../../28_Classes_in_TypeScript/README.md), [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md) (the iterator pattern), [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) (the observer pattern)
- ch. 7 *Patterns and Architectures in JavaScript and TypeScript* → [Promises](../../13_Async_and_the_Event_Loop/promises/README.md), [Modules](../../14_Modules/README.md)
- ch. 8 *SOLID Principles* → [`abstract` and `implements`](../../28_Classes_in_TypeScript/abstract_classes_and_implements/README.md)
- ch. 9 *The Road to Enterprise Application* → [Tooling](../../31_Tooling/README.md)

*Advanced TypeScript Programming Projects: Build 9 different apps with TypeScript 3 and JavaScript frameworks such as Angular, React, and Vue* — Peter O'Hanlon (Packt, 2019). Best for its first chapter, a tour of TypeScript 3 features and `tsconfig`; the other nine chapters are projects, most of them built on Angular, React, Vue.js or ASP.NET Core, and fall outside this library.

- ch. 1 *Advanced TypeScript Features* → [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md), [Union and intersection types](../../23_Everyday_Types/union_and_intersection_types/README.md), [Type aliases and interfaces](../../23_Everyday_Types/type_aliases_and_interfaces/README.md), [Decorators](../../17_Metaprogramming/decorators/README.md), [Generics](../../26_Generics/README.md)

## Node.js

*Node.js: The Comprehensive Guide* — Sebastian Springer (Rheinwerk Publishing, 2022, 1st edition). Best for a wide survey of Node — modules, HTTP, the command line, child processes and workers, streams, files, npm, testing — alongside the Express and Nest frameworks; it is translated from the fourth German edition.

- chs. 1–2 *Basic Principles*, *Installation* → [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md)
- ch. 3 *Developing Your First Application* → [Running a file with Node](../../01_Running_JavaScript/running_a_file_with_node/README.md), [Debugging Node](../../31_Tooling/debugging_node/README.md)
- ch. 4 *Node.js Modules* → [Modules](../../14_Modules/README.md)
- ch. 5 *HTTP* → [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md)
- ch. 13 *Type-Safe Applications in Node.js* → [TypeScript basics](../../22_TypeScript_Basics/README.md), [Generics](../../26_Generics/README.md)
- ch. 15 *Node on the Command Line* → [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md), [stdin, stdout and pipes](../../19_Node_Runtime/stdin_stdout_and_pipes/README.md)
- ch. 16 *Asynchronous Programming* → [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md), [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md), [Worker threads](../../20_Workers_and_Parallelism/worker_threads/README.md)
- ch. 18 *Streams* → [Streams](../../19_Node_Runtime/streams_and_backpressure/README.md)
- ch. 19 *Working with Files* → [Files](../../19_Node_Runtime/reading_and_writing_files/README.md)
- ch. 21 *Package Manager* → [npm](../../31_Tooling/npm_and_package_json/README.md)
- ch. 22 *Quality Assurance* → [ESLint](../../31_Tooling/linting_with_eslint/README.md), [Prettier](../../31_Tooling/formatting_with_prettier/README.md)
- ch. 23 *Testing* → [The built-in test runner](../../19_Node_Runtime/the_built_in_test_runner/README.md) (the book uses `assert`, Jasmine and Jest)
- ch. 26 *Performance* → [Measuring memory](../../18_Memory_and_Garbage_Collection/measuring_memory_in_node/README.md)
- ch. 28 *Deno* → [Deno and Bun](../../31_Tooling/deno_and_bun/README.md)
- Not mapped: chs. 6–12, 14, 17, 20, 24, 25 and 27 (Express, template engines, databases, authentication, REST, GraphQL, real-time applications, Nest, RxJS, sockets, security, deployment and microservices).

*Distributed Systems with Node.js: Building Enterprise-Ready Backend Services* — Thomas Hunter II (O'Reilly, 2020, 1st edition). Best for running Node services in production; its first chapter explains the phases of the Node event loop, and most later chapters cover the infrastructure around Node rather than Node itself.

- ch. 1 *Why Distributed?* → [The event loop](../../13_Async_and_the_Event_Loop/the_event_loop/README.md), [One thread per agent](../../20_Workers_and_Parallelism/one_thread_per_agent/README.md)
- ch. 2 *Protocols* → [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md), [JSON](../../06_Objects/json/README.md)
- ch. 3 *Scaling* → [Workers and parallelism](../../20_Workers_and_Parallelism/README.md) (the cluster module)
- ch. 6 *Deployments* → [npm](../../31_Tooling/npm_and_package_json/README.md) (modules, packages and SemVer)
- ch. 8 *Resilience* → [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md), [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md)
- Not mapped: chs. 4, 5, 7, 9 and 10 (observability, containers, Kubernetes, Redis, security).

*Node.js 8 the Right Way: Practical, Server-Side JavaScript That Scales* — Jim R. Wilson (Pragmatic Bookshelf, 2018, version P1.0). Best for learning Node by building small programs — file-system tools, socket servers, ØMQ microservices, a REST service — written for Node 8.

- ch. 1 *Getting Started* → [Running a file with Node](../../01_Running_JavaScript/running_a_file_with_node/README.md)
- ch. 2 *Wrangling the File System* → [The event loop](../../13_Async_and_the_Event_Loop/the_event_loop/README.md), [Files](../../19_Node_Runtime/reading_and_writing_files/README.md), [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md), [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md)
- ch. 3 *Networking with Sockets* → [The Node.js runtime](../../19_Node_Runtime/README.md)
- ch. 4 *Connecting Robust Microservices* → [Workers and parallelism](../../20_Workers_and_Parallelism/README.md) (clustering Node processes)
- ch. 5 *Transforming Data and Testing Continuously* → [Debugging Node](../../31_Tooling/debugging_node/README.md)
- ch. 6 *Commanding Databases* → [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md), [JSON](../../06_Objects/json/README.md)
- ch. 7 *Developing RESTful Web Services* → [Promises](../../13_Async_and_the_Event_Loop/promises/README.md), [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md)
- ch. 8 *Creating a Beautiful User Experience* → [Bundlers and transpilers](../../31_Tooling/bundlers_and_transpilers/README.md), [TypeScript basics](../../22_TypeScript_Basics/README.md)
- Not mapped: ch. 9 *Fortifying Your Application* and the bonus chapter on Node-RED.

*Fullstack Node.js: The Complete Guide to Building Production Apps with Node.js* — David Guttman, edited by Nate Murray (Fullstack.io, 2019, prerelease revision 2). Best for its *Async* chapter, which sets callbacks, promises, `async`/`await`, event emitters and streams side by side; the later chapters build an Express API. Its chapters are not numbered.

- *Your First Node API* → [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md)
- *Async* → [Callbacks](../../13_Async_and_the_Event_Loop/callbacks/README.md), [Promises](../../13_Async_and_the_Event_Loop/promises/README.md), [`async` and `await`](../../13_Async_and_the_Event_Loop/async_and_await/README.md), [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md), [Streams](../../19_Node_Runtime/streams_and_backpressure/README.md)
- *Command Line Interfaces* → [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md)
- Not mapped: the four *A Complete Server* chapters (routing, persistence, authentication, deployment).

## Text, JSON and regular expressions

*Text Processing with JavaScript: Regular Expressions, Tools, and Techniques for Optimal Performance* — Faraz K. Kelhini (Pragmatic Bookshelf, 2023, version P1.0). Best for current, recipe-sized answers to text questions — `Intl.Segmenter`, `normalize`, `Intl` formatting and the `d`, `s`, `u` and `y` regex flags — in 73 numbered recipes across three parts.

- Part I *Text Processing with Built-in JavaScript Methods* → [String methods](../../09_Strings_and_Unicode/string_methods/README.md), [Graphemes](../../09_Strings_and_Unicode/graphemes_and_intl_segmenter/README.md), [Normalization](../../09_Strings_and_Unicode/normalization/README.md), [Rounding and formatting](../../10_Numbers_and_Math/rounding_and_formatting/README.md), [Formatting dates](../../16_Dates_and_Time/formatting_dates_with_intl/README.md)
- Part II *Text Processing with Regular Expressions* → [Regex literals and flags](../../15_Regular_Expressions/regex_literals_and_flags/README.md), [Named groups and replacements](../../15_Regular_Expressions/named_groups_and_replacements/README.md), [Lookbehind](../../15_Regular_Expressions/lookbehind_in_javascript/README.md), [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md)
- Part III *Mastering Text Processing in JavaScript* → [`RegExp.escape`](../../15_Regular_Expressions/regexp_escape/README.md) (Recipe 66 escapes by hand; ES2025 added the built-in)
- app. A1 *What Is Unicode?* → [Strings are UTF-16](../../09_Strings_and_Unicode/strings_are_utf16/README.md)
- app. A2 *Implementing Regex in JavaScript* → [`match`, `matchAll` and `exec`](../../15_Regular_Expressions/match_matchall_and_exec/README.md)

*JavaScript RegExp* — Sundeep Agarwal (self-published, 2019, version 1.0). Best for short example-first chapters with exercises, all run in the Chrome console. Its chapters are not numbered.

- *RegExp introduction* → [Regex literals and flags](../../15_Regular_Expressions/regex_literals_and_flags/README.md)
- *Anchors*, *Alternation and Grouping*, *Dot metacharacter and Quantifiers*, *Character class* → [Regular expressions](../../15_Regular_Expressions/README.md)
- *Escaping metacharacters* → [`RegExp.escape`](../../15_Regular_Expressions/regexp_escape/README.md)
- *Working with matched portions* → [`match`, `matchAll` and `exec`](../../15_Regular_Expressions/match_matchall_and_exec/README.md), [Named groups and replacements](../../15_Regular_Expressions/named_groups_and_replacements/README.md)
- *Groupings and backreferences* → [Named groups and replacements](../../15_Regular_Expressions/named_groups_and_replacements/README.md)
- *Lookarounds* → [Lookbehind](../../15_Regular_Expressions/lookbehind_in_javascript/README.md)
- *Unicode* → [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md)

*Introducing Regular Expressions: JavaScript and TypeScript* — Jörg Krause (Apress, 2017). Best for a short introduction plus a chapter of ready-made patterns for the web and networking, data manipulation and form validation. It was written before ES2018 and says JavaScript has no lookbehind, which ES2018 added.

- ch. 1 *Introducing Regular Expressions*, ch. 2 *Recognizing Patterns* → [Regular expressions](../../15_Regular_Expressions/README.md), [Lookbehind](../../15_Regular_Expressions/lookbehind_in_javascript/README.md)
- ch. 3 *The JavaScript Functions* → [`match`, `matchAll` and `exec`](../../15_Regular_Expressions/match_matchall_and_exec/README.md)
- ch. 4 *Examples of Patterns* → [Regular expressions](../../15_Regular_Expressions/README.md)

*Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON* — Lindsay Bassett (O'Reilly, 2015, 1st edition). Best for JSON as a data format on its own terms: syntax, data types, JSON Schema, and why `JSON.parse` replaced `eval` for reading it.

- ch. 1 *What Is JSON?*, ch. 2 *JSON Syntax*, ch. 3 *JSON Data Types* → [JSON](../../06_Objects/json/README.md), [Recursive types](../../27_Type_Operators/recursive_types/README.md)
- ch. 4 *JSON Schema* → [Run-time validation](../../30_Where_Types_Lie/runtime_validation/README.md)
- ch. 5 *JSON Security Concerns* → [`eval` and `new Function`](../../17_Metaprogramming/eval_and_new_function/README.md), [External data](../../30_Where_Types_Lie/json_parse_and_external_data/README.md)
- ch. 6 *The JavaScript XmlHttpRequest and Web APIs* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md)
- Not mapped: ch. 7 (jQuery and AngularJS), ch. 8 (CouchDB), ch. 9 *JSON on the Server Side*.

## Asynchrony and concurrency

*Multithreaded JavaScript: Concurrency Beyond the Event Loop* — Thomas Hunter II and Bryan English (O'Reilly, 2021, 1st edition). Best for threads in JavaScript — web workers, `worker_threads`, `SharedArrayBuffer` and `Atomics` — and for its closing chapter on when they are not worth the cost.

- ch. 1 *Introduction* → [One thread per agent](../../20_Workers_and_Parallelism/one_thread_per_agent/README.md), [Run to completion](../../13_Async_and_the_Event_Loop/run_to_completion/README.md)
- ch. 2 *Browsers* → [The browser](../../21_The_Browser/README.md), [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md)
- ch. 3 *Node.js* → [Worker threads](../../20_Workers_and_Parallelism/worker_threads/README.md)
- ch. 4 *Shared Memory* → [`SharedArrayBuffer` and `Atomics`](../../20_Workers_and_Parallelism/sharedarraybuffer_and_atomics/README.md), [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md)
- ch. 5 *Advanced Shared Memory* → [`SharedArrayBuffer` and `Atomics`](../../20_Workers_and_Parallelism/sharedarraybuffer_and_atomics/README.md)
- chs. 6 and 8 *Multithreaded Patterns*, *Analysis* → [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- app. A *Structured Clone Algorithm* → [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md), [Copying objects](../../06_Objects/copying_objects/README.md)
- Not mapped: ch. 7 *WebAssembly*.

The asynchronous chapters of books listed elsewhere on this page, all mapped to [Async and the event loop](../../13_Async_and_the_Event_Loop/README.md):

- *Eloquent JavaScript*, ch. 11 *Asynchronous Programming*
- *JavaScript: The Definitive Guide*, ch. 13 *Asynchronous JavaScript*
- *JavaScript: The New Toys*, ch. 8 *Promises* and ch. 9 *Asynchronous Functions, Iterators, and Generators*; ch. 16 *Shared Memory* goes with [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- *Advanced JavaScript Unleashed*, *Asynchronous JavaScript*
- *Distributed Systems with Node.js*, ch. 1 *Why Distributed?*, for the Node event loop
- *Node.js: The Comprehensive Guide*, ch. 16 *Asynchronous Programming*
- *Fullstack Node.js*, *Async*
- *Async JavaScript*, the whole book, listed under older books below

## Older books, read with care

These predate ES2015 or teach what it replaced. Their chapters still map onto this library, but each entry says in one sentence what has changed since.

*JavaScript: The Good Parts* — Douglas Crockford (O'Reilly, 2008, 1st edition). Best for its lists of the language's traps in appendices A *Awful Parts* and B *Bad Parts*, many of which still apply. Written for ES3, it works around the lack of block scope, classes and modules with functions, closures and prototype helpers; ES2015 added `let`, `const`, `class` and modules.

- ch. 2 *Grammar* → [Values and types](../../02_Values_and_Types/README.md)
- ch. 3 *Objects* → [Objects](../../06_Objects/README.md)
- ch. 4 *Functions* → [Functions](../../05_Functions/README.md), [`this`](../../05_Functions/this_is_set_by_the_call/README.md), [Closures](../../04_Variables_and_Scope/closures/README.md)
- ch. 5 *Inheritance* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 6 *Arrays* → [Arrays and collections](../../08_Arrays_and_Collections/README.md)
- ch. 7 *Regular Expressions* → [Regular expressions](../../15_Regular_Expressions/README.md)
- ch. 8 *Methods* → [Arrays and collections](../../08_Arrays_and_Collections/README.md), [String methods](../../09_Strings_and_Unicode/string_methods/README.md)
- app. A *Awful Parts* → [Automatic semicolon insertion](../../01_Running_JavaScript/semicolons_and_asi/README.md), [`typeof`](../../02_Values_and_Types/the_typeof_operator/README.md), [The `+` operator](../../03_Equality_and_Coercion/the_plus_operator/README.md), [Parsing numbers](../../10_Numbers_and_Math/parsing_numbers/README.md), [Every number is a double](../../10_Numbers_and_Math/every_number_is_a_double/README.md), [`NaN`, `Infinity` and `-0`](../../10_Numbers_and_Math/nan_infinity_and_negative_zero/README.md), [Truthy and falsy](../../03_Equality_and_Coercion/truthy_and_falsy/README.md)
- app. B *Bad Parts* → [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md), [`eval` and `new Function`](../../17_Metaprogramming/eval_and_new_function/README.md), [Bitwise operators](../../10_Numbers_and_Math/bitwise_operators/README.md), [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md), [`new`](../../07_Prototypes_and_Classes/constructors_and_new/README.md)
- app. C *JSLint* → [ESLint](../../31_Tooling/linting_with_eslint/README.md)
- app. E *JSON* → [JSON](../../06_Objects/json/README.md)

*Professional JavaScript for Web Developers* — Nicholas C. Zakas (Wrox, 2012, 3rd edition). Best for ES5 and the browser APIs of 2012, covered in detail. Its object-oriented chapter builds inheritance from constructors and prototypes that `class` now writes for you, ch. 7 imitates block scope with immediately invoked functions that `let` made unnecessary, and appendix A describes ES2015, then called Harmony, before it was finished.

- ch. 1 *What Is JavaScript?* → [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md), [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md)
- ch. 2 *JavaScript in HTML* → [Loading scripts](../../21_The_Browser/script_loading/README.md)
- ch. 3 *Language Basics* → [Values and types](../../02_Values_and_Types/README.md), [Equality and coercion](../../03_Equality_and_Coercion/README.md), [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 4 *Variables, Scope, and Memory* → [Values and references](../../02_Values_and_Types/values_and_references/README.md), [Variables and scope](../../04_Variables_and_Scope/README.md), [Memory and garbage collection](../../18_Memory_and_Garbage_Collection/README.md)
- ch. 5 *Reference Types* → [Objects](../../06_Objects/README.md), [Arrays and collections](../../08_Arrays_and_Collections/README.md), [Dates and time](../../16_Dates_and_Time/README.md), [Regular expressions](../../15_Regular_Expressions/README.md), [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md)
- ch. 6 *Object-Oriented Programming* → [Property descriptors](../../06_Objects/property_descriptors/README.md), [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 7 *Function Expressions* → [Closures](../../04_Variables_and_Scope/closures/README.md), [Recursion and the call stack](../../05_Functions/recursion_and_the_call_stack/README.md)
- chs. 8–16, from *The Browser Object Model* to *HTML5 Scripting* → [The browser](../../21_The_Browser/README.md)
- ch. 17 *Error Handling and Debugging* → [Errors](../../12_Errors/README.md)
- ch. 20 *JSON* → [JSON](../../06_Objects/json/README.md)
- ch. 21 *Ajax and Comet* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md)
- ch. 22 *Advanced Techniques* → [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md), [Timers](../../13_Async_and_the_Event_Loop/timers/README.md)
- ch. 23 *Offline Applications and Client-Side Storage* → [Storage](../../21_The_Browser/web_storage_and_cookies/README.md)
- ch. 25 *Emerging APIs* → [The rendering loop](../../21_The_Browser/the_rendering_loop/README.md), [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- app. A *ECMAScript Harmony* → [ECMAScript versions](../../01_Running_JavaScript/ecmascript_versions/README.md)
- app. B *Strict Mode* → [Strict mode](../../01_Running_JavaScript/strict_mode/README.md)

*Object-Oriented JavaScript: Create scalable, reusable high-quality JavaScript applications, and libraries* — Stoyan Stefanov (Packt, 2008). Best for a patient walk through functions, closures and prototypes as ES3 had them. Its hand-written inheritance helpers, including an `object()` function, became `Object.create` in ES5 and `class` with `extends` in ES2015.

- ch. 2 *Primitive Data Types, Arrays, Loops, and Conditions* → [Values and types](../../02_Values_and_Types/README.md), [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 3 *Functions* → [Functions](../../05_Functions/README.md), [Closures](../../04_Variables_and_Scope/closures/README.md)
- ch. 4 *Objects* → [Objects](../../06_Objects/README.md)
- ch. 5 *Prototype* → [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md)
- ch. 6 *Inheritance* → [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md), [Copying objects](../../06_Objects/copying_objects/README.md)
- ch. 7 *The Browser Environment* → [The browser](../../21_The_Browser/README.md)
- app. D *Regular Expressions* → [Regular expressions](../../15_Regular_Expressions/README.md)

*Learning JavaScript Design Patterns* — Addy Osmani (O'Reilly, 2012, early release revision 1). Best for the classic patterns as JavaScript wrote them around 2012, and for the module formats that came before ES modules. The module and constructor patterns it teaches are what ES modules and `class` now provide directly, and its section on ES Harmony modules shows 2012 proposal syntax (`module` blocks, `import * from`) that ES2015 did not adopt.

- ch. 9 *JavaScript Design Patterns* → [`new`](../../07_Prototypes_and_Classes/constructors_and_new/README.md), [Closures](../../04_Variables_and_Scope/closures/README.md) (the module pattern), [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) (the observer pattern)
- ch. 13 *Modern Modular JavaScript Design Patterns* → [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md)
- Not mapped: chs. 11, 12 and 14 (MV* patterns, jQuery, jQuery plugins).

*Head First JavaScript* — Michael Morrison (O'Reilly, 2007, 1st edition). Best for a picture-heavy beginner's course in browser scripting. It is 2007 browser JavaScript: written before `let`, `const` and `class`, it builds custom objects on prototypes by hand and does Ajax with `XMLHttpRequest`, where `fetch` and promises are used now.

- ch. 2 *storing data: Everything Has Its Place* → [Values and types](../../02_Values_and_Types/README.md), [Variables and scope](../../04_Variables_and_Scope/README.md)
- ch. 3 *exploring the client: Browser Spelunking* → [Storage](../../21_The_Browser/web_storage_and_cookies/README.md), [Timers](../../13_Async_and_the_Event_Loop/timers/README.md)
- chs. 4–5 *decision making: If There's a Fork in the Road, Take It*, *looping: At the Risk of Repeating Myself* → [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 6 *functions: Reduce, Reuse, Recycle* → [Functions](../../05_Functions/README.md)
- ch. 7 *forms and validation: Getting the User to Tell All* → [Regular expressions](../../15_Regular_Expressions/README.md)
- ch. 8 *wrangling the page: Slicing and Dicing HTML with the DOM* → [The DOM](../../21_The_Browser/the_dom_is_not_javascript/README.md)
- ch. 9 *bringing data to life: Objects as Frankendata* → [Objects](../../06_Objects/README.md)
- ch. 10 *creating custom objects: Having It Your Way with Custom Objects* → [Prototypes and classes](../../07_Prototypes_and_Classes/README.md)
- ch. 11 *kill bugs dead: Good Scripts Gone Wrong* → [Errors](../../12_Errors/README.md)
- ch. 12 *dynamic data: Touchy-Feely Web Applications* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md)

*JavaScript Step by Step* — Steve Suehring (Microsoft Press, 2013, 3rd edition). Best for exercises on ES5 basics in the browser. It predates `let`, `const`, `class`, modules and promises, works in Visual Studio 2012, and spends several chapters on jQuery and Windows 8 apps.

- ch. 1 *JavaScript is more than you might think* → [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md)
- ch. 3 *JavaScript syntax and statements* → [Strict mode](../../01_Running_JavaScript/strict_mode/README.md)
- ch. 4 *Working with variables and data types* → [Values and types](../../02_Values_and_Types/README.md), [Converting on purpose](../../03_Equality_and_Coercion/explicit_conversion/README.md), [Regular expressions](../../15_Regular_Expressions/README.md)
- ch. 5 *Using operators and expressions* → [Equality and coercion](../../03_Equality_and_Coercion/README.md)
- ch. 6 *Controlling flow with conditionals and loops* → [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 7 *Working with functions* → [Functions](../../05_Functions/README.md)
- ch. 8 *Objects in JavaScript* → [Objects](../../06_Objects/README.md), [Arrays and collections](../../08_Arrays_and_Collections/README.md)
- chs. 9, 12 and 13 *The Browser Object Model*, *The Document Object Model*, *JavaScript events and the browser* → [The browser](../../21_The_Browser/README.md)
- chs. 19–20 *Getting data into JavaScript*, *Using AJAX* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md)
- Not mapped: chs. 10–11 and 17–18 (jQuery), chs. 14–16 (images, forms, CSS), chs. 21–23 (Windows 8).

*Learning JavaScript: A Hands-On Guide to the Fundamentals of Modern JavaScript* — Tim Wright (Addison-Wesley, 2012). Best for browser scripting in the progressive-enhancement style. Its "modern" is 2012: written before ES2015, it has no `let`, `const`, `class`, modules, promises or `fetch`, and it leans on jQuery.

- ch. 2 *JavaScript in the Browser* → [The browser](../../21_The_Browser/README.md)
- ch. 4 *Accessing the DOM* → [The DOM](../../21_The_Browser/the_dom_is_not_javascript/README.md)
- ch. 5 *Storing Data in JavaScript* → [Arrays and collections](../../08_Arrays_and_Collections/README.md), [JSON](../../06_Objects/json/README.md), [Storage](../../21_The_Browser/web_storage_and_cookies/README.md)
- ch. 6 *Variables, Functions, and Loops* → [Variables and scope](../../04_Variables_and_Scope/README.md), [Functions](../../05_Functions/README.md), [Control flow and iteration](../../11_Control_Flow_and_Iteration/README.md)
- ch. 7 *Interacting with the User Through Events* → [DOM events](../../21_The_Browser/events_bubbling_and_delegation/README.md)
- ch. 8 *Communicating with the Server Through Ajax* → [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md)
- Not mapped: chs. 1, 3 and 9–12 (progressive enhancement, terminology, code organization, jQuery, HTML5 APIs, next steps).

*Async JavaScript: Build More Responsive Apps with Less Code* — Trevor Burnham (Pragmatic Bookshelf, 2012, version P1.0). Best for why callbacks nest and how the event queue runs, explained before promises were part of the language. Its promises are jQuery Deferreds and Promises/A and its flow control uses the Async.js library; ES2015 standardized `Promise` and ES2017 added `async` and `await`.

- ch. 1 *Understanding JavaScript Events* → [Run to completion](../../13_Async_and_the_Event_Loop/run_to_completion/README.md), [The event loop](../../13_Async_and_the_Event_Loop/the_event_loop/README.md), [Callbacks](../../13_Async_and_the_Event_Loop/callbacks/README.md)
- ch. 2 *Distributing Events* → [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md)
- ch. 3 *Promises and Deferreds* → [Promises](../../13_Async_and_the_Event_Loop/promises/README.md)
- ch. 4 *Flow Control with Async.js* → [Sequential or parallel](../../13_Async_and_the_Event_Loop/sequential_or_parallel_awaits/README.md), [`all`, `allSettled`, `race` and `any`](../../13_Async_and_the_Event_Loop/promise_combinators/README.md)
- ch. 5 *Multithreading with Workers* → [Workers and parallelism](../../20_Workers_and_Parallelism/README.md)
- ch. 6 *Async Script Loading* → [Loading scripts](../../21_The_Browser/script_loading/README.md)
- app. A1 *Tools for Taming JavaScript* → [Generators](../../11_Control_Flow_and_Iteration/generators/README.md)

*Node.js in Action* — Mike Cantelon, Marc Harter, T.J. Holowaychuk and Nathan Rajlich (Manning, 2014). Best for Node's core model — asynchronous I/O, CommonJS modules, callbacks, event emitters — as it looked in 2014. Its code uses callbacks throughout, because it was written before promises, `async`/`await` and ES modules reached Node.

- ch. 1 *Welcome to Node.js* → [The event loop](../../13_Async_and_the_Event_Loop/the_event_loop/README.md), [The Node.js runtime](../../19_Node_Runtime/README.md)
- ch. 3 *Node programming fundamentals* → [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md), [Callbacks](../../13_Async_and_the_Event_Loop/callbacks/README.md), [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md)
- ch. 4 *Building Node web applications* → [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md)
- ch. 10 *Testing Node applications* → [The built-in test runner](../../19_Node_Runtime/the_built_in_test_runner/README.md)
- ch. 13 *Beyond web servers* → [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md), [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md)
- ch. 14 *The Node ecosystem* → [npm](../../31_Tooling/npm_and_package_json/README.md)
- app. B *Debugging Node* → [Debugging Node](../../31_Tooling/debugging_node/README.md)
- Not mapped: ch. 2 (a chat application), chs. 5–9 and 11–12 (storage, Connect, Express, templating, deployment).

*Node.js in Practice* — Alex Young and Marc Harter (Manning, 2015). Best for its 115 numbered techniques on Node's core modules: buffers, events, streams, the file system, networking and child processes. It was written for Node 0.10, whose APIs took callbacks, and it creates buffers with `new Buffer()`, which Node has since deprecated in favour of `Buffer.from`.

- ch. 1 *Getting started* → [The Node.js runtime](../../19_Node_Runtime/README.md)
- ch. 2 *Globals: Node's environment* → [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md), [Timers](../../13_Async_and_the_Event_Loop/timers/README.md), [Modules](../../14_Modules/README.md)
- ch. 3 *Buffers: Working with bits, bytes, and encodings* → [`Buffer`](../../19_Node_Runtime/buffers/README.md), [Strings and bytes](../../09_Strings_and_Unicode/strings_and_bytes/README.md)
- ch. 4 *Events: Mastering EventEmitter and beyond* → [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md)
- ch. 5 *Streams: Node's most powerful and misunderstood feature* → [Streams](../../19_Node_Runtime/streams_and_backpressure/README.md)
- ch. 6 *File system: Synchronous and asynchronous approaches to files* → [Files](../../19_Node_Runtime/reading_and_writing_files/README.md)
- ch. 7 *Networking: Node's true "Hello, World"* → [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md)
- ch. 8 *Child processes: Integrating external applications with Node* → [Child processes](../../20_Workers_and_Parallelism/child_processes/README.md)
- ch. 10 *Tests: The key to confident code* → [The built-in test runner](../../19_Node_Runtime/the_built_in_test_runner/README.md)
- ch. 11 *Debugging: Designing for introspection and resolving issues* → [Debugging Node](../../31_Tooling/debugging_node/README.md), [Memory leaks](../../18_Memory_and_Garbage_Collection/memory_leaks/README.md)
- ch. 13 *Writing modules: Mastering what Node is all about* → [`package.json`](../../14_Modules/package_json_type_and_exports/README.md), [npm](../../31_Tooling/npm_and_package_json/README.md)
- Not mapped: ch. 9 (web applications) and ch. 12 (production).

*ECMAScript Language Specification* (ECMA-262) — Ecma International (2009, 5th edition). Best for reading the language as ES5 defined it — strict mode, the `JSON` object, property attributes — beside the current edition listed on the [documentation page](../documentation/README.md). It was followed by edition 5.1 in 2011 and, from ES2015 on, by a new edition every year; the current one is the 17th, ECMAScript 2026.

- clause 8 *Types* → [Values and types](../../02_Values_and_Types/README.md)
- clause 9 *Type Conversion and Testing* → [Equality and coercion](../../03_Equality_and_Coercion/README.md), [ToPrimitive](../../03_Equality_and_Coercion/toprimitive/README.md)
- clause 10 *Executable Code and Execution Contexts* → [Variables and scope](../../04_Variables_and_Scope/README.md), [`this`](../../05_Functions/this_is_set_by_the_call/README.md)
- clause 15 *Standard Built-in ECMAScript Objects* → [Objects](../../06_Objects/README.md), [Arrays and collections](../../08_Arrays_and_Collections/README.md), [JSON](../../06_Objects/json/README.md)

## Beyond this library

Books on frameworks, libraries, cloud services and other languages, which this library does not cover:

- *Angular in Action* — Jeremy Wilken
- *AWS Lambda in Action* — Danilo Poccia
- *Clojure Programming* — Chas Emerick, Brian Carper and Christophe Grand
- *Full Stack JavaScript* — Azat Mardan
- *Fullstack React* — Anthony Accomazzo, Ari Lerner, Nate Murray, Clay Allsopp, David Guttman and Tyler McGinnis
- *JavaScript Everywhere* — Adam D. Scott
- *Learning GraphQL* — Eve Porcello and Alex Banks
- *Learning React* — Alex Banks and Eve Porcello
- *Learning React Native* — Bonnie Eisenman
- *React Hooks in Action* — John Larsen
- *RxJS in Action* — Paul P. Daniels and Luis Atencio
- *Serverless Applications with Node.js* — Slobodan Stojanović and Aleksandar Simović
- *Web Development with Node and Express* — Ethan Brown
