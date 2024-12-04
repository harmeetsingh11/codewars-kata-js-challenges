function longestVowelSubstring(s) {
  // Define a set of vowels for quick lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxLength = 0,
    currentLength = 0;

  // Iterate through each character in the string
  for (const char of s) {
    if (vowels.has(char)) {
      // Increment the current length if the character is a vowel
      currentLength++;
      // Update the maximum length if the current length exceeds it
      maxLength = Math.max(maxLength, currentLength);
    } else {
      // Reset the current length when encountering a consonant
      currentLength = 0;
    }
  }

  return maxLength; // Return the maximum length of vowel substring
}

/* 
Explanation:

Vowel Lookup Optimization:
A Set is used for vowels ('a', 'e', 'i', 'o', 'u') to ensure quick lookup (O(1) average time complexity).

Tracking Length:
currentLength: Tracks the length of the current vowel substring.
maxLength: Stores the maximum length of any vowel substring found so far.

Iterating Through the String:
If the character is a vowel, increment currentLength and update maxLength if necessary.
If the character is a consonant, reset currentLength to 0.

Return the Result:
After processing the string, maxLength contains the desired result.
*/
