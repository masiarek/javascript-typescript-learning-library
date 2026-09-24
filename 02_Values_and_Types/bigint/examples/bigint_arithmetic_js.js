// The same arithmetic on BigInts and on Numbers, side by side. A BigInt prints
// through a template with its "n" put back; a thrown error prints as
// name: message.
const show = (compute) => {
  try {
    const value = compute();
    return typeof value === "bigint" ? `${value}n` : String(value);
  } catch (error) {
    return `${error.name}: ${error.message}`;
  }
};

const rows = [
  ["2n ** 64n", () => 2n ** 64n, "2 ** 64", () => 2 ** 64],
  ["2n ** 53n + 1n", () => 2n ** 53n + 1n, "2 ** 53 + 1", () => 2 ** 53 + 1],
  ["7n / 2n", () => 7n / 2n, "7 / 2", () => 7 / 2],
  ["-7n / 2n", () => -7n / 2n, "-7 / 2", () => -7 / 2],
  ["-7n % 2n", () => -7n % 2n, "-7 % 2", () => -7 % 2],
  ["1n / 0n", () => 1n / 0n, "1 / 0", () => 1 / 0],
];

console.log(`${"BigInt".padEnd(16)}${"result".padEnd(30)}${"Number".padEnd(13)}result`);
for (const [bigCode, big, numberCode, number] of rows) {
  console.log(`${bigCode.padEnd(16)}${show(big).padEnd(30)}${numberCode.padEnd(13)}${show(number)}`);
}
