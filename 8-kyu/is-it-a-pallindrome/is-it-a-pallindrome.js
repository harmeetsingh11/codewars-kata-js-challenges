function isPalindrome(str) {
  // Convert the string to lowercase to make the check case-insensitive
  str = str.toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

/* 
Explanation:

Case Insensitivity:
We convert the string to lowercase with str.toLowerCase() so that the palindrome check ignores case differences.

Reverse Comparison:
We split the string into an array of characters using str.split('').
We reverse the array with .reverse() and then join it back into a string with .join('').
Finally, we compare the original lowercase string to its reversed version. If they are the same, the string is a palindrome, so we return true; otherwise, we return false.

This solution is optimal with a time complexity of O(n), where n is the length of the string, due to the single pass needed for reversing and joining.
*/
