/**
 * Calculates the RPM of the final cog in a gear train.
 * @param {number[]} cogs - Array where each element is the number of teeth on each cog.
 * @returns {number} - RPM of the final cog (negative if anti-clockwise).
 */
function finalCogRPM(cogs) {
  // Start with first cog's RPM = 1 (clockwise, positive)
  let rpm = 1;

  // Loop through each gear pair
  for (let i = 0; i < cogs.length - 1; i++) {
    // Gear ratio: teeth[i] / teeth[i+1]
    // Multiply by -1 because adjacent cogs rotate in opposite directions
    rpm *= -cogs[i] / cogs[i + 1];
  }

  return rpm;
}

// Example:
console.log(finalCogRPM([100, 75])); // ➞ -1.3333...  (anti-clockwise)
console.log(finalCogRPM([100, 50, 25])); // ➞ 4 (clockwise)

/*
### **Explanation**

1. **Gear ratio basics**:

   * When two cogs mesh, their rotational speeds are inversely proportional to their number of teeth.
   * `RPM₂ = RPM₁ × (Teeth₁ / Teeth₂)`
2. **Direction change**:

   * Adjacent cogs rotate in opposite directions, so we multiply by `-1` for each connection.
3. **Iterative calculation**:

   * Start with the first cog at `1 RPM` (positive for clockwise).
   * For each cog pair `(i, i+1)`, update RPM using:

     ```js
     rpm *= -cogs[i] / cogs[i+1]
     ```
4. **Efficiency**:

   * Single loop → **O(n)** time, **O(1)** space.
   * No unnecessary arrays or intermediate storage.
*/
