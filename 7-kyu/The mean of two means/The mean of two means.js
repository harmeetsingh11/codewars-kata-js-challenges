function meanBetweenMeans(arr, x, y) {
  // Validate x and y
  if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) return -1;

  // Calculate means efficiently using reduce
  const mean = (subArr) =>
    subArr.reduce((sum, num) => sum + num, 0) / subArr.length;

  // Compute the required means
  const mean1 = mean(arr.slice(0, x)); // Mean of first x elements
  const mean2 = mean(arr.slice(-y)); // Mean of last y elements

  return (mean1 + mean2) / 2; // Return the mean of the two means
}

// Test cases
console.log(meanBetweenMeans([1, 3, 2, 4], 2, 3)); // 2.5
console.log(meanBetweenMeans([1, 3, 2, 4], 1, 2)); // -1
console.log(meanBetweenMeans([1, 3, 2, 4], 2, 8)); // -1

/*
### **Explanation**:
1. **Validation Check**:  
   - If `x` or `y` are not within the valid range (`>1` and `≤ arr.length`), return `-1`.
  
2. **Efficient Mean Calculation**:  
   - A helper function `mean()` computes the mean of an array using `reduce()`.
   - `arr.slice(0, x)` extracts the first `x` elements.
   - `arr.slice(-y)` extracts the last `y` elements.
  
3. **Final Mean Calculation**:  
   - Compute the mean of both extracted subarrays and return their average.

### **Time Complexity**:
- **O(x + y)** → Efficient as it only slices and sums parts of the array rather than iterating through the entire array multiple times.
*/
