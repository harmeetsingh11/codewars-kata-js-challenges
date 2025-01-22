function isNameInString(str, name) {
  // Convert both strings to lowercase for case-insensitive comparison
  str = str.toLowerCase();
  name = name.toLowerCase();

  let nameIndex = 0;

  // Iterate over each character in the string
  for (let char of str) {
    // If the current character matches the character at `nameIndex` in the name
    if (char === name[nameIndex]) {
      nameIndex++; // Move to the next character in the name

      // If we have matched all characters of the name, return true
      if (nameIndex === name.length) {
        return true;
      }
    }
  }

  // If we finish the loop and haven't matched the entire name, return false
  return false;
}

console.log(isNameInString('Across the rivers', 'chris')); // true
console.log(isNameInString('Next to a lake', 'chris')); // false
console.log(isNameInString('Under a sea', 'chris')); // false
console.log(isNameInString('A crew that boards the ship', 'chris')); // false
console.log(isNameInString('A live son', 'Allison')); // false

/* 
Explanation

Case Insensitivity:
Both strings are converted to lowercase to ensure case-insensitive comparison.

Pointer Method:
A pointer nameIndex is initialized to track the position in the name string.
As we iterate over the characters in str, we check if the current character matches the character at nameIndex in name.

Matching:
If a match is found, we increment nameIndex to check the next character in name.
If all characters in name are found in order (nameIndex === name.length), we return true.

End of Iteration:
If the loop completes without matching all characters of name in order, we return false.

Efficiency
Time Complexity: 
O(n), where n is the length of str. We traverse str once.
Space Complexity: 
O(1), since we only use a few variables for tracking.
*/
