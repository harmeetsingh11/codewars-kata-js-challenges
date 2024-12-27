function isSpecialHarshadNumber(n) {
  // Helper function to calculate the sum of digits of a number
  const digitSum = (num) =>
    [...num.toString()].reduce((sum, digit) => sum + +digit, 0);

  // Calculate the digit sum 's'
  const s = digitSum(n);

  // Reverse 's' and convert back to a number
  const reversedS = +[...s.toString()].reverse().join('');

  // Check if n is divisible by its digit sum and the product condition holds
  return n % s === 0 && s * reversedS === n;
}

console.log(isSpecialHarshadNumber(1729)); // true
console.log(isSpecialHarshadNumber(18)); // false
console.log(isSpecialHarshadNumber(10)); // false

// Explanation:
// 1. `digitSum` computes the sum of digits of a number by converting it to a string, splitting it into an array of digits, and reducing it to a sum.
// 2. Calculate the digit sum `s` of the input `n`.
// 3. Reverse the digits of `s` using `toString()`, `split()`, `reverse()`, and `join()`.
// 4. Check if `n` is divisible by `s` and if the product of `s` and its reverse equals `n`. Return the result.

// Efficiency
// The function is efficient for reasonable inputs, as the computation primarily involves basic arithmetic and string manipulations.
// The complexity is O(d), where d is the number of digits in n, because the most computationally expensive operations involve iterating over the digits of n or its digit sum.
