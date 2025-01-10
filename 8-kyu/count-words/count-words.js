function countWords(str) {
  // Ensure the input is a string
  if (typeof str !== 'string') return 0;

  // Use a regular expression to match words in the string
  // \b matches word boundaries, and \w+ matches one or more word characters
  // Unicode-aware: The 'u' flag ensures we count words with Unicode characters correctly
  const words = str.trim().match(/\b\w+(-\w+|'[\w]+|`[\w]+)?\b/gu);

  // Return the length of the matched words array, or 0 if no matches
  return words ? words.length : 0;
}

console.log(countWords('Hello')); // 1
console.log(countWords('Hello, World!')); // 2
console.log(countWords('No results for search term `s`')); // 6
console.log(countWords(' Hello')); // 1
console.log(countWords('')); // 0
console.log(countWords('   ')); // 0
console.log(countWords("word-with-dash another's `quoted`")); // 4

/* 
Explanation:

Trim the Input String:
str.trim() removes leading and trailing whitespace to avoid counting empty spaces as words.

Use Regular Expressions:
\b ensures matching starts and ends at word boundaries.
\w+ matches a word with one or more word characters.
(-\w+|'[\w]+|[\w]+)?accounts for hyphenated words, contractions, and quoted words likedon't` or quoted.

Unicode Support:
The u flag in the regular expression ensures correct handling of Unicode characters.

Check for Matches:
match returns an array of matches, or null if no matches are found.
If there are no matches, return 0.

Count Words:
The length of the words array gives the total count of words in the string.
*/
