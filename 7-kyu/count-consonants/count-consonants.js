function countConsonants(text) {
  // Convert text to lowercase to make comparison case-insensitive
  // Use a regular expression to match only consonants and count them
  return (text.match(/[^aeiou\s\d\W_]/gi) || []).length;
}

console.log(countConsonants('Hello, World!')); // Output: 7
console.log(countConsonants('AEIOU aeio u')); // Output: 0
console.log(countConsonants('123_@!')); // Output: 0

/* 
Explanation:
text.match(/[^aeiou\s\d\W_]/gi):

/[^aeiou\s\d\W_]/: This is a regular expression that matches:
[^...]: Anything not listed inside the brackets.
aeiou: Excludes vowels.
\s: Excludes whitespace characters.
\d: Excludes digits.
\W: Excludes non-word characters (like punctuation).
_: Excludes underscores.
g: Global flag to find all matches.
i: Case-insensitive flag.

|| []:
If match returns null (no consonants in the text), default to an empty array to avoid errors.

.length:
Counts the number of matched consonants.
*/
