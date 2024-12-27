// Extend the String prototype with the 'vowel' function
String.prototype.vowel = function () {
  // Check if the string matches a single vowel (case-insensitive)
  return /^[aeiou]$/i.test(this);
};

console.log('a'.vowel()); // true
console.log('E'.vowel()); // true
console.log('b'.vowel()); // false
console.log('ae'.vowel()); // false
console.log(''.vowel()); // false

/*  
Explanation:

Regular Expression:
/^[aeiou]$/i:
^ and $ ensure that the entire string is matched, not just part of it.
[aeiou] matches any of the vowels.
i makes the regex case-insensitive, so it matches both uppercase and lowercase vowels.

test() Method:
The test() method checks if the string matches the regular expression and returns a boolean.

Prototype Extension:
Adding the function to String.prototype allows it to be called on any string instance, as in "a".vowel().
*/
