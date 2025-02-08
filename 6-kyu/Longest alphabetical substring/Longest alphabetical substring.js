function longestAlphabeticalSubstring(s) {
  let maxSub = '',
    currentSub = s[0];

  for (let i = 1; i < s.length; i++) {
    // If the current character follows the alphabetical order, add it to the current substring
    if (s[i] >= s[i - 1]) {
      currentSub += s[i];
    } else {
      // If not, check if the current substring is the longest found so far
      if (currentSub.length > maxSub.length) {
        maxSub = currentSub;
      }
      // Start a new substring from the current character
      currentSub = s[i];
    }
  }

  // Final check in case the longest substring is at the end
  return currentSub.length > maxSub.length ? currentSub : maxSub;
}

console.log(longestAlphabeticalSubstring('asdfaaaabbbbcttavvfffffdf')); // Output: "aaaabbbbctt"

/* 
Explanation:
1. Initialize `maxSub` (to track the longest substring) and `currentSub` (to store the current substring).
2. Iterate through the string:
   - If the current character is greater than or equal to the previous one, append it to `currentSub`.
   - Otherwise, check if `currentSub` is the longest found so far and update `maxSub` accordingly, then reset `currentSub`.
3. After the loop, do a final comparison to ensure the last `currentSub` is considered.
4. Return the longest alphabetical substring.

This solution runs in **O(n) time complexity**, making it efficient for large inputs up to 10,000 characters. 
*/
