// Convert the Number to a BigInt, not the BigInt to a Number.
const balanceCents = 9007199254740993n;
const feeCents = 250;
console.log(`convert the fee:     ${balanceCents + BigInt(feeCents)}n`);
console.log(`convert the balance: ${Number(balanceCents) + feeCents}`);
console.log(`Number(balanceCents) is ${Number(balanceCents)}`);
