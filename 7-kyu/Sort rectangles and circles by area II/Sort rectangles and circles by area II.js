function sortByArea(shapes) {
  return shapes.slice().sort((a, b) => {
    // Compute area: If it's an array, it's a rectangle (width * height); otherwise, it's a circle (π * r²)
    const area = (shape) =>
      Array.isArray(shape) ? shape[0] * shape[1] : Math.PI * shape ** 2;
    return area(a) - area(b); // Sort by ascending area
  });
}

const array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];
console.log(sortByArea(array));

/*
### Explanation:
1. **Clone the array** using `.slice()` to avoid modifying the original.
2. **Sort the array** using `.sort()`, comparing the computed area of each shape:
   - If the element is an array, it represents a rectangle: `width * height`
   - Otherwise, it's a circle: `π * radius²`
3. **Return the sorted array** with areas in ascending order.

This solution is **concise**, **efficient** (O(n log n) due to sorting), and **cleanly structured**.
*/
