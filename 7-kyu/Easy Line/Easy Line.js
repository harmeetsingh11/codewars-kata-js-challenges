function easyLine(n) {
  // Calculate the sum of the squares of binomial coefficients using formula:
  // Sum of squares of binomial coefficients on row n = (2n choose n)

  let result = 1; // Initialize result to 1 for (2n choose n)

  // Compute (2n)! / (n! * n!) using an iterative approach to avoid large factorials
  for (let i = 1; i <= n; i++) {
    result *= (n + i) / i; // Efficient calculation using multiplication/division
  }

  // Return rounded log value as per problem constraints
  return Math.round(Math.log(result));
}

console.log(easyLine(0)); // 0
console.log(easyLine(1)); // 1
console.log(easyLine(4)); // 4
console.log(easyLine(50)); // 67

/*
### **Explanation:**
1. **Mathematical Insight:**
   - The sum of the squares of the binomial coefficients in row `n` is given by:
     \[
     \sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n}
     \]
   - This is a well-known identity in combinatorics.

2. **Efficient Computation:**
   - Directly computing factorials for `binomial(2n, n)` leads to huge numbers.
   - Instead, we iteratively compute the binomial coefficient:
     \[
     \binom{2n}{n} = \frac{(n+1)(n+2) \dots (2n)}{1 \times 2 \times ... \times n}
     \]
   - This avoids computing large factorials, making the solution efficient.

3. **Final Calculation:**
   - Since JavaScript lacks native big integer support, we return:
     \[
     \text{round}(\log(\text{result}))
     \]
   - `Math.log(result)` is used to avoid overflow from large values.

### **Time Complexity:**
- **O(n)** (since we iterate `n` times).
- Avoids factorial calculations, making it **optimal** for large values of `n`.
*/
