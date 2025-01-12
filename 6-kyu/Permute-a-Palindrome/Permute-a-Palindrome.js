function canFormPalindrome(str) {
  // Create a set to track characters with odd frequencies
  const charSet = new Set();

  for (const char of str) {
    // Add char to set if not present; remove it if already present
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  }

  // A string can form a palindrome if at most one character has an odd frequency
  return charSet.size <= 1;
}

console.log(canFormPalindrome('madam')); // true
console.log(canFormPalindrome('adamm')); // true
console.log(canFormPalindrome('junk')); // false

/* 
Explanation:

Key Insight: A string can be rearranged into a palindrome if and only if:
At most one character has an odd frequency (for strings with odd lengths).
All characters have even frequencies (for strings with even lengths).

Efficient Approach:
Use a Set to keep track of characters with odd counts:
Add a character to the set if it isn't there.
Remove it if it is already present.
At the end, the Set will contain only characters with odd frequencies.
If the size of the set is ≤ 1, the string can form a palindrome.

Time Complexity:
The loop iterates through the string, making this approach O(n), where n is the length of the string.
Set operations (add/delete) are O(1) on average.

Space Complexity:
The space used by the set is O(k), where k is the number of unique characters in the string.
*/
