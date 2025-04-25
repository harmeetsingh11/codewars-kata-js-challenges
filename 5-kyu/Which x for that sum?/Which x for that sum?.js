/*
### Limit of the series:
When `0 < x < 1`, the sum converges to:  
\[
U(x) = \frac{x}{(1 - x)^2}
\]

So we solve for `x` in:
\[
\frac{x}{(1 - x)^2} = m
\]

Since it’s hard to solve this algebraically for `x`, we’ll use binary search.
*/

function solve(m) {
  // Binary search bounds: x must be in (0, 1)
  let low = 0,
    high = 1;

  // Target precision threshold
  const eps = 1e-13;

  // Binary search loop
  while (high - low > eps) {
    const mid = (low + high) / 2;

    // Compute the limit of the series at mid
    const value = mid / Math.pow(1 - mid, 2);

    // Adjust search range based on value
    if (value < m) {
      low = mid; // Need a higher x to increase the sum
    } else {
      high = mid; // Need a lower x to decrease the sum
    }
  }

  // Return midpoint as best estimate of x
  return (low + high) / 2;
}

/*
### Explanation:
- The sum `U(x)` increases with `x` in `(0, 1)`.
- We're finding `x` such that `U(x) = m`, using binary search to narrow down to a precision of `1e-13`.
- The search stops when the range `[low, high]` is sufficiently small.
- We return the midpoint as the best estimate.


console.log(solve(2.0)); // 0.5
console.log(solve(8.0)); // ≈ 0.7034648345913732
*/
