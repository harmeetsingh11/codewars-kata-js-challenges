function spEng(str) {
  // Use a case-insensitive regular expression to check for "English" in the string
  return /english/i.test(str);
}

/* 
Explanation:

Regular Expression:
The pattern /english/i searches for the word "English" in a case-insensitive manner (the i flag makes it case-insensitive).

.test() Method:
.test(str) returns true if the string contains the word "English" in any case, and false otherwise.
*/
