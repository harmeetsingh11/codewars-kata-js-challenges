function maxMinDifference(lst) {
  // Return 0 if the list is empty or has a single element
  if (lst.length <= 1) return 0;

  // Find the maximum and minimum values using Math.max and Math.min with spread syntax
  const max = Math.max(...lst);
  const min = Math.min(...lst);

  // Return the difference between the maximum and minimum values
  return max - min;
}

// Examples
console.log(maxMinDifference([1, 2, 3, 4])); // Output: 3 (4 - 1 = 3)
console.log(maxMinDifference([1, 2, 3, -4])); // Output: 7 (3 - (-4) = 7)
console.log(maxMinDifference([])); // Output: 0 (empty array)
console.log(maxMinDifference([10])); // Output: 0 (single element)

/* 
Explanation

Edge Cases:
If the array is empty or contains a single element, we directly return 0 since there's no difference to calculate.

Finding Max and Min:
Use the Math.max and Math.min functions along with the spread syntax (...) to efficiently find the largest and smallest numbers in the array.

Calculate Difference:
Subtract the smallest value (min) from the largest value (max) to get the desired difference.
*/
