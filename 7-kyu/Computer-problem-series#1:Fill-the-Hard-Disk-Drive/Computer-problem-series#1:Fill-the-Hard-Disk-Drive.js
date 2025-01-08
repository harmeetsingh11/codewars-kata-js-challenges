function save(sizes, hdCapacity) {
  let count = 0,
    usedSpace = 0;

  for (const size of sizes) {
    // Always save zero-sized files, even if HD is full
    if (size === 0 || usedSpace + size <= hdCapacity) {
      usedSpace += size; // Add file size to used space
      count++; // Increment file count
    } else {
      break; // Stop as soon as a file cannot fit
    }
  }

  return count; // Return total number of files saved
}

// Examples:
console.log(save([4, 4, 4, 3, 3], 12)); // Output: 3
console.log(save([4, 4, 4, 3, 3], 11)); // Output: 2
console.log(save([12, 0, 0, 1], 12)); // Output: 3

/* 
Explanation

Initialization:
count: Keeps track of the number of files saved.
usedSpace: Tracks the cumulative space used on the HDD.

Iteration:
Loop through the sizes array.
For each file:
If the file is of size 0, it can always be saved (per the problem statement).
If adding the current file doesn't exceed the HDD capacity, save it.
Stop processing further files once one cannot fit.

Return:
Return the total count of files successfully saved.

This solution is efficient (O(n) time complexity) and concise.
*/
