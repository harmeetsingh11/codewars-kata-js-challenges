function decompose(n) {
  // Recursive helper function to find the decomposition
  function helper(remaining, max) {
    // Base case: no remaining value to decompose
    if (remaining === 0) return [];

    // Iterate backwards from the maximum value (max)
    for (let i = max; i > 0; i--) {
      let square = i * i;
      if (square <= remaining) {
        // Recursive call with reduced remaining value and next maximum
        let result = helper(remaining - square, i - 1);
        if (result) {
          return [...result, i]; // Add current number to the result
        }
      }
    }
    return null; // No valid decomposition found
  }

  // Start the recursive process with n² and n-1
  return helper(n * n, n - 1) || null;
}

// Examples
console.log(decompose(11)); // Output: [1, 2, 4, 10]
console.log(decompose(50)); // Output: [1, 3, 5, 8, 49]
console.log(decompose(4)); // Output: null

/*
Explanation of the Code

Recursive Decomposition:
The helper function aims to break down the square n^2 into smaller squares.
It starts with the largest possible number i (less than n) and iteratively tries to include i^2 in the decomposition.

Base Case:
When remaining === 0, the exact decomposition is found, and an empty array is returned.

Backtracking:
For each potential number i, if i^2<-remaining, the function recursively attempts to decompose the remaining value (remaining−i^2) with the next smaller number (i−1).
If a valid decomposition is found, the current number i is appended to the result.

Optimization:
By iterating backward and trying larger numbers first, the solution ensures that the decomposition uses the largest possible values.

Edge Cases:
If no valid decomposition exists (e.g., for n=4), the function returns null.
*/
