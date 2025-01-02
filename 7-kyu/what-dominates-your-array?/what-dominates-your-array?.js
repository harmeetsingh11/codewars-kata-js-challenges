function dominator(arr) {
  // Step 1: Handle edge case of empty array
  if (arr.length === 0) return -1;

  // Step 2: Use a map to count occurrences of each element
  const countMap = new Map();
  const threshold = Math.floor(arr.length / 2);

  for (const num of arr) {
    // Increment the count of the current number
    countMap.set(num, (countMap.get(num) || 0) + 1);

    // Step 3: Check if the current number exceeds the threshold
    if (countMap.get(num) > threshold) return num;
  }

  // Step 4: If no dominator found, return -1
  return -1;
}

// Example
console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); // Output: 3
console.log(dominator([1, 2, 3, 4, 5])); // Output: -1

/* 
Explanation:

Handle Edge Case:
If the array is empty, return -1 immediately since no dominator exists.

Counting Occurrences:
Use a Map to efficiently count occurrences of each element as you iterate through the array.

Check Threshold:
Calculate the threshold as half the array's length.
For each number, check if its count exceeds the threshold. If so, return that number as the dominator.

No Dominator:
If no number meets the condition after iterating through the array, return -1.

Efficiency:
Time Complexity: O(n), where n is the length of the array. Each element is processed once.
Space Complexity: O(k), where k is the number of unique elements in the array (can be up to n in the worst case).
*/
