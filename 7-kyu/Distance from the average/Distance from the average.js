const differencesFromAverage = (arr) => {
  // Calculate the total sum and average
  const avg = arr.reduce((sum, val) => sum + val, 0) / arr.length;

  // Map over the array, calculate the difference, and round it to 2 decimal places
  return arr.map((val) => +(avg - val).toFixed(2));
};

const data = [55, 95, 62, 36, 48];
console.log(differencesFromAverage(data)); // [4.2, -35.8, -2.8, 23.2, 11.2]

/*
### **Explanation:**
1. **`reduce()` for Sum and Average:**  
   - `arr.reduce((sum, val) => sum + val, 0)` → Sums up all the elements.  
   - Divides by the length of the array to get the average.  

2. **`map()` for Differences:**  
   - Iterates over each value in the array.  
   - Calculates the difference from the average: `avg - val`.  
   - Rounds the result to **2 decimal places** using `.toFixed(2)`.  
   - Uses the `+` unary operator to convert the rounded string back to a number.  

3. **Efficiency:**  
   - The solution is concise and efficient with **O(n)** time complexity for both the sum and the mapping process.  
   - **Memory usage** is proportional to the size of the array, making it optimal.  
*/
