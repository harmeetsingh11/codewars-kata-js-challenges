function minStonesToRemove(s) {
  let count = 0;

  // Iterate through the string and count adjacent duplicates
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++; // Increment count if adjacent stones are the same
    }
  }

  return count;
}

// Test cases
console.log(minStonesToRemove('RGBRGBRGGB')); // Output: 1
console.log(minStonesToRemove('RGGRGBBRGRR')); // Output: 3
console.log(minStonesToRemove('RRRRGGGGBBBB')); // Output: 9

/* 
Explanation:
1. Initialize a `count` variable to keep track of the number of stones to remove.
2. Loop through the string from the second character (`i = 1`).
3. If the current stone (`s[i]`) is the same as the previous stone (`s[i - 1]`), increment `count` because it's a duplicate that should be removed.
4. Return the final count, which represents the minimum number of stones that need to be removed.

This solution runs in **O(n) time complexity**.
*/
