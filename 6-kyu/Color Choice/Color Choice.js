function binomialCoefficient(n, x) {
  // Calculates n choose x using an optimized approach
  if (x > n - x) x = n - x; // Take advantage of symmetry: C(n, x) = C(n, n-x)
  let res = 1;
  for (let i = 0; i < x; i++) {
    res = (res * (n - i)) / (i + 1);
    if (res > Number.MAX_SAFE_INTEGER) return Infinity; // Handle large numbers
  }
  return res;
}

function findX(m, n) {
  for (let x = 0; x <= n; x++) {
    if (binomialCoefficient(n, x) === m) return x; // Find the smallest x that satisfies nCx = m
  }
  return -1; // No solution found
}

// Test cases
console.log(findX(6, 4)); // 2
console.log(findX(4, 4)); // 1
console.log(findX(4, 2)); // -1
console.log(findX(35, 7)); // 3
console.log(findX(36, 7)); // -1
console.log(findX(47129212243960, 50)); // 20
console.log(findX(47129212243961, 50)); // -1

/*
### Explanation:
1. **`binomialCoefficient(n, x)`**  
   - Uses an iterative approach to compute \( n \) choose \( x \) efficiently.  
   - Reduces unnecessary computations by using \( C(n, x) = C(n, n-x) \).  
   - Prevents overflow issues by checking if results exceed `Number.MAX_SAFE_INTEGER`.

2. **`findX(m, n)`**  
   - Iterates over possible values of \( x \) from `0` to `n`.  
   - Returns the smallest \( x \) for which \( C(n, x) = m \).  
   - If no valid \( x \) is found, returns `-1`.

This solution is efficient, as it avoids computing full factorials and works well even for large values of \( n \). */
