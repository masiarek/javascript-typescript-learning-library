// Round to a whole number of cents first: BigInt() takes only an integer.
const priceDollars = 19.99;
console.log(`priceDollars * 100 = ${priceDollars * 100}`);
const cents = BigInt(Math.round(priceDollars * 100));
console.log(`${cents}n`);
