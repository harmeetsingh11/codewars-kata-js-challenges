function allNonConsecutive(arr) {
  // Initialize an empty array to store results
  const result = [];

  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is not consecutive to the previous one
    if (arr[i] !== arr[i - 1] + 1) {
      // Add the non-consecutive element's index and value as an object to the result array
      result.push({ i, n: arr[i] });
    }
  }

  // Return the result array
  return result;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 15, 16]));
// Output: [{ i: 4, n: 6 }, { i: 7, n: 15 }]

/* 
Explanation:

Initialization: Create an empty array result to store objects for non-consecutive numbers.
Iterate from the second element: Start the loop at index 1, as the first element always gets a pass.

Check for non-consecutiveness: Compare the current element with the previous element (arr[i - 1]). If the difference is not 1, the current element is non-consecutive.

Store the result: Push an object containing the index (i) and the value (n) of the non-consecutive element into the result array.

Return the result: After the loop ends, return the result array. If all elements are consecutive, the array will remain empty.

Efficient with a single loop (O(n) complexity).
*/
