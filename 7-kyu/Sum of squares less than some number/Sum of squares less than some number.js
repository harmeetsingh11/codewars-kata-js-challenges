function getNumberOfSquares(n) {
  let sum = 0;
  let i = 1;

  // Keep adding squares until the sum would exceed or equal n
  while (sum + i * i < n) {
    sum += i * i;
    i++;
  }

  // i was the last successful number, so return i - 1
  return i - 1;
}

getNumberOfSquares(6); // Output: 2 (1² + 2² = 5)
getNumberOfSquares(15); // Output: 3 (1² + 2² + 3² = 14)

/*
### Explanation:
- We initialize `sum` as `0` and `i` as `1` (starting from 1²).
- In the loop, we check if `sum + i²` is still less than `n`.
  - If yes, add `i²` to `sum` and move to next number.
- As soon as adding the next square would make `sum` ≥ `n`, we stop.
- The count of successful integers whose squares contributed to the sum is `i - 1`.
*/
