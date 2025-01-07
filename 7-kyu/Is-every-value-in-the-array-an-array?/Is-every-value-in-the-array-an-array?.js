function isEveryValueArray(arr) {
  // Use Array.prototype.every to check if all elements in the array are arrays
  return arr.every(Array.isArray);
}

// Test cases
console.log(isEveryValueArray([[1], [2]])); // true
console.log(isEveryValueArray(['1', '2'])); // false
console.log(isEveryValueArray([{ 1: 1 }, { 2: 2 }])); // false

/* 
Explanation:

Array.prototype.every:
The every method tests whether all elements in an array pass a provided test (callback function).
It stops checking further as soon as it finds an element that does not satisfy the condition, making it efficient.

Array.isArray:
The built-in Array.isArray method checks if a value is an array.
Using this as the callback for every, it verifies that each element of the main array is an array.

Efficiency:
This solution runs in O(n) time complexity, where n is the number of elements in the input array, as it checks each element once and stops early if it finds a non-array element.
*/
