function stray(arr) {
  // Sort the array to group identical numbers together
  arr.sort((a, b) => a - b);

  // The unique number will either be at the beginning or end of the sorted array
  // Compare the first two elements, if they are the same, the unique number is at the end
  // Otherwise, the unique number is the first one
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

/* 
Explanation:

Sorting the Array:
By sorting the array, the identical numbers will group together, and the unique number will either be at the beginning or the end.

Logic for Finding the Unique Number:
After sorting, if the first two elements are the same, it means the unique number is at the end of the array (arr[arr.length - 1]).
If the first two elements are different, the unique number is the first one (arr[0]).

Efficiency:
Sorting takes O(nlogn), which is efficient for this problem given the array size constraint (odd-length and valid input).

This approach is concise and leverages the properties of sorted arrays to quickly identify the unique element.
*/
