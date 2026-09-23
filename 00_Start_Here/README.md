# 00 — Start here

**Level:** 101 · read this first

**One line:** A page here makes one claim about JavaScript or TypeScript and shows the program that proves it, or, while it is still a stub, says plainly that it is an outline.

This library is for someone who can already write a little code, in JavaScript or in another language, and wants to know what JavaScript and TypeScript actually do: why `[10, 9, 1].sort()` gives `[1, 10, 9]`, why a resolved promise runs before a zero-millisecond timer, why a TypeScript type can say one thing while the running program does another. Each page takes one such question and answers it with a program that Node runs and CI checks.

## Stubs first

The library was laid out whole before it was written. Every topic in the sidebar already has its page, and most of those pages are **stubs**: the claim, the questions the finished page will answer, the examples it will need, and links to its neighbours and to the same question in the sibling libraries. A stub says so in a box at the top. It becomes a lesson when its first example runs in CI, and the chapter tables mark each page `stub` or `checked`.

## How to read a page

A finished page has the same shape everywhere: a **one-line** claim, an output block printed by the program in that page's `examples/` folder, **Reading the output**, **What to do**, **In other languages**, and **Sources**. The output blocks are generated, never typed. [How a page is checked](how_a_page_is_checked/README.md) walks through one: the same function in JavaScript and in TypeScript, and the call `tsc` refuses.

## The pages in this chapter

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [How a page is checked](how_a_page_is_checked/README.md) | 101 | Every output block in this library was printed by a program that CI runs on two machines: Node runs a JavaScript example, `tsc` type-checks a TypeScript example before Node runs it with its types erased, and an example meant to fail records exactly what `tsc` said. | checked |
<!-- /lessons -->

## Running the examples

You need **Node 24 or later**; Node runs `.ts` files itself by erasing their types. The TypeScript compiler that checks them is pinned in `package.json`, so install it once from the repo root:

```bash
npm ci
python3 tools/run_examples.py --check
```

The first command installs TypeScript into `node_modules/`; the second runs every example and compares its output with the recorded answer key, exactly as CI does.

## Where to go next

- The [keyword index](../KEYWORDS.md) — every keyword, operator and API, and the page that explains it.
- [Running JavaScript](../01_Running_JavaScript/README.md) — the first chapter: what the language is and what Node adds to it.
- [TypeScript basics](../22_TypeScript_Basics/README.md) — where the TypeScript half begins.
- [Resources](../32_Resources/README.md) — books, official documentation, and where each idea lives in the sibling libraries.
