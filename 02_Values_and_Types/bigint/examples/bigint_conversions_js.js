// BigInt() on strings and on Numbers, then JSON.stringify on an order that
// holds a BigInt, with and without a replacer. A thrown error prints as
// name: message.
const show = (compute) => {
  try {
    const value = compute();
    return typeof value === "bigint" ? `${value}n` : String(value);
  } catch (error) {
    return `${error.name}: ${error.message}`;
  }
};

const order = { total: 2n ** 64n };
// A replacer that writes every BigInt as a decimal string.
const asText = (key, value) => (typeof value === "bigint" ? String(value) : value);

const cases = [
  ['BigInt("0x1f")', () => BigInt("0x1f")],
  ['BigInt("9007199254740993")', () => BigInt("9007199254740993")],
  ["BigInt(2 ** 53 + 1)", () => BigInt(2 ** 53 + 1)],
  ["BigInt(2 ** 64)", () => BigInt(2 ** 64)],
  ["BigInt(1.5)", () => BigInt(1.5)],
  ['BigInt("1.5")', () => BigInt("1.5")],
  ['BigInt("")', () => BigInt("")],
  ["JSON.stringify(order)", () => JSON.stringify(order)],
  ["JSON.stringify(order, asText)", () => JSON.stringify(order, asText)],
];
for (const [code, compute] of cases) console.log(`${code.padEnd(31)}${show(compute)}`);
