function buddy(start, limit) {
  // Helper function to calculate the sum of proper divisors
  function sumOfDivisors(n) {
    let sum = 1; // 1 is a divisor of every number
    let sqrt = Math.sqrt(n);

    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        sum += i; // Add the divisor
        if (i !== n / i) sum += n / i; // Add the corresponding pair divisor
      }
    }
    return sum;
  }

  for (let n = start; n <= limit; n++) {
    let m = sumOfDivisors(n) - 1; // Calculate potential buddy `m`
    if (m > n && sumOfDivisors(m) === n + 1) {
      // Check if `m` satisfies the buddy condition
      return [n, m];
    }
  }

  return 'Nothing'; // Return "Nothing" if no buddy pair is found
}

console.log(buddy(10, 50)); // [48, 75]
console.log(buddy(48, 50)); // [48, 75]

/* 
Explanation:

sumOfDivisors Function:
This helper function calculates the sum of proper divisors for a given number n.
It iterates up to the square root of n to efficiently find divisors.
For every divisor i, it adds both i and n / i to the sum, ensuring to avoid double-counting when i === n / i.

Buddy Pair Calculation:
The loop iterates over each number n from start to limit.
For each n, it calculates the potential buddy m using s(n) - 1.
It then checks if m satisfies the buddy condition: s(m) === n + 1 and m > n.

Return Result:
If a buddy pair is found, it returns [n, m].
If no pair is found within the range, it returns "Nothing".

Why Efficient?
The divisor summation is optimized to run in O(root(n)) for each number.
The loop checks numbers from start to limit, making the overall time complexity O((limit−start)×max(n) ), which is efficient for reasonable ranges.
*/
