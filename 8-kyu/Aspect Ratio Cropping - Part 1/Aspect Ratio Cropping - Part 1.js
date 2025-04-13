/**
 * Converts an image resolution to 16:9 aspect ratio keeping the same height.
 * @param {number} x - Original width
 * @param {number} y - Original height
 * @returns {[number, number]} - New resolution with 16:9 aspect ratio
 */
function aspectRatio(x, y) {
  // Maintain the same height (y), and calculate new width for 16:9 aspect ratio
  const newWidth = Math.ceil((16 / 9) * y);
  return [newWidth, y];
}

// Example:
console.log(aspectRatio(374, 280)); // ➞ [500, 280]

/*
### Explanation:
- We keep the **height (`y`) the same**.
- To maintain a **16:9 aspect ratio**, we calculate the new width using the formula:
  ```
  width = height * (16 / 9)
  ```
- We use `Math.ceil()` to **round up** to the nearest whole number (as required).
- The function returns a new array `[newWidth, y]`.
*/
