function alternateArray(n, val1, val2) {
  // Create an array of size n by mapping indices to alternating values
  return Array.from({ length: n }, (_, i) => (i % 2 === 0 ? val1 : val2));
}

console.log(alternateArray(5, true, false)); // [true, false, true, false, true]
console.log(alternateArray(10, 'blue', 'red')); // ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
console.log(alternateArray(0, 'one', 'two')); // []

/* 
Explanation:

Array.from:
Used to create an array of the desired size (n).
The length property in { length: n } sets the size of the array.

Mapping with indices:
The (_, i) in the mapping function provides access to the index i for each array element.
The ternary condition (i % 2 === 0 ? val1 : val2) ensures that elements alternate between val1 and val2.

Efficiency:
The approach uses a single pass over the array (O(n) time complexity).
It avoids unnecessary intermediate steps, making it memory efficient.

Edge Case:
If n is 0, the array length is 0, so the result is an empty array [].
*/
