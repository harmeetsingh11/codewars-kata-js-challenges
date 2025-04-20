function abundantNumber(num) {
  // Edge case: A number less than or equal to 1 cannot be abundant
  if (num <= 1) return false;

  let sumDivisors = 1; // Start with 1 because 1 is a divisor for any number

  // Loop through all numbers from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If i is a divisor, add it and its pair (num / i) to the sum
    if (num % i === 0) {
      sumDivisors += i;
      if (i !== num / i) sumDivisors += num / i; // Avoid adding the square root twice
    }
  }

  // Compare the sum of divisors with the number
  return sumDivisors > num;
}

/*
### Explanation:
- **Edge case check:** If the number is less than or equal to 1, it cannot be abundant (so return `false`).
- **Sum of proper divisors:** Start with 1 because 1 is a divisor of every number. Then, loop through numbers from 2 to the square root of the given number. This helps reduce the time complexity from O(n) to O(√n) because divisors occur in pairs (e.g., 2 and 6 for 12).
- **Avoid double-counting:** For perfect squares, ensure we don't add the square root twice.
- **Return result:** After calculating the sum of divisors, compare it to the original number. If the sum is greater, return `true` (indicating the number is abundant); otherwise, return `false`.

This solution is efficient and works well for larger numbers due to the O(√n) complexity.
*/
