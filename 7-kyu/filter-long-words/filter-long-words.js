function getLongWords(sentence, n) {
  // Split the sentence into words, filter words longer than 'n', and return the result.
  return sentence.split(' ').filter((word) => word.length > n);
}

// Example
const input = 'The quick brown fox jumps over the lazy dog';
const n = 4;
const result = getLongWords(input, n);
console.log(result); // Output: ['quick', 'brown', 'jumps']

/* 
Explanation:

Splitting the sentence:
sentence.split(' ') splits the input string into an array of words based on spaces.

Filtering words:
.filter(word => word.length > n) iterates through the array of words and keeps only those whose length is greater than n.

Returning the result:
The filtered array is returned, containing all words longer than n.
*/
