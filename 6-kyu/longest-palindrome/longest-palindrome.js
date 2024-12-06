function longestPalindrome(s) {
  // Edge case: If the string is empty, return 0
  if (!s) return 0;

  let maxLength = 1; // Minimum palindrome length is 1 (single character)

  // Helper function to expand around the center and find the palindrome
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Update maxLength if the current palindrome is longer
      maxLength = Math.max(maxLength, right - left + 1);
      left--; // Move left pointer outward
      right++; // Move right pointer outward
    }
  };

  // Loop through the string to consider each character as a center
  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (single center)
    expandAroundCenter(i, i);
    // Check for even-length palindromes (dual center)
    expandAroundCenter(i, i + 1);
  }

  return maxLength;
}

// Examples
console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('aab')); // 2
console.log(longestPalindrome('abcde')); // 1
console.log(longestPalindrome('zzbaabcd')); // 4
console.log(longestPalindrome('')); // 0

/* 
Explanation:

Edge Case Handling:
If the input string is empty, return 0.

Initialize Variables:
maxLength keeps track of the length of the longest palindrome found, initialized to 1 because the minimum length of any palindrome is 1 (a single character).

Expand Around Center:
This helper function takes two pointers (left and right) and expands outward as long as the substring remains a palindrome.
If the substring is longer than the current maxLength, update it.

Loop Through String:
Consider each character as the center of a potential palindrome.
Check for both odd-length palindromes (single center) and even-length palindromes (dual center).

Time Complexity:
Each expansion around a center is linear in the worst case, and there are O(n) centers (2n - 1, including odd and even centers).
Hence, the overall time complexity is O(n²).

Space Complexity:
Since we are not using extra space for dynamic programming or storing substrings, the space complexity is O(1).
*/
