// Extending the String prototype with an `isLetter` method
String.prototype.isLetter = function () {
  // Check if the string length is exactly 1 and matches a single ASCII letter
  return /^[a-zA-Z]$/.test(this);
};

// Test cases
console.log('A'.isLetter()); // true
console.log('z'.isLetter()); // true
console.log('1'.isLetter()); // false
console.log('Ab'.isLetter()); // false
console.log('$'.isLetter()); // false

/* 
Explanation:

Prototype Extension:
Adds the isLetter method to the String prototype so it can be called on any string instance.

Regular Expression:
/^[a-zA-Z]$/:
^ and $: Ensure the string starts and ends with exactly one character.
[a-zA-Z]: Matches any single ASCII letter (lowercase a-z or uppercase A-Z).

Validation:
this refers to the current string instance.
.test(this) checks if the string matches the pattern.
*/
