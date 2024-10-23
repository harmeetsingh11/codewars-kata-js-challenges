function sumOfDifferences(arr) {
  // If array is empty or has only one element, return 0
  if (arr.length < 2) return 0;

  // Sort array in descending order
  arr.sort((a, b) => b - a);

  // Sum the differences between consecutive pairs
  return arr.reduce(
    (sum, curr, i) => (i > 0 ? sum + (arr[i - 1] - curr) : sum),
    0
  );
}
/* 

Explanation:

Check for Empty or Single Element Array:
If the array has less than 2 elements, there's no valid consecutive pair to compute differences. Hence, return 0 immediately.

Sorting the Array in Descending Order:
arr.sort((a, b) => b - a) sorts the array in descending order, ensuring that the largest number comes first.

Summing the Differences:
arr.reduce((sum, curr, i) => ...):
The reduce function is used to accumulate the sum of differences between consecutive pairs.
We check if i > 0 to ensure we are summing the difference between the current element and the previous one (arr[i - 1] - curr).
The result is the sum of all differences between adjacent elements.

This solution is both concise and efficient with a time complexity of O(n log n) due to the sorting step, which is optimal for this problem
*/
