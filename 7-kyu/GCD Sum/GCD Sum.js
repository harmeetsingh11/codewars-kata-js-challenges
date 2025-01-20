function solve(sum, gcd) {
  // If the sum is not a multiple of the gcd, it's impossible to find the numbers
  if (sum % gcd !== 0) return -1;

  // Let x and y be the two numbers such that gcd(x, y) = gcd and x + y = sum
  // After dividing by gcd, x = gcd * a, y = gcd * b, where a and b are integers
  const a = sum / gcd - 1; // a + b = sum / gcd, and assume a is the smaller number

  // The two numbers can be calculated directly
  const x = gcd;
  const y = sum - gcd;

  return [x, y];
}

// Test cases
console.log(solve(12, 4)); // Output: [4, 8]
console.log(solve(12, 5)); // Output: -1
console.log(solve(10, 2)); // Output: [2, 8]

/* 
Explanation:

Check feasibility:
If sum % gcd !== 0, it's impossible to find two numbers because their sum must be divisible by their greatest common divisor.

Break the problem into smaller steps:
Suppose the two numbers are x and y.
We know:
x + y = sum
gcd(x, y) = gcd
Let x = gcd * a and y = gcd * b, where a and b are integers. Substituting, we get:
gcd * (a + b) = sum
a + b = sum / gcd
Therefore, the problem reduces to finding two integers a and b such that their sum is sum / gcd. Assume a = 1 and b = sum / gcd - 1.

Derive the result:
Compute x = gcd * a and y = gcd * b.
Return [x, y] in ascending order.

Edge cases:
If sum / gcd is not an integer, return -1.
The result is always [x, y] with x <= y because of the direct assignment.

This solution is efficient with O(1) complexity as it uses only basic arithmetic operations.
*/
