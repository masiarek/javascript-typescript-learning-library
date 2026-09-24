// Convert the number to a bigint, and both sides of + have one type.
function addFee(balanceCents: bigint, feeCents: number): bigint {
  return balanceCents + BigInt(feeCents);
}
console.log(`${addFee(9007199254740993n, 250)}n`);
