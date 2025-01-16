function combineArrays(arr1, arr2) {
  // Initialize an empty array to hold the combined result
  const result = [];
  // Determine the maximum length of the two arrays
  const maxLength = Math.max(arr1.length, arr2.length);

  // Loop through up to the longest array length
  for (let i = 0; i < maxLength; i++) {
    // Add elements from the first array if the index exists
    if (i < arr1.length) result.push(arr1[i]);
    // Add elements from the second array if the index exists
    if (i < arr2.length) result.push(arr2[i]);
  }

  return result; // Return the combined array
}

console.log(combineArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
// Output: ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]

console.log(combineArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));
// Output: [1, 'a', 2, 'b', 3, 'c', 'd', 'e', 'f']

/* 
Explanation:

Initialization:
An empty array result is initialized to store the final combined array.
The maxLength is determined using Math.max to ensure we loop through the longer array.

Looping:
A for loop runs from 0 to maxLength - 1.

Inside the loop:
Elements from arr1 are added to result if the current index exists (i < arr1.length).
Similarly, elements from arr2 are added if the current index exists (i < arr2.length).

Output:
After the loop completes, the combined array is returned.

Efficiency:
Time Complexity: O(n+m), where n and m are the lengths of arr1 and arr2.
Space Complexity: O(n+m), as we create a new array to store the result.
*/
