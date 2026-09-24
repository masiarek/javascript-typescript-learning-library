// A BigInt meets a Number, or code that expects a Number. A result prints as
// text (a BigInt with its "n"); a thrown error prints as name: message.
const show = (compute) => {
  try {
    const value = compute();
    return typeof value === "bigint" ? `${value}n` : String(value);
  } catch (error) {
    return `${error.name}: ${error.message}`;
  }
};

const cases = [
  ["1n + 1", () => 1n + 1],
  ["1n * 1.5", () => 1n * 1.5],
  ["Math.max(1n, 2n)", () => Math.max(1n, 2n)],
  ["+1n", () => +1n],
  ["-1n", () => -1n],
  ["1n == 1", () => 1n == 1],
  ["1n === 1", () => 1n === 1],
  ["2n > 1", () => 2n > 1],
  ["1n < 1.5", () => 1n < 1.5],
  ["Number(1n) + 1", () => Number(1n) + 1],
  ["1n + BigInt(1)", () => 1n + BigInt(1)],
];
for (const [code, compute] of cases) console.log(`${code.padEnd(18)}${show(compute)}`);
