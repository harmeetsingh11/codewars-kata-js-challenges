function findSmallest(arr, returnType) {
  // Find the smallest value in the array
  const smallestValue = Math.min(...arr);

  // Check the returnType and return the appropriate result
  return returnType === 'value' ? smallestValue : arr.indexOf(smallestValue);
}

/* 
Explanation:

Math.min(...arr):
Uses the spread operator ... to expand the array into individual arguments for Math.min.
Finds the smallest value in the array efficiently.

Conditional Ternary Operator:
Checks if the returnType is "value".
If true, returns the smallest value.
Otherwise, finds and returns the index of the smallest value using arr.indexOf.
*/
