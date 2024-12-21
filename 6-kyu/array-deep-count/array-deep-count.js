function deepCount(array) {
  // Use reduce to iterate over elements in the array
  return array.reduce(
    (count, element) =>
      count + 1 + (Array.isArray(element) ? deepCount(element) : 0),
    0
  );
}

// Test cases
console.log(deepCount([])); // 0
console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(['x', 'y', ['z']])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7

/* 
Explanation:

Base Functionality:
The function deepCount takes an array as input.
It uses the reduce method to calculate the total count of elements.

Logic:
For each element in the array:
Add 1 to the count for the current element itself.
Check if the element is an array using Array.isArray().
If it's an array, recursively call deepCount on it to count its nested elements.
If it's not an array, just add 0 for nested elements.

Efficiency:
This approach uses a single recursive call per nested array, ensuring the solution is concise and efficient.
*/
