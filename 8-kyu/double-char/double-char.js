function doubleChar(str) {
  // Split the string into characters, map each character to itself twice, then join the result back into a string.
  return str
    .split('')
    .map((c) => c + c)
    .join('');
}

/* 
Explanation:

split(''):
This splits the input string into an array of individual characters.

map(c => c + c):
The map() function loops through each character in the array and repeats each character twice (c + c).

join(''):
Finally, join('') combines the doubled characters back into a single string.

This approach is both concise and efficient, performing all operations in a single line with linear time complexity, O(n), where n is the length of the input string.
*/
