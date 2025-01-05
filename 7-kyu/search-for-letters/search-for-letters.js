function alphabetPresence(input) {
  // Initialize an array of 26 zeros, each representing a letter from 'a' to 'z'
  const result = Array(26).fill('0');

  // Normalize the input string to lowercase and iterate over its characters
  for (const char of input.toLowerCase()) {
    // Check if the character is a valid letter
    if (char >= 'a' && char <= 'z') {
      // Calculate the position of the letter in the alphabet (0-based index)
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      // Set the corresponding position in the result array to '1'
      result[index] = '1';
    }
  }

  // Join the result array to form a string of length 26
  return result.join('');
}

// Test cases
console.log(alphabetPresence('a   **&  cZ')); // "10100000000000000000000001"
console.log(alphabetPresence('aaaaaaa79345675')); // "10000000000000000000000000"
console.log(alphabetPresence('&%#*')); // "00000000000000000000000000"

/* 
Explanation:

Initialization:
Create an array result of length 26 filled with '0', representing the absence of all letters.

Normalize Input:
Convert the input string to lowercase to make the comparison case-insensitive.

Character Check:
Loop through each character of the string.
Check if the character is a letter between 'a' and 'z'.
If it is, calculate its zero-based index using char.charCodeAt(0) - 'a'.charCodeAt(0).

Update Result:
Set the corresponding index in result to '1' to indicate the presence of the letter.

Output:
Join the result array into a string and return it.
This approach is efficient and concise, operating in O(n), where n is the length of the input string.
*/
