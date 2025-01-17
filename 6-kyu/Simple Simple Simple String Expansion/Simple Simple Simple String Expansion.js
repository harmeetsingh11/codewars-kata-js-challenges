function expandString(input) {
  if (!input) return ''; // Handle empty string input

  let result = ''; // Final expanded string
  let repeatCount = 1; // Default repeat count

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (/\d/.test(char)) {
      // If the character is a digit, update the repeat count
      repeatCount = Number(char);
    } else {
      // If it's a letter, append it repeated by the current repeat count
      result += char.repeat(repeatCount);
    }
  }

  return result;
}

// Test cases
console.log(expandString('3D2a5d2f')); // "DDDaadddddff"
console.log(expandString('3abc')); // "aaabbbccc"
console.log(expandString('3d332f2a')); // "dddffaa"
console.log(expandString('abcde')); // "abcde"
console.log(expandString('1111')); // ""
console.log(expandString('')); // ""
console.log(expandString('7m3j4i4k2a')); // "mmmmmmmjjjiiiikkkkaa"

/* 
Explanation
1. Input Validation
If the input string is empty, return an empty string immediately.

2. Initialization
result: A string to accumulate the expanded characters.
repeatCount: Keeps track of the number of repetitions for the letters. Default value is 1.

3. Processing Each Character
Loop through each character in the string.
If the character is a digit:
Update repeatCount with the numeric value of the character.
If the character is a letter:
Append the letter to the result, repeating it repeatCount times.
Continue using the same repeatCount until a new digit updates it.

4. Return Result
After processing the input, return the accumulated result.

Why This Solution Works
Handles Edge Cases:
Empty strings return empty results.
Strings without digits retain their original structure.
Multiple consecutive digits only use the last digit.

Efficiency:
Time Complexity: O(n), where n is the length of the input string. Each character is processed exactly once.
Space Complexity: O(n), for storing the resulting string.
*/
