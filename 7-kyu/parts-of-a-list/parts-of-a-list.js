function partlist(arr) {
  // Generate all possible ways to split the array into two non-empty parts
  return arr.slice(0, -1).map((_, i) => [
    arr.slice(0, i + 1).join(' '), // First part: join elements from start to i
    arr.slice(i + 1).join(' '), // Second part: join elements from i+1 to end
  ]);
}

/* 
Explanation:

arr.slice(0, -1):
This creates a copy of the array excluding the last element, which sets up the range for possible split points.
We don’t need the last element in this iteration because the last element alone can’t form the first part in a two-part split.

.map((_, i) => [...]):
We use .map to iterate over each index i where a split can happen (up to the second last element).
For each index i, we create an array with two strings:
First Part: arr.slice(0, i + 1).join(' ') — takes elements from the start to i (inclusive) and joins them into a single string.
Second Part: arr.slice(i + 1).join(' ') — takes elements from i + 1 to the end and joins them into another string.

Result:
This approach generates all the valid two-part splits in the same order as in the original array and outputs them as an array of pairs.

This solution is efficient (O(n^2) time complexity due to slicing and joining) and concise.
*/
