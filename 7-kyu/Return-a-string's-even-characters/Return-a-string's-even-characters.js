function evenChars(string) {
  // If string length is less than 2 or greater than 100, return "invalid string"
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }

  // Use filter to get characters at even indices (index + 1 is even)
  return Array.from(string).filter((_, index) => (index + 1) % 2 === 0);
}

// Examples
console.log(evenChars('abcdefghijklm')); // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars('a')); // "invalid string"
console.log(evenChars('123456')); // ["2", "4", "6"]

/* 
Explanation:

Input Validation:
The function checks if the string's length is less than 2 or greater than 100. If so, it immediately returns "invalid string". This ensures that the function adheres to the given constraints.

Extract Even Characters:
Using Array.from(string) converts the string into an array of characters.
The filter method iterates over the array with the index provided.
For each character, the condition (index + 1) % 2 === 0 checks if the character is at an even position in 1-based indexing (index + 1).

Efficiency:
The function has a time complexity of O(n), where n is the length of the string, as it involves a single pass through the string.
The use of filter ensures concise and clear handling of the even indices logic.
*/
