function sum(n) {
  // Initialize an array to store the number of partitions for each number from 0 to n
  const partitions = Array(n + 1).fill(0);

  // Base case: there's only 1 way to partition 0 (the empty set)
  partitions[0] = 1;

  // Iterate over all numbers that can contribute to the sum (1 to n)
  for (let i = 1; i <= n; i++) {
    // Update the partitions array for each number from i to n
    for (let j = i; j <= n; j++) {
      partitions[j] += partitions[j - i];
    }
  }

  // The result for n is stored in partitions[n]
  return partitions[n];
}

// Test cases
console.log(sum(1)); // Output: 1
console.log(sum(2)); // Output: 2
console.log(sum(3)); // Output: 3
console.log(sum(4)); // Output: 5
console.log(sum(5)); // Output: 7
console.log(sum(10)); // Output: 42
console.log(sum(50)); // Output: 204226
console.log(sum(80)); // Output: 15796476
console.log(sum(100)); // Output: 190569292

/* 
Explanation

To calculate the number of partitions of a number using dynamic programming. The approach utilizes a 1D array to store intermediate results for space efficiency.

Dynamic Programming Array:
We use an array partitions to store the number of partitions for each number from 0 to n.
partitions[i] represents the number of ways to partition the number i.

Initialization:
partitions[0] = 1 because there is only one way to partition 0 (using the empty set).

Outer Loop:
The outer loop iterates over integers from 1 to n, representing the numbers we can use in the partitions.

Inner Loop:
For each number i, the inner loop iterates over j from i to n, updating the number of partitions for each j by adding the partitions of j - i.

Result:
The final answer is stored in partitions[n], which gives the number of partitions for the number n.

Time Complexity
O(n²): The nested loops iterate through all combinations of i and j where 1 ≤ i, j ≤ n.
Space Complexity
O(n): The solution uses a 1D array of size n + 1.

This implementation is efficient and avoids recomputation, making it suitable for large inputs like n = 100.
*/
