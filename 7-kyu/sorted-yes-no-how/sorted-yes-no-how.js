function isSortedAndHow(arr) {
  // Check if the array is sorted in ascending order
  const isAscending = arr.every((val, i) => i === 0 || arr[i - 1] <= val);

  // Check if the array is sorted in descending order
  const isDescending = arr.every((val, i) => i === 0 || arr[i - 1] >= val);

  // If it's sorted in ascending, return "yes, ascending"
  if (isAscending) return 'yes, ascending';

  // If it's sorted in descending, return "yes, descending"
  if (isDescending) return 'yes, descending';

  // If neither, return "no"
  return 'no';
}

/* 
Explanation:

isAscending:
Uses the every method to check if all elements in the array satisfy the condition of being greater than or equal to the previous element. This ensures the array is sorted in ascending order.

isDescending:
Similarly, checks if all elements in the array satisfy the condition of being less than or equal to the previous element. This ensures the array is sorted in descending order.

Return Statement:
If the array is sorted in ascending order, the function returns "yes, ascending".
If it’s sorted in descending order, it returns "yes, descending".
If neither condition is satisfied, the function returns "no".

This solution is concise and efficient, iterating through the array a maximum of two times (O(n) complexity). It checks both sorting conditions in an easy-to-understand and optimized way.
*/
