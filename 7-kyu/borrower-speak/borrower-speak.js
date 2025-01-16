// Converts the input text to "borrower speak" by removing all punctuation,
// spaces, and converting uppercase letters to lowercase.

// @param {string} s - The input text.
// @return {string} - The converted "borrower speak" text.
function toBorrowerSpeak(s) {
  // Use a regular expression to remove punctuation and spaces, and convert to lowercase
  return s.replace(/[^\w]/g, '').toLowerCase();
}

const inputText = 'What fick damn cake!';
const borrowerSpeak = toBorrowerSpeak(inputText);
console.log(borrowerSpeak); // Output: "whatfickdamncake"

/* 
Explanation of Changes:

Regex Pattern: /[^\w]/g
\w matches any word character (letters, digits, and underscores).
^ negates the set, so [^\w] matches anything that is not a word character (punctuation, symbols, and spaces).
g ensures all matches are replaced.

replace Method:
Removes all non-word characters, including spaces.

toLowerCase:
Converts the entire string to lowercase.
*/
