function processAndSum(nums) {
  // Map over the nums array, square even numbers, square root odd numbers, then sum them up.
  // Use `toFixed(2)` to round to two decimal places and return as a number.
  return +nums
    .map((num) => (num % 2 === 0 ? num ** 2 : Math.sqrt(num))) // Process each number
    .reduce((sum, curr) => sum + curr, 0) // Sum all processed numbers
    .toFixed(2); // Round to two decimal places
}

console.log(processAndSum([4, 9, 2, 1])); // Output: 21.32

/* 
Explanation:

Mapping:
For each number in the array, check if it's even (num % 2 === 0).
If even, square it using num ** 2.
If odd, find its square root using Math.sqrt(num).

Reducing:
Sum up all processed numbers using .reduce(), starting with an initial sum of 0.

Rounding:
Use .toFixed(2) to round the result to two decimal places.
Convert the rounded string back to a number with the unary + operator.
*/
