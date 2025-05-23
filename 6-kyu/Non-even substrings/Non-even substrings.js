function solve(str) {
  let count = 0;
  // Every substring that ends with an odd digit forms an odd number
  // So we only need to count how many substrings end with an odd digit
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 1) {
      // All substrings ending at index i that start anywhere from 0 to i are odd
      // The number of such substrings is (i + 1)
      count += i + 1;
    }
  }
  return count;
}

console.log(solve('1341')); // 7

/*
### Explanation:

* Instead of generating all substrings (which would be O(n²)), this method exploits the fact that a substring is odd if and only if its last digit is odd.
* For each odd digit at position `i`, there are `(i + 1)` substrings ending there (from index 0 to i, 1 to i, ..., i to i).
* Summing these counts for all odd digits gives the total number of odd substrings.

This solution runs in **O(n)** time and uses **O(1)** extra space.
*/
