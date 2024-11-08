function reverse(arr) {
  const result = [];
  // Iterate over the array from the end to the start
  for (let i = arr.length - 1; i >= 0; i--) {
    // Push each element into the result array
    result.push(arr[i]);
  }
  return result;
}

/* 
Explanation:

Create an Empty Array: We initialize an empty array result to store the reversed elements.

Loop Backwards: We iterate over the input array arr from the last element to the first (i = arr.length - 1 to i >= 0).
This allows us to access elements in reverse order without modifying the original array.

Push to Result: For each iteration, we push the current element arr[i] into the result array.

Return Result: After the loop completes, result contains the elements in reverse order, which we then return.

This method is efficient (O(n) time complexity) and avoids using built-in reverse functions, providing a straightforward solution for reversing an array.
*/
