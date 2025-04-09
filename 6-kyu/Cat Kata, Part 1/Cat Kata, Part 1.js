function peacefulYard(yard, minDistance) {
  const cats = [];

  // Loop through the grid to collect all cat positions
  for (let i = 0; i < yard.length; i++) {
    for (let j = 0; j < yard[i].length; j++) {
      const cell = yard[i][j];
      if ('LMR'.includes(cell)) {
        cats.push([i, j]); // Store the row and column
      }
    }
  }

  // If 0 or 1 cats, it's always peaceful
  if (cats.length <= 1) return true;

  // Check distances between each pair of cats
  for (let i = 0; i < cats.length; i++) {
    for (let j = i + 1; j < cats.length; j++) {
      const [x1, y1] = cats[i];
      const [x2, y2] = cats[j];
      const distance = Math.hypot(x1 - x2, y1 - y2); // Euclidean distance
      if (distance < minDistance) return false; // Conflict!
    }
  }

  return true; // All cats are peacefully apart
}

/*
### Explanation:
- **Step 1:** Collect the positions of all cats (`L`, `M`, `R`) from the grid.
- **Step 2:** If there’s only one or zero cats, return `true` immediately (peaceful).
- **Step 3:** Use nested loops to compare all pairs of cat positions.
- **Step 4:** Use `Math.hypot()` to calculate Euclidean distance between two points.
- **Step 5:** If any pair is closer than `minDistance`, return `false` (trouble!).
- **Step 6:** If all checks pass, return `true`.
*/
