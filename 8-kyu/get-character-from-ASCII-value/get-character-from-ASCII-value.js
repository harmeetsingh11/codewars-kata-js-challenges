function getAsciiChar(num) {
  // Use String.fromCharCode to convert the number to its ASCII character
  return String.fromCharCode(num);
}

/* 
Explanation:

String.fromCharCode(num):
This method converts a Unicode value (integer) into its corresponding character.
In the context of ASCII, it works perfectly since ASCII values are a subset of Unicode.

Input Validation (Optional):
If necessary, you could add a check to ensure the input num is within the valid ASCII range (0–127). For simplicity and efficiency, it's not included here unless specified.
*/
