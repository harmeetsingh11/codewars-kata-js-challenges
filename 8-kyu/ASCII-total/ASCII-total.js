function uniTotal(str) {
  // Convert each character in the string to its ASCII value using charCodeAt
  // Use reduce to calculate the cumulative sum of ASCII values
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/* 
Explanation:

[...str]:
Converts the string into an array of characters. This ensures we can iterate over each character easily.

.reduce((sum, char) => sum + char.charCodeAt(0), 0):
Initializes the sum to 0.
Iterates over each character in the array, computes its ASCII value using charCodeAt(0), and adds it to the cumulative sum.
*/
