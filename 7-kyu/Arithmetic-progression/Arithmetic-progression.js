/**
 * @param {number} a - The first element of the sequence.
 * @param {number} d - The common difference of the sequence.
 * @param {number} n - The number of elements in the sequence.
 * @returns {string} - A string of the first n elements, separated by ', '.
 */
function arithmeticSequenceElements(a, d, n) {
  // Use Array.from to create an array of length n and populate it
  // Each element is calculated as the first element plus the product of the index and the common difference
  return Array.from({ length: n }, (_, i) => a + i * d).join(', ');
}

// Example
console.log(arithmeticSequenceElements(1, 2, 5)); // "1, 3, 5, 7, 9"

/*
Explanation:

Array.from:
Creates an array of size n.
The second parameter is a mapping function where (_, i) provides the current index.
For each index i, calculate the element as a + i * d.

.join(', '):
Converts the array into a string, separating elements with , .
*/
