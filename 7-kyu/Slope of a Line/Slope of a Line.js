function getSlope(p1, p2) {
  // Destructure x and y coordinates from the input points
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  // If x-coordinates are equal or points are identical, slope is undefined => return null
  if (x1 === x2) return null;

  // Calculate and return the slope: (y2 - y1) / (x2 - x1)
  return (y2 - y1) / (x2 - x1);
}

console.log(getSlope([1, 2], [3, 6])); // 2
console.log(getSlope([4, 5], [4, 10])); // null (vertical line)
console.log(getSlope([1, 2], [1, 2])); // null (same point)

/*
### Explanation:

- `const [x1, y1] = p1;` and `const [x2, y2] = p2;` use **array destructuring** to extract coordinates.
- If `x1 === x2`, it's a **vertical line** → slope is undefined → return `null`.
- Otherwise, use the **slope formula**:  
  \[
  \text{slope} = \frac{y_2 - y_1}{x_2 - x_1}
  \]
*/
