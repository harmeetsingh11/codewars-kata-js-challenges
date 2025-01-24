function noRepeat(str) {
  // Create an object to count occurrences of each character
  const charCount = {};

  // Iterate over the string and count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate over the string again to find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
}

// Test cases
console.log(noRepeat('aabbccdde')); // => "e"
console.log(noRepeat('wxyz')); // => "w"
console.log(noRepeat('testing')); // => "e"

/* 
Explanation:

Counting Occurrences: We first create an object charCount to store the count of each character in the string. We loop through the string and update the count for each character.

Finding the First Non-Repeating Character: After counting the occurrences, we loop through the string again to check each character. The first character that appears only once in charCount is returned.

Time Complexity: The time complexity is O(n) where n is the length of the string because we iterate over the string twice, each iteration taking O(n). This is efficient for this problem.
*/
