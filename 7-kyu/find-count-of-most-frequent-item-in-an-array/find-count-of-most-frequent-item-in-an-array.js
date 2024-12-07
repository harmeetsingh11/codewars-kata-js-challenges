function mostFrequentCount(arr) {
  if (arr.length === 0) return 0; // Handle edge case for empty array

  const frequencyMap = {}; // Object to store frequencies
  let maxCount = 0; // Variable to track the maximum frequency

  // Populate frequency map and update maxCount
  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1; // Increment count for the number
    maxCount = Math.max(maxCount, frequencyMap[num]); // Update maxCount if current count is higher
  }

  return maxCount; // Return the highest frequency count
}

// Example
const input = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
console.log(mostFrequentCount(input)); // Output: 5

/* 
Explanation:

Edge Case: The function checks if the input array is empty (arr.length === 0) and directly returns 0 since there are no elements.

Frequency Map: A frequencyMap object is used to count occurrences of each number.
For each number in the array, the frequency is incremented. If the number doesn't exist in the map yet, its count starts at 0 and is incremented to 1.

Track Maximum Frequency: maxCount keeps track of the highest frequency seen during the loop.

Efficiency: The algorithm iterates through the array once (O(n)) and performs constant-time operations for each element.

Return Value: After processing the array, maxCount holds the count of the most frequent element, which is returned.
*/
