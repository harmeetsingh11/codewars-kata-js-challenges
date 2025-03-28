const median = (donations) => {
  // Sort the array in ascending order
  donations.sort((a, b) => a - b);

  const len = donations.length;
  const mid = Math.floor(len / 2);

  // If even length, return the average of the two middle values
  // If odd length, return the middle value
  return len % 2 === 0
    ? (donations[mid - 1] + donations[mid]) / 2
    : donations[mid];
};

console.log(median([33, 99, 100, 30, 29, 50])); // 41.5
console.log(median([3, 2, 1])); // 2
console.log(median([7, 5, 3, 1])); // 4

/*
### **Explanation:**
1. **Sorting the Array:** 
   - The array is sorted in ascending order using `.sort((a, b) => a - b)` to ensure the median calculation is correct.
2. **Finding the Middle:**
   - `len`: Length of the array.
   - `mid`: Middle index, calculated using `Math.floor(len / 2)`.
3. **Even-Length Array:**
   - If the length is even, the median is the average of the two middle values: 
   \[
   \text{median} = \frac{\text{donations[mid - 1]} + \text{donations[mid]}}{2}
   \]
4. **Odd-Length Array:**
   - If the length is odd, the median is simply the middle value: 
   \[
   \text{median} = \text{donations[mid]}
   \]

### ⚡ **Efficiency:**
- **Time Complexity:** \(O(n \log n)\) due to the sorting step.
- **Space Complexity:** \(O(1)\) since sorting is in-place and no extra space is used.
*/
