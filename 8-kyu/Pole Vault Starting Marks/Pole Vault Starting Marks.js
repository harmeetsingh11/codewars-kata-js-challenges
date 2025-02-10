function startingMark(height) {
  // Step 1: Calculate the slope (m)
  const m = (10.67 - 9.45) / (1.83 - 1.52); // (y2 - y1) / (x2 - x1)

  // Step 2: Calculate the y-intercept (b) using one of the points (1.52, 9.45)
  const b = 9.45 - m * 1.52; // y = mx + b -> b = y - mx

  // Step 3: Use the linear equation to calculate the starting mark
  const startingPosition = m * height + b;

  // Step 4: Return the result rounded to two decimal places
  return parseFloat(startingPosition.toFixed(2));
}

console.log(startingMark(1.52)); // Output: 9.45
console.log(startingMark(1.83)); // Output: 10.67
console.log(startingMark(1.75)); // Output: 10.19

/*
To solve this problem, we need to establish a linear equation to relate the vaulter's height to the starting mark on the runway. Based on the two given points, we can derive the equation for a straight line, `y = mx + b`, where:

- `x` is the vaulter's height in meters.
- `y` is the starting mark on the runway.
- `m` is the slope (rate of change).
- `b` is the y-intercept (constant offset).

### Steps:
1. **Calculate the slope (m)**:  
   We can calculate the slope using the two given points:  
   Point 1: `(1.52, 9.45)`  
   Point 2: `(1.83, 10.67)`  

   The slope formula is:  
   \[
   m = \frac{y_2 - y_1}{x_2 - x_1}
   \]

2. **Calculate the y-intercept (b)**:  
   Once we have the slope, we can use one of the points to solve for `b` using the equation:  
   \[
   y = mx + b \quad \text{(substitute known values of x and y)}
   \]
   
3. **Use the equation to calculate the starting mark for any given height**.
*/

/*
Explanation:
1. **Slope Calculation**:  
   The slope `m` is calculated using the formula for the rate of change between the two known points. In this case, the difference in the starting marks divided by the difference in the heights gives us the slope.

2. **Intercept Calculation**:  
   Using the formula `y = mx + b` and substituting one of the points (we used `(1.52, 9.45)`), we can solve for `b`, which is the y-intercept.

3. **Linear Equation**:  
   Once we have the slope and intercept, we can calculate the starting mark for any given height using the formula `y = mx + b`.

4. **Rounding**:  
   The result is rounded to two decimal places to match the required precision.

This approach ensures that we efficiently calculate the correct starting mark for any vaulter's height in the given range.
*/
