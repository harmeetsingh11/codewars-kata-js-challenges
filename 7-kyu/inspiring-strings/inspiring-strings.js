function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Use reduce to find the longest word
  return words.reduce((longest, current) => {
    // Compare lengths; if equal, prefer the current (rightmost)
    return current.length >= longest.length ? current : longest;
  }, '');
}

// Examples
console.log(findLongestWord('red white blue')); // Output: "white"
console.log(findLongestWord('red blue gold')); // Output: "gold"

/* 
Explanation:

Splitting the String:
str.split(" ") breaks the input string into an array of words using spaces as delimiters.
Example: "red white blue" becomes ["red", "white", "blue"].

Finding the Longest Word with reduce:
The reduce function iterates over the array of words.
At each step, it compares the current word (current) with the longest word found so far (longest).
If current.length >= longest.length, it updates longest to current. This ensures that in the case of ties, the rightmost longest word is chosen.

Efficiency:
The split operation runs in O(n), where n is the length of the string.
The reduce operation iterates over the words array, also O(n).
Overall time complexity: O(n).
*/
