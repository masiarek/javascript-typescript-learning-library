# External data — `JSON.parse` returns `any`

**Level:** 201 · for anyone who has parsed JSON in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `JSON.parse` is declared to return `any`, so `const order: Order = JSON.parse(text)` compiles whatever the text holds — with `total` sent as `"99"`, `order.total + 1` prints `991`. Under Node's own types `response.json()` returns `unknown` instead, and tsc demands a check.

**Keywords:** `JSON.parse`, `Response.json`

## What the finished page will answer

- What does the annotation in `const order: Order = JSON.parse(text)` check, and what does `order.total + 1` print when `total` arrived as `"99"`?
- What is the type of `await response.json()` with Node's types and with the DOM lib, and why do they differ?
- Why is `JSON.parse(text) as unknown` better than an annotation, and what does tsc then refuse?
- What do `process.env.PORT` and `process.argv[2]` claim about data from outside, and is each claim true?
- Does a reviver passed to `JSON.parse` change the type of the result?

## Examples it will need

- [ ] `json_parse_order_sh.sh` — tsc's silence for an Order parsed from text with a string total, then 991 from Node
- [ ] `json_parse_response_json_sh.sh` — TS18046 for data.total with Node's fetch types, and no error for the same file with the DOM lib
- [ ] `json_parse_unknown_tserror.ts` — the errors tsc gives once the parse result is unknown instead of any

## See also

- [JSON](../../06_Objects/json/README.md) — what JSON.stringify and JSON.parse do to values
- [Run-time validation](../runtime_validation/README.md) — turning the unknown into a checked type
- [`any` is contagious](../any_is_contagious/README.md) — where the any from JSON.parse spreads
- [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md) — fetch in Node, whose json() is typed unknown
- [Rust: Deriving `Serialize` and `Deserialize` ↗](https://masiarek.github.io/rust-learning-library/06_Data/serde_derive/index.html) — serde checks the shape while it parses; JSON.parse checks nothing

## Sources to start from

- [MDN — JSON.parse() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [ECMA-262 — JSON.parse ↗](https://tc39.es/ecma262/#sec-json.parse)
