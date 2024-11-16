function solve(arr) {
  // Create a new array by filtering out elements that have a duplicate to their right
  return arr.filter((num, index) => arr.lastIndexOf(num) === index);
}

/* 
Explanation:

lastIndexOf():
arr.lastIndexOf(num) returns the index of the last occurrence of the number num in the array.
By comparing this to the current index, we ensure only the last occurrence of each number is retained.

filter():
The filter() method creates a new array containing only the elements where the condition arr.lastIndexOf(num) === index is true.
This ensures duplicates are removed while keeping the rightmost occurrence.

Efficiency:
While lastIndexOf() is O(n), it works efficiently here because it's used once for each element, making the overall time complexity O(n²) in the worst case for large arrays.
For practical use, this method is simple, readable, and concise.

Example Walkthrough:
For input [3, 4, 4, 3, 6, 3]:
At index 0 (num = 3), lastIndexOf(3) = 5, so it's skipped.
At index 1 (num = 4), lastIndexOf(4) = 2, so it's skipped.
At index 2 (num = 4), lastIndexOf(4) = 2, so it's included.
At index 3 (num = 3), lastIndexOf(3) = 5, so it's skipped.
At index 4 (num = 6), lastIndexOf(6) = 4, so it's included.
At index 5 (num = 3), lastIndexOf(3) = 5, so it's included.
Output: [4, 6, 3].
*/
