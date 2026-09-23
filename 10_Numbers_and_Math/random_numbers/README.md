# Random numbers — `Math.random` for games, `crypto` for secrets

**Level:** 201 · for anyone who needs a random number, or a secret one

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Math.random` is a pseudo-random generator seeded once per process: `node --random-seed=42` prints the same number on every run, while `crypto.randomUUID()` still differs, because the `crypto` functions use a secure generator the seed does not touch, the only kind for tokens and passwords.

**Keywords:** `Math.random`, `crypto.getRandomValues`, `crypto.randomUUID`, `randomInt`

## What the finished page will answer

- Does `node --random-seed=42` make `Math.random()` print the same sequence on every run, and does it change what `crypto.randomUUID()` returns?
- Why does `Math.round(Math.random() * 2)` produce 1 about twice as often as 0 or 2, and which formula gives a fair integer in a range?
- What do `crypto.getRandomValues`, `crypto.randomUUID` and `randomInt` from `node:crypto` return?
- Why does `crypto.getRandomValues(new Uint8Array(65537))` throw, and why does a `Float64Array` fail too?

## Examples it will need

- [ ] `random_numbers_seed_sh.sh` — two runs with `--random-seed=42` compared, then two runs of `crypto.randomUUID()` compared, printing only same or different so the output is stable
- [ ] `random_numbers_rounding_bias_sh.sh` — a count of 30,000 rolls made with `Math.round(Math.random() * 2)` and with `Math.floor(Math.random() * 3)`, under a fixed `--random-seed` so the counts repeat
- [ ] `random_numbers_crypto_js.js` — the length and type of what `getRandomValues`, `randomUUID` and `randomInt` return, and the `QuotaExceededError` for 65,537 bytes

## See also

- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — the typed array `getRandomValues` fills
- [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md) — engine options such as `--random-seed`, listed by `node --v8-options`
- [Rounding and formatting](../rounding_and_formatting/README.md) — `Math.floor` against `Math.round` when mapping a float to a range
- [Cryptography: random is not secrets ↗](https://masiarek.github.io/cryptography-learning-library/03_Randomness/random_is_not_secret/index.html) — the same split in Python: `random` against `secrets`
- [Rust: Randomness: `std` has none ↗](https://masiarek.github.io/rust-learning-library/15_First_Programs/randomness/index.html) — in Rust, the standard library ships no random generator at all

## Sources to start from

- [MDN — Math.random() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [MDN — Crypto: getRandomValues() ↗](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
- [V8 — There's Math.random(), and then there's Math.random() ↗](https://v8.dev/blog/math-random)
