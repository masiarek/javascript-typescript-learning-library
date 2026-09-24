// V8 caps the size of a BigInt. `1n << k` has k + 1 bits, so this builds one
// of 2 ** 30 - 64 bits (about 128 MiB of digits) and then asks for one of
// 2 ** 30 + 1 bits. Only the sizes print: a number this long is never printed.
const row = (code, result) => console.log(`${code.padEnd(34)}${result}`);
const k = 2n ** 30n - 65n;

const widest = 1n << k;
row("widest = 1n << (2n ** 30n - 65n)", "built");
row("widest >> (2n ** 30n - 65n)", `${widest >> k}n, so widest has ${k + 1n} bits`);

try {
  const tooWide = 1n << (2n ** 30n);
  row("1n << (2n ** 30n)", `built, ${tooWide > 0n}`);
} catch (error) {
  row("1n << (2n ** 30n)", `${error.name}: ${error.message}`);
}
