function filterEvenLengthWords(words) {
  // Use the filter method to iterate over the array and retain words with even lengths.
  return words.filter((word) => word.length % 2 === 0);
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

/* 
Explanation:

Filter Method:
The filter method is a concise way to iterate through an array and create a new array based on a condition.

Condition:
For each word, word.length % 2 === 0 checks if the length of the word is an even number.
If true, the word is included in the output array; otherwise, it is skipped.

Efficiency:
The filter method operates with a time complexity of O(n), where n is the number of elements in the array.
This is efficient as it processes each element exactly once.
*/
