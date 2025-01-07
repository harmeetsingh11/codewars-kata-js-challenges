function solve(arr) {
  // Sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);
  const result = [];

  // Use two pointers: one for max (end of sorted array) and one for min (start of sorted array)
  let left = 0,
    right = sorted.length - 1;

  while (left <= right) {
    // Push the max element if still available
    if (left !== right) result.push(sorted[right--]);
    // Push the min element if still available
    result.push(sorted[left++]);
  }
  return result;
}

/* 
Explanation:

Sorting the Array:
The array is sorted in ascending order using .sort((a, b) => a - b) to easily access the smallest and largest values.

Two-Pointer Technique:
Use two pointers: one (left) starting at the beginning (smallest element) and the other (right) at the end (largest element) of the sorted array.

Alternating Insertions:
Add the largest element (sorted[right]) to the result first, then the smallest element (sorted[left]).
This alternation continues until the two pointers meet.

Edge Case:
When the array has an odd number of elements, the middle element is added last (this is handled naturally by the while (left <= right) condition).

Output:
The final array alternates between max and min values as required.

Example Execution:
For solve([15, 11, 10, 7, 12]):
Sorted Array: [7, 10, 11, 12, 15].
Processing:
Add 15 (max), then 7 (min).
Add 12 (second max), then 10 (second min).
Add 11 (remaining middle element).
Result: [15, 7, 12, 10, 11].

Complexity:
Time Complexity: O(nlogn) for sorting + O(n) for rearranging = O(nlogn).
Space Complexity: O(n) for the result array.
*/
