// Function to find duplicates in an array
function findDuplicates(arr) {
  // Create a Set to track seen elements and another to track duplicates
  const seen = new Set();
  const duplicates = new Set();

  // Iterate over the array
  for (const item of arr) {
    if (seen.has(item)) {
      // If the item is already in 'seen', add it to 'duplicates'
      duplicates.add(item);
    } else {
      // Otherwise, add the item to 'seen'
      seen.add(item);
    }
  }

  // Convert the duplicates Set to an array to return the duplicates in order
  return Array.from(duplicates);
}

// Examples
console.log(findDuplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // Output: [4, 3, 1]
console.log(findDuplicates([0, 1, 2, 3, 4, 5])); // Output: []

/* 
Explanation:

Using Set for Efficient Lookups:
Set is used because it provides constant time complexity for lookups and additions.
The seen set tracks all elements that have been encountered in the array.
The duplicates set tracks elements that appear more than once.

Logic Flow:
As you iterate through the array:
If an element is already in seen, it means it's a duplicate, so it's added to duplicates.
Otherwise, it's added to seen.

Returning in Original Order:
The Array.from method is used to convert the duplicates set back to an array. Since sets maintain insertion order, the duplicates appear in the order they were first detected.

This approach is concise, efficient, and ensures correctness. The time complexity is O(n), where n is the length of the array, due to the single pass and constant-time operations of Set.
*/
