function getDivisorsCnt(n) {
  let count = 0;

  // Iterate up to the square root of n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // If i divides n
      count++; // Count i as a divisor
      if (i !== n / i) count++; // Count n / i as a distinct divisor if it's different from i
    }
  }

  return count; // Return total divisor count
}

/* 
Explanation:

Loop Up to Square Root:
We only loop up to the square root of n because divisors come in pairs. For example, if i divides n, then n / i is also a divisor.
This approach reduces the number of iterations significantly, making it efficient for large values of n.

Counting Divisors:
For each i that divides n (n % i === 0), we increase count by 1 for i and another 1 for n / i (the paired divisor).
If i equals n / i (like when n is a perfect square), we count it only once by checking if (i !== n / i).

Return the Count:
Finally, we return the total count of divisors.
This approach is optimal for large inputs, as it leverages the symmetry of divisors around the square root of n.
*/
