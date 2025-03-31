var peakHeight = function (mountain, counter = 0) {
  // Base case: if all squares are spaces (no peaks left), return the height
  if (mountain.every((row) => row.every((sq) => sq === ' '))) return counter;

  // Create a new mountain array with the same dimensions
  let afterEdgeCheck = mountain.map((row, i) =>
    row.map((sq, j) => {
      // Check adjacent squares (up, down, left, right)
      let up = mountain[i - 1] ? mountain[i - 1][j] : ' '; // Above cell or empty if at top row
      let down = mountain[i + 1] ? mountain[i + 1][j] : ' '; // Below cell or empty if at bottom row
      let left = mountain[i][j - 1] || ' '; // Left cell or empty if at leftmost column
      let right = mountain[i][j + 1] || ' '; // Right cell or empty if at rightmost column

      // If any adjacent cell is a space, convert the current peak to space
      return [up, down, left, right].includes(' ') ? ' ' : sq;
    })
  );

  // Recursively call the function on the modified mountain
  // Increment the counter to reflect the current height level
  return peakHeight(afterEdgeCheck, ++counter);
};

/*
### **Intuition Behind the Solution**

The solution uses a **recursive flood fill approach** to simulate the gradual erosion of the mountain's edges until no peaks remain.

1. **Base Case:**  
   - If the entire grid consists of spaces (`" "`), the recursion terminates and returns the height counter.
   
2. **Edge Removal Step:**  
   - For each square in the grid, it checks the **adjacent cells**:
     - `up`, `down`, `left`, and `right`.
     - If any of the adjacent cells is a space, the current cell becomes a space in the next iteration.  
   
3. **Recursive Iteration:**  
   - The function is called again with the modified grid, and the height counter is incremented.
   - This process repeats until the entire grid becomes spaces.
   
4. **Final Result:**  
   - The `counter` variable tracks how many iterations it takes for the mountain to erode completely, which corresponds to the height of the tallest peak.


#### **Time Complexity:**
- **O(N × M × H)**  
  - `N` = number of rows  
  - `M` = number of columns  
  - `H` = height of the tallest peak (number of iterations before the grid becomes all spaces)  
- In each recursive call:
  - You traverse the entire grid (`O(N × M)` complexity).
  - You repeat this process until all peaks are eroded, which takes `H` iterations.
- Thus, the overall time complexity is:
\[
O(N \times M \times H)
\]

#### **Space Complexity:**
- **O(N × M)** for the `afterEdgeCheck` grid in each iteration.
- The recursive calls add stack frames, but since the recursion depth is `H`, the overall space complexity is:
\[
O(N \times M + H)
\]


### **Why is this Solution Efficient?**
1. **Elegant Recursion:**  
   - The solution uses a recursive flood fill approach, which is concise and handles the entire process in a few lines of code.
2. **Simulates Erosion:**  
   - The grid gradually erodes from the edges inward, accurately simulating how the height of the tallest peak is measured.
3. **Optimized Adjacent Cell Check:**  
   - The use of adjacent cell checks ensures that only cells directly touching spaces are eroded, making the solution efficient.

### **Key Takeaway**
- The solution correctly simulates **mountain erosion** through recursion.
- The time complexity is **O(N × M × H)**, and the space complexity is **O(N × M + H)**.
- It handles both **simple and complex mountain shapes** efficiently and accurately.
*/
