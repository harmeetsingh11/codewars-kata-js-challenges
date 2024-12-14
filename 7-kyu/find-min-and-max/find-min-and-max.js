function getMinMax(arr) {
  // Validate input: Ensure the array is not empty
  if (!arr || arr.length === 0) throw new Error('Array must not be empty');

  // Use the spread operator with Math.min and Math.max to find the values efficiently
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Return the values as an array in the required order
  return [min, max];
}

// Example
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(getMinMax(numbers)); // Output: [1, 9]

/* 
Explanation:

Input Validation:
Check if the array is empty or not provided. Throwing an error ensures the function doesn't behave unexpectedly.

Finding Minimum and Maximum:
The Math.min(...arr) and Math.max(...arr) functions efficiently compute the smallest and largest values in the array using the spread operator.

Return:
The result is returned as an array [min, max], as specified.
*/
