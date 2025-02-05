function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumOfPrimeIndices(arr) {
  return arr.reduce((sum, val, index) => (isPrime(index) ? sum + val : sum), 0);
}

console.log(sumOfPrimeIndices([1, 2, 3, 4, 5, 6])); // Output: 13 (3 + 5 + 6)

/*
Explanation:
1. **`isPrime(num)` function**  
   - Checks if a number is prime using trial division up to `√num` for efficiency.
   - Returns `false` for numbers less than 2.
   - Iterates from `2` to `√num` to check divisibility.

2. **`sumOfPrimeIndices(arr)` function**  
   - Uses `.reduce()` to iterate through the array efficiently.
   - Checks if the index is prime using `isPrime(index)`.
   - If true, adds the value to the sum; otherwise, skips it.

*/
