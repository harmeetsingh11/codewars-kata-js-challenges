function isAllPossibilities(arr) {
  // Check if the array length matches the number of unique elements
  // and that the minimum element is 0 and the maximum element is arr.length - 1
  return (
    new Set(arr).size === arr.length &&
    Math.min(...arr) === 0 &&
    Math.max(...arr) === arr.length - 1
  );
}

console.log(isAllPossibilities([1, 2, 0, 3])); // True
console.log(isAllPossibilities([0, 1, 2, 2, 3])); // False
console.log(isAllPossibilities([0])); // True

/* 
Explanation:

Unique Elements Check:
new Set(arr).size === arr.length ensures that all elements in the array are unique.

Minimum Value Check:
Math.min(...arr) === 0 confirms that the array contains the number 0.

Maximum Value Check:
Math.max(...arr) === arr.length - 1 verifies that the array includes the highest number expected (arr.length - 1).

Efficiency:
Time Complexity: O(n), where n is the length of the array.
new Set(arr) and Math.min/Math.max each iterate over the array once.
Space Complexity: O(n) for the Set to store unique elements.
*/
