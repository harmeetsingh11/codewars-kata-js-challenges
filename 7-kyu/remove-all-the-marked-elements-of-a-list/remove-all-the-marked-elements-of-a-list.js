function removeElements(arr, valuesToRemove) {
  // Convert `valuesToRemove` to a Set for efficient lookups
  const toRemoveSet = new Set(valuesToRemove);

  // Use `filter` to create a new array excluding elements in `toRemoveSet`
  return arr.filter((num) => !toRemoveSet.has(num));
}

// Examples
console.log(removeElements([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])); // [2, 2, 4]
console.log(
  removeElements([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])
); // [5, 6, 7, 8]
console.log(removeElements([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3])); // [8, 7, 6, 5, 1]

/* 
Explanation:

Efficient Lookups with Set:
The Set data structure is used for valuesToRemove because checking for existence in a Set (toRemoveSet.has(num)) is an O(1) operation, making it faster than using an array for large inputs.

Filtering Elements:
The filter method iterates through the array arr and includes only those elements that are not in toRemoveSet.

This solution is efficient with a time complexity of O(n+m), where:
n is the length of arr.
m is the length of valuesToRemove.
*/
