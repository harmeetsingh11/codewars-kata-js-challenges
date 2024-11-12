function getNumberFromString(s) {
  // Remove all non-digit characters using regex, then convert the result to a number
  return Number(s.replace(/\D/g, ''));
}

/* 
Explanation:

Removing Non-Digit Characters:
We use s.replace(/\D/g, '') to replace all non-digit characters (\D matches any character that is not a digit) with an empty string ''.
This leaves only the numeric characters in the string.

Convert to Number:
We use Number(...) to convert the resulting string of digits into an actual number.

This approach is both concise and efficient:
Regex Replacement: replace() with regex is O(n) in complexity, where n is the length of the string.
Number Conversion: Converting a string to a number is O(1).
*/
