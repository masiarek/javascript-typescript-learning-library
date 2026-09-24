// BigInt.asIntN(bits, x) keeps the low `bits` bits of x and reads them as a
// signed integer; asUintN reads them as unsigned. The last two rows store the
// same values into typed arrays, which have a fixed width of their own.
const rows = [
  ["BigInt.asIntN(8, 127n)", BigInt.asIntN(8, 127n)],
  ["BigInt.asIntN(8, 128n)", BigInt.asIntN(8, 128n)],
  ["BigInt.asIntN(8, 255n)", BigInt.asIntN(8, 255n)],
  ["BigInt.asUintN(8, 256n)", BigInt.asUintN(8, 256n)],
  ["BigInt.asUintN(8, -1n)", BigInt.asUintN(8, -1n)],
  ["BigInt.asUintN(8, 255n << 2n)", BigInt.asUintN(8, 255n << 2n)],
  ["BigInt.asUintN(64, -1n)", BigInt.asUintN(64, -1n)],
  ["BigInt.asIntN(64, 2n ** 63n)", BigInt.asIntN(64, 2n ** 63n)],
  ["Int8Array.of(255)[0]", Int8Array.of(255)[0]],
  ["BigInt64Array.of(2n ** 63n)[0]", BigInt64Array.of(2n ** 63n)[0]],
];
for (const [code, value] of rows) {
  const text = typeof value === "bigint" ? `${value}n` : String(value);
  console.log(`${code.padEnd(32)}${text}`);
}
