function findUnique(arr) {
  // Initialize result as 0
  let result = 0;

  // XOR every number in the array
  for (let num of arr) {
    result ^= num;
    // Why XOR? Because:
    // a ^ a = 0 and 0 ^ b = b
    // So all duplicates cancel out, leaving only the unique number
  }

  return result;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); // Output: 6

/*
### Explanation:
- The XOR operator `^` has these useful properties:
  - `a ^ a = 0` (any number XOR itself is 0)
  - `a ^ 0 = a` (any number XOR 0 is the number itself)
  - XOR is **commutative and associative**, meaning the order doesn't matter.
- So when you XOR all numbers:
  - All duplicates cancel each other (`x ^ x = 0`)
  - The unique number is left in the end.

### Time & Space Complexity:
- **Time Complexity:** `O(n)` — goes through the array once
- **Space Complexity:** `O(1)` — no extra space used
*/
