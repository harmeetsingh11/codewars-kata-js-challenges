function box_capacity(length, width, height) {
  // Each crate is 16 inches = 16 / 12 = 1.333... feet
  const crateSize = 16 / 12;

  // Calculate how many crates fit along each dimension by flooring the division
  const cratesLength = Math.floor(length / crateSize);
  const cratesWidth = Math.floor(width / crateSize);
  const cratesHeight = Math.floor(height / crateSize);

  // Total number of crates is the product of crates along each dimension
  return cratesLength * cratesWidth * cratesHeight;
}

console.log(box_capacity(32, 64, 16)); // Output: 13824

/*
### Explanation:

- **Crate size in feet**: Convert 16 inches to feet (`16 / 12`).
- **Fit per dimension**: Use `Math.floor()` to ensure only full crates are counted.
- **Final result**: Multiply the number of crates along each axis for the total.

This method is efficient (O(1) time and space complexity), concise, and uses only basic arithmetic operations.
*/
