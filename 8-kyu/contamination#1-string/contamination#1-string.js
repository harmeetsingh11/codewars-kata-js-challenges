function contamination(text, char) {
  // If text or char is empty, return an empty string; otherwise, repeat char for the length of text
  return text && char ? char.repeat(text.length) : '';
}

/* 
Explanation:

Check for Empty Input:
We first check if text or char is empty. If either is empty, we return an empty string immediately.

Repeat Character:
If both text and char are non-empty, we use char.repeat(text.length) to create a new string where char is repeated for the length of text.

Return the Result:
The result is either the repeated string or an empty string based on the initial condition.

This approach is optimal with O(n) time complexity due to repeat, where n is the length of text. It’s efficient and handles all edge cases concisely.
*/
