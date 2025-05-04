function countOddPentaFib(n) {
  let count = 0;

  // Initialize the first 5 terms of the pentaFibonacci sequence
  const arr = [0, 1, 1, 2, 4];

  // Generate the sequence up to the nth term
  for (let i = 5; i <= n; i++) {
    // Since values grow very large, we only keep the last 14 digits as a string,
    // then convert it back to integer using parseInt
    // This avoids exceeding JS's integer precision limit
    arr[i] = parseInt(
      (arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4] + arr[i - 5])
        .toString()
        .slice(-14) // keep only last 14 digits
    );
  }

  // Count how many terms are odd
  arr.forEach(function (item) {
    if (item % 2 === 1) {
      count++;
    }
  });

  // The value 1 appears twice, but should be counted only once
  return count - 1;
}

console.log(countOddPentaFib(5)); // → 1
console.log(countOddPentaFib(10)); // → 3
console.log(countOddPentaFib(68)); // → 23
console.log(countOddPentaFib(100)); // → 33
console.log(countOddPentaFib(121)); // → 40

/*
### Thought Process Behind the Solution

1. **Initial Terms**:
   The pentaFibonacci sequence is defined with:

   ```
   f(0) = 0
   f(1) = 1
   f(2) = 1
   f(3) = 2
   f(4) = 4
   ```

   So, we seed the array with these 5 terms.

2. **Sequence Generation**:   
   Each new term is a sum of the previous 5:

   ```
   f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5)
   ```

   But this sum grows **exponentially**, eventually exceeding JavaScript's safe integer limit (`2^53 - 1`).
   So we use a clever trick:

   * Convert the sum to a string.
   * Keep only the **last 14 digits**.
   * Convert it back using `parseInt`.

   This preserves the **parity (odd/even)** and uniqueness for our needs without dealing with `BigInt`.

3. **Counting Odds**:   

   * Iterate over the array and count how many values are odd.
   * Since `1` appears **twice**, we subtract 1 from the final count to ensure it's **only counted once**.


### Why This Works

* Uses **integer truncation** to avoid overflow.
* Tracks only what's needed (parity).
* Works fast even for large `n` (up to hundreds).
* Avoids the need for heavy data types like `BigInt`.
*/
