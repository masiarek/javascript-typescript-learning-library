# Values and references — what assignment copies

**Level:** 101 · for anyone who has changed one variable and seen another change

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Assignment copies what the variable holds, and for an object that is a reference: after `b = a`, setting `b.count` changes `a.count`, and a function can change an object you pass it but can never make your variable point somewhere else.

**Keywords:** `pass by sharing`, `pass by reference`, `object reference`

## What the finished page will answer

- After `const b = a` with `a` an object, what does `b.count = 2` do to `a`, and what does the same kind of change do for a string?
- Can a function replace the caller's object by assigning to its parameter, and can it change the object's properties?
- Why is `{ n: 1 } === { n: 1 }` false, and what does `===` compare for objects?
- What does `const c = { ...a }` share with `a` when `a` holds an array?

## Examples it will need

- [ ] `values_and_references_assignment_js.js` — a string and an object each assigned to a second variable and changed, with both variables printed
- [ ] `values_and_references_arguments_js.js` — a function that reassigns its parameter and one that mutates it, with the caller's object after each

## See also

- [Copying objects](../../06_Objects/copying_objects/README.md) — how to get a real copy
- [`const` is not frozen](../../04_Variables_and_Scope/const_is_not_frozen/README.md) — a `const` binding to an object that still changes
- [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) — `===` on objects compares identity
- [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md) — the place where a value is copied for you
- [Rust: `Rc`: the clone that copies a pointer ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/reference_counting/index.html) — `Rc::clone` copies a pointer, as JavaScript assignment does
- [Rust: Copy or move? Swap the value, keep the program ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/copy_or_move/index.html) — in Rust the type decides between copy and move

## Sources to start from

- [MDN — Working with objects: comparing objects ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#comparing_objects)
- [MDN — Functions guide: function declarations ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)
