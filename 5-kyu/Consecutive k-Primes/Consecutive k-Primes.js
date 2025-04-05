// Helper function to count the number of prime factors with multiplicity
function countPrimeFactors(n) {
  let count = 0;
  // Count factors of 2
  while (n % 2 === 0) {
    count++;
    n /= 2;
  }
  // Count odd prime factors from 3 upwards
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      count++;
      n /= i;
    }
  }
  // If n is a prime > 2
  if (n > 2) count++;
  return count;
}

// Main function to count consecutive k-primes in array
function consec_kprimes(k, arr) {
  // Map each number to its prime factor count
  const primeCounts = arr.map(countPrimeFactors);
  let count = 0;
  // Check pairs of consecutive elements
  for (let i = 1; i < primeCounts.length; i++) {
    if (primeCounts[i] === k && primeCounts[i - 1] === k) {
      count++;
    }
  }
  return count;
}

console.log(
  consec_kprimes(4, [10005, 10030, 10026, 10008, 10016, 10028, 10004])
); // 3
console.log(consec_kprimes(4, [10175, 10185, 10180, 10197])); // 3

/*
### Explanation:
- `countPrimeFactors(n)`: Efficiently counts all prime factors **with multiplicity** (e.g., 18 = 2 × 3 × 3 → 3 prime factors).
- `consec_kprimes(k, arr)`: Converts the array to prime counts and scans for consecutive numbers that both have exactly `k` prime factors.
*/
