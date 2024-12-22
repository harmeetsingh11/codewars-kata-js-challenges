function sortMixedArray(arr) {
  // Separate numbers and strings into two arrays using filter
  const numbers = arr
    .filter((item) => typeof item === 'number')
    .sort((a, b) => a - b); // Sort numbers in ascending order
  const strings = arr.filter((item) => typeof item === 'string').sort(); // Sort strings in alphabetic order

  // Combine sorted numbers and strings into a single array
  return [...numbers, ...strings];
}

// Example
console.log(sortMixedArray([1, 'apple', 3, 'banana', 2, 'cherry']));
// Output: [1, 2, 3, "apple", "banana", "cherry"]

/* 
Explanation:

Filtering Numbers and Strings:
arr.filter(item => typeof item === 'number'): Extracts all elements that are numbers.
arr.filter(item => typeof item === 'string'): Extracts all elements that are strings.

Sorting:
sort((a, b) => a - b): Sorts numbers in ascending order.
sort(): Sorts strings alphabetically.

Combining:
[...numbers, ...strings]: Merges the sorted numbers and strings arrays into a single array.

This approach is efficient with a time complexity of O(nlogn) for sorting each sub-array and O(n) for filtering, making it suitable for typical usage.
*/
