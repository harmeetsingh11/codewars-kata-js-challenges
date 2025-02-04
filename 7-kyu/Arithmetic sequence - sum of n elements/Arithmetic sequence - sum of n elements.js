function arithmetic_sequence_sum(a, r, n) {
  // Using the formula for the sum of an arithmetic sequence: S = n/2 * (2a + (n-1)r)
  return (n / 2) * (2 * a + (n - 1) * r);
}

console.log(arithmetic_sequence_sum(2, 3, 5)); // Output: 40

/*Explanation:
1. An arithmetic sequence has a constant difference \( r \) between consecutive terms.
2. The sum of the first \( n \) terms of an arithmetic sequence is given by the formula:
   \[
   S_n = \frac{n}{2} \times (2a + (n-1)r)
   \]
   - \( a \) is the first term.
   - \( r \) is the common difference.
   - \( n \) is the number of terms.
3. This formula allows us to calculate the sum in **O(1)** time complexity, making it the most efficient solution.
*/
