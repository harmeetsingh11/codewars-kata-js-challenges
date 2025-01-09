function nthChar(words) {
  // Use map to iterate over each word and get the nth character, where n is the index
  // Join the resulting characters into a single string
  return words.map((word, index) => word[index]).join('');
}

console.log(nthChar(['yoda', 'best', 'has'])); // Output: "yes"
console.log(nthChar(['alpha', 'bravo', 'charlie'])); // Output: "abc"
console.log(nthChar([])); // Output: ""

/* 
Explanation:

map() Function:
The map() function is used to create a new array by extracting the nth character (where n is the current index of the word in the array) from each word.

Arrow Function:
(word, index) => word[index]: This concise arrow function directly extracts the character at the index position of each word.

join(''):
The join('') method concatenates the resulting array of characters into a single string.

Edge Case:
If the input array is empty ([]), map() returns an empty array, and join('') converts it into an empty string, which is the correct behavior.

This solution is efficient with a time complexity of O(n), where n is the number of words in the array. Each operation (map and join) iterates through the array once.
*/
