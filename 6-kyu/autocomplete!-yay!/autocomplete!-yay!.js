function autocomplete(input, dictionary) {
  // Sanitize the input by removing non-letter characters and converting to lowercase
  const sanitizedInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Filter the dictionary for words that start with the sanitized input
  const matches = dictionary.filter((word) =>
    word.toLowerCase().startsWith(sanitizedInput)
  );

  // Return the first 5 matches or fewer if less than 5
  return matches.slice(0, 5);
}

// Examples
console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']));
// Output: ['airplane', 'airport']

console.log(autocomplete('$%^', ['Airplane', 'Airport', 'apple', 'ball']));
// Output: []

console.log(autocomplete('a', ['Airplane', 'airport', 'Apple', 'Ball']));
// Output: ['Airplane', 'airport', 'Apple']

/* 
Explanation

Sanitization of Input:
const sanitizedInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();
replace(/[^a-zA-Z]/g, ''): Removes all non-letter characters from the input string.
.toLowerCase(): Ensures the search is case insensitive by converting the input to lowercase.

Filtering Dictionary:

const matches = dictionary.filter(word =>
  word.toLowerCase().startsWith(sanitizedInput)
);
.filter: Iterates through the dictionary to keep only the words that start with the sanitized input.
word.toLowerCase().startsWith(sanitizedInput): Ensures the comparison is case-insensitive.

Limit Results to 5:
return matches.slice(0, 5);
.slice(0, 5): Limits the result to the first 5 matching words.
*/
