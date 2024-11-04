function stringClean(str) {
  // Use a regular expression to replace all digits (0-9) with an empty string
  return str.replace(/\d/g, '');
}

/* 
Explanation:

Regular Expression:
The \d pattern matches any digit (0-9).
The g flag ensures that it searches for all digits in the string, not just the first one.

Replacement:
str.replace(/\d/g, '') removes all occurrences of digits from the string by replacing them with an empty string ('').

Return the Result:
The cleaned string, with all non-numeric characters preserved, is returned directly.
*/
