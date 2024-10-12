function listSquared(m, n) {
  const result = [];

  // Function to calculate sum of squared divisors
  const sumOfSquaredDivisors = (num) => {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i * i;
        if (i !== num / i) sum += (num / i) * (num / i);
      }
    }
    return sum;
  };

  // Iterate through each number between m and n
  for (let i = m; i <= n; i++) {
    const sumSqDiv = sumOfSquaredDivisors(i);
    // Check if the sum is a perfect square
    if (Number.isInteger(Math.sqrt(sumSqDiv))) {
      result.push([i, sumSqDiv]);
    }
  }

  return result;
}

// Explanation:
// 1. Helper Function (sumOfSquaredDivisors):
// This function calculates the sum of the squares of all divisors of a number.
// We loop from 1 up to the square root of the number (Math.sqrt(num)), as divisors come in pairs (e.g., for num = 36, divisors are 1 and 36, 2 and 18, 3 and 12, etc.).
// For each divisor i, we add i * i to the sum and, if i is not the square root of num, we also add the square of the complementary divisor (num / i).

// 2. Main Loop:
// We iterate over each number from m to n.
// For each number i, we calculate the sum of its squared divisors using the helper function.
// We check if the sum of the squared divisors is a perfect square using Number.isInteger(Math.sqrt(sumSqDiv)). If it is, we add [i, sumSqDiv] to the result.

// 3. Return the Result:
// The final result is an array of subarrays, each containing a number and the sum of its squared divisors, for which the sum itself is a perfect square.

// Time Complexity:
// The time complexity is roughly O(n√n), where n is the number of integers between m and n, as for each number we loop up to its square root to find divisors.
