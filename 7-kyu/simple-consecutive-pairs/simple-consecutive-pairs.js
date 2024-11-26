function pairs(arr) {
  // Initialize count to keep track of consecutive pairs
  let count = 0;

  // Iterate through the array, stepping by 2 to check pairs
  for (let i = 0; i < arr.length - 1; i += 2) {
    // Check if the pair has consecutive numbers (difference of 1)
    if (Math.abs(arr[i] - arr[i + 1]) === 1) {
      count++;
    }
  }

  return count; // Return the total count of consecutive pairs
}
