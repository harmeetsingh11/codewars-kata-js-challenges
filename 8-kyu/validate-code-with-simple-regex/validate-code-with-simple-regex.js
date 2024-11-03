function validateCode(code) {
  // Check if the code starts with 1, 2, or 3 using a regex
  return /^[1-3]/.test(code);
}

/* 
Explanation:

Regular Expression:
^[1-3] matches any string that starts with 1, 2, or 3.
^ asserts the beginning of the string.
[1-3] checks if the first character is either 1, 2, or 3.

.test() Method:
The .test() method returns true if the pattern is found in the input code; otherwise, it returns false.
*/
