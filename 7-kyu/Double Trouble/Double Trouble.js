function removeConsecutiveSum(x, t) {
  // Iterate through the array from left to right
  for (let i = 0; i < x.length - 1; i++) {
    // If the sum of two consecutive numbers equals the target
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1); // Remove the second number
      i--; // Adjust index to recheck the new pair
    }
  }
  return x; // Return the modified array
}

console.log(removeConsecutiveSum([1, 2, 3, 4, 5], 3)); // Output: [1, 3, 4, 5]

/* 
Explanation:

Loop through the array, checking consecutive pairs.

If their sum equals the target t, remove the second number using splice(i + 1, 1).

Decrement i to re-evaluate the new pair after removal.

Return the modified array.
*/
