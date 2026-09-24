// tsc draws the same line before anything runs. It will not let a program
// change a character of a string, and it will not accept a string where the
// type `object` (any value that is not a primitive) is wanted.
let code = "ab-100";
code[0] = "A";

const order: object = { code };
const label: object = code;
