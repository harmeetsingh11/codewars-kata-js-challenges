function catchSignChange(arr) {
  // Early return if the array is empty
  if (arr.length === 0) return 0;

  // Initialize count and loop through the array
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element and the previous one have different signs
    if ((arr[i] < 0 && arr[i - 1] >= 0) || (arr[i] >= 0 && arr[i - 1] < 0)) {
      count++;
    }
  }

  return count;
}

// Example
const arr = [1, -3, -4, 0, 5];
console.log(catchSignChange(arr)); // Output: 2

/* 
Explanation

Empty Array Handling:
If the input array is empty, return 0 immediately, as there are no sign changes to count.

Iterate Through the Array:
Start from the second element (i = 1) and check the sign of the current element compared to the previous one (i - 1).

Detect Sign Changes:
A sign change occurs when:
The current element is negative and the previous is non-negative (arr[i] < 0 && arr[i - 1] >= 0).
Or the current element is non-negative and the previous is negative (arr[i] >= 0 && arr[i - 1] < 0).

Increment Count:
If a sign change is detected, increment the count.

Return the Count:
After the loop, return the total count of sign changes.
*/
