function filterHomogenous(arrays) {
  // Filter the input array, keeping only those subarrays that meet two conditions:
  return arrays.filter((subArray) => {
    // Condition 1: The subarray must not be empty.
    if (subArray.length === 0) return false;

    // Condition 2: All elements in the subarray must be of the same type.
    const firstType = typeof subArray[0]; // Get the type of the first element.
    return subArray.every((item) => typeof item === firstType); // Check all elements.
  });
}

const input = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
console.log(filterHomogenous(input)); // Output: [[1, 5, 4], ['b']]

/* 
Explanation:

filter Method: We use filter to create a new array containing only the subarrays that meet the specified conditions.

Condition 1: Empty arrays are immediately rejected using if (subArray.length === 0).

Condition 2: For non-empty subarrays, we check if all elements are of the same type using every.
typeof subArray[0] gets the type of the first element.
every ensures all elements in the subarray match this type.

Return Order: Since filter does not change the order of elements, the resultant array retains the original order of the subarrays.
*/
