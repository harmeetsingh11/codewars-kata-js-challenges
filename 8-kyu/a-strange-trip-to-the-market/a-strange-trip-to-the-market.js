function isLockNessMonster(phrase) {
  // Check if the phrase contains "tree fiddy", "3.50", or "three fifty" (case-insensitive)
  return /tree fiddy|3\.50|three fifty/i.test(phrase);
}

/* 
Explanation:

Regular Expression Matching:
We use a regular expression /tree fiddy|3\.50|three fifty/i to match the three variations of "tree fiddy" that indicate the Loch Ness Monster:
"tree fiddy"
"3.50" (note the escaped . with \ to match the literal period)
"three fifty"
The i flag makes the matching case-insensitive.

.test() Method:
We use .test(phrase) to check if the phrase contains any of these variations. If found, it returns true, meaning we’re dealing with the Loch Ness Monster; otherwise, it returns false.
*/
