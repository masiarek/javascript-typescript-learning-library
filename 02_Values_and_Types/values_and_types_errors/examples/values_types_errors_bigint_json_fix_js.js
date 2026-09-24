// A replacer writes each BigInt as a string; BigInt() reads it back.
const payment = { id: 7, amountCents: 9007199254740993n };
const json = JSON.stringify(payment, (key, value) =>
  typeof value === "bigint" ? String(value) : value,
);
console.log(json);
const amountCents = BigInt(JSON.parse(json).amountCents);
console.log(`read back: ${amountCents}n`);
