function findMissingNumbers(arr) {
  // Create an array from the first to the last number in the input array
  const fullRange = Array.from(
    { length: arr[arr.length - 1] - arr[0] + 1 },
    (_, i) => arr[0] + i
  );

  // Filter out the numbers that are missing from the original array
  return fullRange.filter((num) => !arr.includes(num));
}

console.log(findMissingNumbers([-3, -2, 1, 5])); // Output: [-1, 0, 2, 3, 4]

/*
### **Explanation:**
1. **Full Range Array:**  
   - `arr[0]`: First element of the input array.  
   - `arr[arr.length - 1]`: Last element of the input array.  
   - `Array.from()` creates an array of all numbers in the range.  
   - `(_, i) => arr[0] + i`: Fills the array with consecutive numbers starting from `arr[0]` to `arr[arr.length - 1]`.  
2. **Filter Missing Numbers:**  
   - `filter(num => !arr.includes(num))`: Keeps only the numbers that are NOT present in the original array.  

### **Time and Space Complexity Analysis:**
- **Time Complexity:** \(O(n + m)\) → \(n\) for creating the full range, \(m\) for filtering the missing numbers.  
- **Space Complexity:** \(O(n)\) → For storing the full range array.  
*/
