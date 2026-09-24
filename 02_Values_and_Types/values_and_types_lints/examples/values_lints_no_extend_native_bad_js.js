// An old polyfill for String.prototype.at, written before the language had one.
String.prototype.at = function (index) {
  return this.charAt(index);
};
// From here on, every string's at() is this one.
console.log(JSON.stringify("tea".at(-1)));
