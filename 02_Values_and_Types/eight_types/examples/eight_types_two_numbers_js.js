// Two numeric types. A number is a 64-bit double, whole or not, and holds
// whole numbers exactly only up to 2 ** 53. A bigint stays exact past that,
// and holds whole numbers only.
const rows = [
  ["typeof 1", JSON.stringify(typeof 1)],
  ["typeof 1.5", JSON.stringify(typeof 1.5)],
  ["typeof 1n", JSON.stringify(typeof 1n)],
  ["1 === 1.0", String(1 === 1.0)],
  ["1 === 1n", String(1 === 1n)],
  ["Number.MAX_SAFE_INTEGER", String(Number.MAX_SAFE_INTEGER)],
  ["2 ** 53 + 1", String(2 ** 53 + 1)],
  ["2 ** 53 + 1 === 2 ** 53", String(2 ** 53 + 1 === 2 ** 53)],
  ["2n ** 53n + 1n", `${2n ** 53n + 1n}n`],
  ["2n ** 53n + 1n === 2n ** 53n", String(2n ** 53n + 1n === 2n ** 53n)],
  ["7 / 2", String(7 / 2)],
  ["7n / 2n", `${7n / 2n}n`],
];
for (const [expression, result] of rows) {
  console.log(`${expression.padEnd(30)}${result}`);
}
