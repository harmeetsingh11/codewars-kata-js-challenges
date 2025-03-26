function meanVsMedian(arr) {
  // Calculate the mean (average) value
  const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;

  // Sort the array to find the median
  arr.sort((a, b) => a - b);

  // Find the median (middle value for odd-length array)
  const median = arr[Math.floor(arr.length / 2)];

  // Compare mean and median and return the result
  return mean > median ? 'mean' : mean < median ? 'median' : 'same';
}

console.log(meanVsMedian([1, 2, 10])); // 'mean'
console.log(meanVsMedian([2, 3, 4])); // 'same'
console.log(meanVsMedian([10, 2, 3])); // 'median'

/*
### **Explanation:**
1. **Mean Calculation:**  
   - Use `reduce()` to sum up all the elements.
   - Divide the sum by the array length to get the mean.

2. **Median Calculation:**  
   - Sort the array in ascending order using `.sort((a, b) => a - b)`.
   - Since the array length is guaranteed to be odd, the median is the middle element:  
     `arr[Math.floor(arr.length / 2)]`.

3. **Comparison and Return:**  
   - Use a concise ternary operator to compare the mean and median.
   - Return:
     - `'mean'` if the mean is larger.
     - `'median'` if the median is larger.
     - `'same'` if they are equal.

This solution is efficient (O(n log n) due to sorting) and concise with clear logic.
*/
