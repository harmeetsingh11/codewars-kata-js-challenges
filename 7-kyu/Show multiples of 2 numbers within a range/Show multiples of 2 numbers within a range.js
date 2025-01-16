function findMultiples(x, y, limit) {
  const result = []; // Array to store the multiples

  // Calculate the Least Common Multiple (LCM) of x and y
  const lcm = (x * y) / gcd(x, y); // LCM formula: LCM(a, b) = (a * b) / GCD(a, b)

  // Iterate through multiples of LCM, stopping before the limit
  for (let i = lcm; i < limit; i += lcm) {
    result.push(i); // Add each valid multiple to the result array
  }

  return result; // Return the array of multiples
}

// Helper function to calculate the Greatest Common Divisor (GCD) using the Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Recursively calculate GCD
}

console.log(findMultiples(4, 2, 37)); // Output: [4, 8, 12, 16, 20, 24, 28, 32, 36]

/* 
Comments

LCM Calculation:
To find numbers that are multiples of both x and y, calculate their Least Common Multiple (LCM).
LCM is computed using the formula:
LCM(x,y)= x.y / GCD(x,y)
​GCD is computed using the Euclidean Algorithm, which is efficient and runs in O(log(min(x,y))).

Iterating Through Multiples:
Start from lcm and iterate up to but not including the limit (exclusive).
Increment by lcm to directly generate the multiples.

Efficiency:
By iterating only over multiples of lcm, unnecessary checks are avoided.

Time Complexity

LCM Calculation:
Computing the GCD has a time complexity of O(log(min(x,y))).
Calculating the LCM from GCD is O(1).

Iterating Multiples:
The loop runs k=⌊limit/lcm⌋ times, where k is the number of valid multiples.
Each iteration is O(1), so the loop takes O(k).

Total Time Complexity: O(log(min(x,y))+k)
Space Complexity:
Result Array:
Stores k multiples, so space used is O(k).

Other Variables:
Space for lcm and loop variables is O(1).

Total Space Complexity: O(k)

Example Walkthrough
For inputs (4, 2, 37):
Compute GCD(4,2)=2.
Compute LCM(4,2)= 4⋅2/2 =4.
Iterate i=4,8,12,…,36, stopping before 37.
Output: [4, 8, 12, 16, 20, 24, 28, 32, 36].
*/
