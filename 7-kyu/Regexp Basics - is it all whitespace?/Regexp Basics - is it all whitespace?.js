// Add a method to the String prototype
String.prototype.whitespace = function () {
  // Use regex to check if string contains only whitespace (or is empty)
  // ^\s*$ matches the entire string if it consists of zero or more whitespace characters
  return /^\s*$/.test(this);
};

console.log('   '.whitespace()); // true
console.log('\n\t  '.whitespace()); // true
console.log('abc'.whitespace()); // false
console.log(' abc '.whitespace()); // false
console.log(''.whitespace()); // true

/*
### Explanation:
- `^\s*$`:
  - `^` asserts start of string.
  - `\s*` matches 0 or more whitespace characters (`\s` includes space, tab, newline, etc.).
  - `$` asserts end of string.
- `.test(this)` runs the regex against the string instance (`this`), returning `true` or `false`.
*/
