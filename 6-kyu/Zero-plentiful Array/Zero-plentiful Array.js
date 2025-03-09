function zeroPlentiful(arr) {
  let count = 0,
    i = 0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      let start = i;
      while (i < arr.length && arr[i] === 0) i++; // Count consecutive zeros

      if (i - start < 4) return 0; // If a zero sequence is less than 4, return 0
      count++; // Valid zero sequence found, increment count
    } else {
      i++; // Move to the next element
    }
  }

  return count;
}

// Test cases
console.log(zeroPlentiful([0, 0, 0, 0, 0, 1])); // 1
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0, 0, 0, 0])); // 2
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0])); // 0
console.log(zeroPlentiful([0, 0, 0, 1, 0, 0])); // 0
console.log(zeroPlentiful([1, 2, 3, 4, 5])); // 0
console.log(zeroPlentiful([])); // 0

/* 
### Explanation:
1. We iterate through the array using a `while` loop.
2. When we encounter a zero, we count how many consecutive zeros appear.
3. If a sequence has fewer than 4 zeros, we return `0` immediately (since every sequence must be at least 4 long).
4. If valid, we increment the count and move forward.
5. If the loop completes without finding an invalid sequence, we return the total count of zero sequences.

This solution runs in **O(n)** time complexity, making it efficient.
*/
