function generateSortedPairs(m, n) {
  // Create an array to store the result
  const result = [];

  // Iterate over 'a' from m to n
  for (let a = m; a <= n; a++) {
    // Iterate over 'b' from 'a' to n (ensuring a <= b)
    for (let b = a; b <= n; b++) {
      result.push([a, b]); // Push the pair into result
    }
  }

  return result; // Return the sorted list of pairs
}

console.log(generateSortedPairs(2, 4));

/* 
Explanation:
1. We initialize an empty array `result` to store the pairs.
2. We iterate `a` from `m` to `n`.
3. For each `a`, we iterate `b` from `a` to `n`, ensuring `a <= b`.
4. Each valid pair `(a, b)` is added to the result.
5. Finally, the sorted list of pairs is returned.

This approach ensures optimal efficiency with a time complexity of **O((n-m+1)²/2)**. 
*/
