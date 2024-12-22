function minIntegersToConsecutive(arr) {
  // If the array is empty or has one element, no integers are needed
  if (arr.length <= 1) return 0;

  // Find the maximum and minimum values in the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Calculate the total numbers in the range and subtract the length of the array
  // (max - min + 1) gives the count of numbers required to make it consecutive
  return max - min + 1 - arr.length;
}

// Examples
console.log(minIntegersToConsecutive([4, 8, 6])); // 2
console.log(minIntegersToConsecutive([-1, -5])); // 3
console.log(minIntegersToConsecutive([1])); // 0
console.log(minIntegersToConsecutive([])); // 0

/* 
Explanation

Edge Case Check:
If the array has 0 or 1 element, it is already consecutive, so the result is 0.

Find Range:
Use Math.min and Math.max to find the smallest (min) and largest (max) numbers in the array.

Calculate Missing Numbers:
Compute the total number of integers in the range [min, max] using max - min + 1.
Subtract the array's length to find how many integers are missing to make the range consecutive.

This solution is efficient with a time complexity of O(n) (finding min and max in a single pass) and concise.
*/
