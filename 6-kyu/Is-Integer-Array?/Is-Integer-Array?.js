function isIntArray(arr) {
  // Check if the input is not an array, return false
  if (!Array.isArray(arr)) return false;

  // Use Array.every() to check all elements in the array
  return arr.every(
    // Ensure each element is a number and has no decimals
    (el) => Number.isInteger(el)
  );
}

// Test Cases:
console.log(isIntArray([1, 2, 3])); // true
console.log(isIntArray([1.0, 2.0, 3.0])); // true
console.log(isIntArray([1.1, 2, 3])); // false
console.log(isIntArray([])); // true
console.log(isIntArray('not an array')); // false
console.log(isIntArray([1, null, 3])); // false
console.log(isIntArray([1, 2, undefined])); // false

/* 
Explanation:

Input Validation: The function first checks if the input is an array using Array.isArray. If the input is not an array, it immediately returns false.

Empty Array Check: An empty array will naturally pass Array.every since there are no elements to fail the condition, ensuring it returns true as required.

Array Element Validation:
The Array.every method is used to test whether all elements in the array satisfy the condition.
Number.isInteger(el) checks if each element is an integer. This method returns true for integers and false otherwise.
*/
