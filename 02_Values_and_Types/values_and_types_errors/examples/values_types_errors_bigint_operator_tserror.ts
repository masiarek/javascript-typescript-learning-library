// The fee program, with types: tsc sees a bigint and a number.
function addFee(balanceCents: bigint, feeCents: number): bigint {
  return balanceCents + feeCents;
}
console.log(`${addFee(9007199254740993n, 250)}n`);
