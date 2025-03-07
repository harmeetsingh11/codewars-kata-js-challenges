// Function to compute the sum of binomial coefficients on a given diagonal
function diagonal(n, p) {
  // Using combinatorial formula: Sum of binomial coefficients from (n, p) to (p, p)
  // is given by C(n+1, p+1)
  return binomialCoeff(n + 1, p + 1);
}

// Function to calculate binomial coefficient C(n, k)
function binomialCoeff(n, k) {
  let res = 1;
  // Since C(n, k) = C(n, n-k), optimize for smaller k
  if (k > n - k) k = n - k;

  for (let i = 0; i < k; i++) {
    res *= n - i;
    res /= i + 1;
  }
  return res;
}

console.log(diagonal(20, 3)); // 5985
console.log(diagonal(20, 4)); // 20349

/* 
### Explanation:
1. **Combinatorial Formula**: The sum of binomial coefficients on a diagonal follows the combinatorial identity:
   \[
   S(n, p) = C(n+1, p+1)
   \]
   where \( C(n, k) \) represents the binomial coefficient.

2. **Binomial Coefficient Calculation**:
   - Instead of calculating Pascal’s Triangle explicitly, we use an efficient **iterative approach**.
   - The formula for \( C(n, k) \) is:
     \[
     C(n, k) = \frac{n!}{k!(n-k)!}
     \]
   - To avoid large factorial computations, we calculate the result **iteratively** using:
     \[
     C(n, k) = \frac{n (n-1) ... (n-k+1)}{k (k-1) ... 1}
     \]
   - This reduces both time complexity (**O(p)**) and space complexity (**O(1)**).
*/
