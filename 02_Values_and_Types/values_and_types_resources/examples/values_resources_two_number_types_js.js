// "A single number type": since ES2020 there are two. A number is a double,
// exact for integers only up to 2 ** 53; a bigint is an exact integer of any
// size. Each pair of lines asks the same question of both.
const asNumber = 2 ** 64;
const asBigint = 2n ** 64n;

console.log(`typeof (2 ** 64):   ${typeof asNumber}`);
console.log(`typeof (2n ** 64n): ${typeof asBigint}`);
console.log(`2 ** 64   prints ${asNumber}`);
console.log(`2n ** 64n prints ${asBigint}`);
console.log(`2 ** 53 + 1 === 2 ** 53:      ${2 ** 53 + 1 === 2 ** 53}`);
console.log(`2n ** 53n + 1n === 2n ** 53n: ${2n ** 53n + 1n === 2n ** 53n}`);
console.log(`2 ** 40 | 0:    ${2 ** 40 | 0}`);
console.log(`2n ** 40n | 0n: ${2n ** 40n | 0n}`);
