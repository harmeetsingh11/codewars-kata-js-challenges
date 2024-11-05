function sum_pairs(ints, sum) {
  const seen = new Set(); // Set to keep track of seen numbers

  for (let num of ints) {
    let complement = sum - num; // Calculate the complement needed to reach the sum

    if (seen.has(complement)) {
      // If the complement is in the set, we've found the pair
      return [complement, num];
    }

    seen.add(num); // Add the current number to the set
  }

  return undefined; // If no pair is found, return undefined
}

/* 
Explanation:

Initialize a Set (seen):
The Set stores numbers we have already iterated over. This helps in quickly checking if the required complement to reach the target sum exists.

Loop Through Each Number:
For each number num in the list, we calculate its complement (sum - num).
If the complement is already in seen, this means we have encountered two numbers (complement and num) that add up to sum. We immediately return this pair.

Add Number to Set:
If the complement is not found, we add the current number num to seen and continue iterating.

Return Undefined if No Pair Found:
If we reach the end of the list without finding a pair, we return undefined.

Efficiency:
This approach is O(n) because it uses a single pass through the list and constant-time operations with the Set.
It’s efficient for large lists (e.g., millions of elements) because it avoids nested loops.

This solution is both concise and optimal for performance on large inputs.
*/
