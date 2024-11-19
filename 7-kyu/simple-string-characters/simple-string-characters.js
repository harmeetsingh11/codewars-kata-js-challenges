function countCharacterTypes(str) {
  // Initialize counters for uppercase, lowercase, digits, and special characters
  const counts = [0, 0, 0, 0];

  // Iterate through each character in the string
  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      counts[0]++; // Increment uppercase counter
    } else if (/[a-z]/.test(char)) {
      counts[1]++; // Increment lowercase counter
    } else if (/\d/.test(char)) {
      counts[2]++; // Increment digit counter
    } else {
      counts[3]++; // Increment special character counter
    }
  }

  return counts;
}

/* 
Explanation:

Initialization:
We create an array counts initialized to [0, 0, 0, 0] to hold the counts of uppercase letters, lowercase letters, numbers, and special characters, respectively.

Iteration through string:
We use a for...of loop to iterate through each character in the input string.

Regex checks:
/[A-Z]/: Matches uppercase letters.
/[a-z]/: Matches lowercase letters.
/\d/: Matches digits (numbers).
If none of the above matches, it is classified as a special character.

Incrementing counts:
Based on which condition matches, we increment the corresponding counter in the counts array.

Return the result:
The final counts array is returned, providing the counts in the required order.

This approach is efficient (O(n) time complexity) as it processes each character once.
*/
