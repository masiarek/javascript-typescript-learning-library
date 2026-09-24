// The comparison from the question, then each side of it on its own, then the
// same comparison after converting the BigInt to a Number first.
const show = (value) => (typeof value === "bigint" ? `${value}n` : String(value));

const rows = [
  ["2n ** 53n + 1n == 2 ** 53 + 1", 2n ** 53n + 1n == 2 ** 53 + 1],
  ["2n ** 53n + 1n", 2n ** 53n + 1n],
  ["2 ** 53 + 1", 2 ** 53 + 1],
  ["2n ** 53n + 1n > 2 ** 53 + 1", 2n ** 53n + 1n > 2 ** 53 + 1],
  ["2n ** 53n == 2 ** 53 + 1", 2n ** 53n == 2 ** 53 + 1],
  ["Number(2n ** 53n + 1n)", Number(2n ** 53n + 1n)],
  ["Number(2n ** 53n + 1n) == 2 ** 53 + 1", Number(2n ** 53n + 1n) == 2 ** 53 + 1],
];
for (const [code, value] of rows) console.log(`${code.padEnd(39)}${show(value)}`);
