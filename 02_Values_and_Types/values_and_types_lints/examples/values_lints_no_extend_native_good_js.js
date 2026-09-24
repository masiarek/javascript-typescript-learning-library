// A helper for strings is a function that takes the string.
function lastLetter(text) {
  return text.slice(-1);
}
console.log(JSON.stringify(lastLetter("tea")));
console.log(JSON.stringify("tea".at(-1)));
