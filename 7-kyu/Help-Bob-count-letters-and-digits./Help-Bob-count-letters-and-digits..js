function countLettersAndDigits(input) {
  // Use a regular expression to match all letters (a-zA-Z) and digits (0-9)
  // The 'g' flag ensures all matches are found in the string
  // The `match` method returns an array of all matches or null if no matches
  const matches = input.match(/[a-zA-Z0-9]/g);

  // If there are matches, return the length of the array (number of matches)
  // Otherwise, return 0 (no matches found)
  return matches ? matches.length : 0;
}

// Test cases
console.log(countLettersAndDigits('hel2!lo')); // Output: 6
console.log(countLettersAndDigits('wicked .. !')); // Output: 6
console.log(countLettersAndDigits('!?..A')); // Output: 1

/* 
Explanation:

Regular Expression:
[a-zA-Z0-9] matches any letter (lowercase or uppercase) or digit.
The g flag ensures the match method finds all occurrences in the input string.

Match Method:
input.match(/[a-zA-Z0-9]/g) returns an array of all matched characters.
If there are no matches, it returns null.

Ternary Operator:
matches ? matches.length : 0 ensures that the function correctly handles cases where no matches are found by returning 0 instead of attempting to access .length on null.
*/
