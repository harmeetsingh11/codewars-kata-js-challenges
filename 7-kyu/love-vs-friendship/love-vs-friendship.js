function wordsToMarks(word) {
  // Calculate the sum of alphabet positions by converting each character to its position (a=1, b=2, ..., z=26)
  return [...word].reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
}

/* 
Explanation:

Convert Characters to Positions:
We use char.charCodeAt(0) - 96 to get the alphabetical position of each character (a has a char code of 97, so 97 - 96 = 1, b becomes 2, and so on).

Sum Alphabet Positions:
We use reduce() to accumulate the sum of the alphabet positions for all characters in the string.
[...word] spreads the characters into an array, allowing reduce() to iterate over them.

Return Result:
The function returns the total sum of the alphabet positions as the value of the word.

This solution is optimal (O(n) time complexity) and concise, handling any lowercase word input efficiently.
*/
