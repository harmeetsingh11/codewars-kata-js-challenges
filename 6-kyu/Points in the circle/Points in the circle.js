function countPointsInCircle(radius) {
  let count = 0;

  // Iterate over all possible x-coordinates from -radius to +radius
  for (let x = -radius; x <= radius; x++) {
    // For each x, calculate the max y value satisfying x^2 + y^2 <= radius^2
    let maxY = Math.floor(Math.sqrt(radius * radius - x * x));

    // Count all integer y-coordinates from -maxY to +maxY
    count += 2 * maxY + 1; // Including both positive and negative y and y=0
  }

  return count;
}

console.log(countPointsInCircle(2)); // Output: 13

/*
### **Explanation:**
1. **Iterating over x-coordinates:**  
   - The circle is symmetrical, so we iterate over the entire x range from `-radius` to `+radius`.

2. **Calculating valid y-values:**  
   - For each `x`, we compute the maximum `y` value that satisfies the circle equation:  
     \[ x^2 + y^2 \leq \text{{radius}}^2 \]  
   - `maxY = Math.floor(Math.sqrt(radius² - x²))` → this gives the maximum valid `y` value for the current `x`.

3. **Counting points:**  
   - For each `x`, there are integer `y` values ranging from `-maxY` to `+maxY`, which gives:  
     \[ 2 \times \text{{maxY}} + 1 \]  
     (this includes both positive and negative `y` values as well as `y = 0`).

4. **Efficiency:**  
   - The algorithm iterates over `x` from `-radius` to `+radius`, making it \(O(n)\), where \(n = 2 \times \text{{radius}} + 1\).  
   - For each `x`, it calculates the max `y` in \(O(1)\), making the solution efficient and concise.
*/
