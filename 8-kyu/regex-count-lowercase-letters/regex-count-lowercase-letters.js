function countLowercaseLetters(str) {
  // Match all lowercase letters using a regex and return the length of the matches.
  // If no matches are found, return 0 using the null-coalescing operator.
  return (str.match(/[a-z]/g) || []).length;
}

// Examples:
console.log(countLowercaseLetters('abc')); // 3
console.log(countLowercaseLetters('abcABC123')); // 3
console.log(
  countLowercaseLetters("abcABC123!@€£#$%^&*()_-+=}{[]|\\':;?/>.<,~")
); // 3
console.log(countLowercaseLetters('')); // 0
console.log(countLowercaseLetters("ABC123!@€£#$%^&*()_-+=}{[]|\\':;?/>.<,~")); // 0
console.log(countLowercaseLetters('abcdefghijklmnopqrstuvwxyz')); // 26

/* 
Explanation:
Regular Expression: /[a-z]/g
[a-z]: Matches any lowercase letter from a to z.
g: Global flag to find all matches in the string.

match Method:
Returns an array of all matches or null if no matches are found.

Null Coalescing (||):
If match returns null (no lowercase letters), we replace it with an empty array [] to avoid errors.

length Property:
The length of the resulting array gives the count of lowercase letters in the string.
*/
