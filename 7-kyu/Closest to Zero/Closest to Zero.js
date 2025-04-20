function closestToZero(arr) {
  // Map to absolute values with original values preserved
  const closest = [];
  let minAbs = Infinity;

  for (const num of arr) {
    const absVal = Math.abs(num);

    if (absVal < minAbs) {
      // New minimum found, reset the list
      minAbs = absVal;
      closest.length = 0;
      closest.push(num);
    } else if (absVal === minAbs) {
      // Tie found, store it
      closest.push(num);
    }
  }

  // If there's only one unique closest value, return it
  const unique = new Set(closest);
  return unique.size === 1 ? closest[0] : null;
}

console.log(closestToZero([2, 4, -1, -3])); // -1
console.log(closestToZero([5, 2, -2])); // null
console.log(closestToZero([5, 2, 2])); // 2
console.log(closestToZero([13, 0, -6])); // 0
console.log(closestToZero([539, 223, -223, 223, -319])); // null
console.log(closestToZero([-480, -217, 65, 190, 65, 437, -65])); // null

/*
### Explanation:

- We track the **minimum absolute value** and store **all numbers** with that absolute value.
- If there's **only one unique actual number** with that absolute value, we return it.
- If multiple distinct numbers share the same absolute value (e.g., both `-2` and `2`), we return `null`.
*/
