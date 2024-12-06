function ensureQuestion(str) {
  // Check if the string ends with a "?" using endsWith method
  // If yes, return the original string; otherwise, append "?" to the string
  return str.endsWith('?') ? str : str + '?';
}

/* 
Explanation:

endsWith Method:
The endsWith method checks if the string ends with a specific substring ("?" in this case).
It is efficient because it only compares the last part of the string.

Ternary Operator:
A concise way to conditionally decide the output.
If the string ends with "?", return the original string; otherwise, concatenate "?" to the end of the string.
*/
