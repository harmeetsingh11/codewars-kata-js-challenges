function isPP(n) {
  // Iterate over possible base values (m) starting from 2
  for (let m = 2; m <= Math.sqrt(n); m++) {
    let k = 2; // Start with the smallest possible exponent
    let power = Math.pow(m, k);

    // Check increasing powers of m until power exceeds n
    while (power <= n) {
      if (power === n) return [m, k]; // Found a valid pair (m, k)
      k++;
      power = Math.pow(m, k); // Calculate next power
    }
  }

  // If no valid pair is found, return null
  return null;
}

/**
 * Explanation
 *
 * Base Range (m):
 * - The base m starts at 2 and goes up to the square root of n.
 *   This is because:
 *   - For m > sqrt(n), m^k will exceed n when k > 1.
 *
 * Exponent Increment (k):
 * - For each m, start with k = 2 (the smallest possible exponent for a perfect power)
 *   and increment k until m^k > n.
 *
 * Validation:
 * - If m^k equals n, return the pair [m, k].
 * - Otherwise, continue checking with larger k.
 *
 * Return Null:
 * - If no pair [m, k] satisfies the condition, return null.
 *
 * Complexity
 *
 * Time Complexity:
 * - The outer loop runs approximately sqrt(n) iterations.
 * - The inner loop runs approximately log(n) times for each m.
 * - Overall complexity is O(sqrt(n) * log(n)), which is efficient for moderate values of n.
 *
 * Space Complexity:
 * - The function uses O(1) additional space since it calculates powers directly
 *   without storing intermediate results.
 */
