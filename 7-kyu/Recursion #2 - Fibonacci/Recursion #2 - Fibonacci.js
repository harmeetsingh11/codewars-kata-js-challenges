function fibonacci(n, memo = {}) {
  // Base cases: Fibonacci(1) and Fibonacci(2) are both 1
  if (n === 1 || n === 2) return 1;

  // If the value is already computed, return from memo (memoization)
  if (memo[n]) return memo[n];

  // Recursively compute Fibonacci(n) and store in memo
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

// ### Explanation:
// 1. **Base Case:**
//    - If `n` is 1 or 2, return `1` (as per the Fibonacci definition).
//
// 2. **Memoization:**
//    - We store previously computed values in an object `memo` to avoid redundant calculations.
//    - If `memo[n]` is already computed, return it directly.
//
// 3. **Recursive Call:**
//    - Compute `fibonacci(n-1) + fibonacci(n-2)`, store the result in `memo[n]`, and return it.
//
// ### **Why this is efficient?**
// - **Avoids redundant calculations**:
//   - A naive recursive Fibonacci function has an exponential time complexity `O(2^n)`, leading to redundant computations.
//   - This optimized approach reduces it to **O(n)** due to memoization.
