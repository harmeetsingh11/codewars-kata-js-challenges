function isMonotone(heights) {
  // Check if every element is less than or equal to the next element.
  return heights.every((val, i) => i === 0 || val >= heights[i - 1]);
}

console.log(isMonotone([1, 2, 3])); // true
console.log(isMonotone([1, 1, 2])); // true
console.log(isMonotone([1])); // true
console.log(isMonotone([3, 2, 1])); // false
console.log(isMonotone([3, 2, 2])); // false
console.log(isMonotone([])); // true

/* 
Explanation:

Empty Array:
The every method returns true for an empty array, which satisfies the condition for monotonicity.

Single Element Array:
A single-element array is inherently monotonic.

General Case:
The every method iterates through the array.
For each element val at index i, it checks if it's greater than or equal to the previous element (heights[i - 1]).
The condition i === 0 ensures no comparison is made for the first element.

Efficiency:
The every method runs in O(n) time complexity, where n is the length of the array.
It stops early if a violation of monotonicity is found, making it efficient.
*/
