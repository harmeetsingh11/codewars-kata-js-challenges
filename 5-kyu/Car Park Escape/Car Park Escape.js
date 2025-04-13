function escape(carpark) {
  const result = [];
  let [floor, pos] = findStart(carpark); // Get starting floor and position

  for (let i = floor; i < carpark.length - 1; i++) {
    const stair = carpark[i].indexOf(1); // Find staircase on current floor
    const move = stair - pos; // Calculate horizontal movement to staircase

    if (move !== 0) result.push((move > 0 ? 'R' : 'L') + Math.abs(move)); // Add L or R movement
    let down = 1; // Going down one floor
    while (i + 1 < carpark.length - 1 && carpark[i + 1].indexOf(1) === stair) {
      down++; // If stair is aligned on next floor, stack down movements
      i++;
    }
    result.push('D' + down); // Add down movement
    pos = stair; // Update current position
  }

  // Finally, move right to the exit on the ground floor (last floor)
  const lastMove = carpark[0].length - 1 - pos;
  if (lastMove !== 0) result.push('R' + lastMove);

  return result;

  // Helper to find the start (2)
  function findStart(carpark) {
    for (let i = 0; i < carpark.length; i++) {
      const idx = carpark[i].indexOf(2);
      if (idx !== -1) return [i, idx];
    }
  }
}

const carpark = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0],
];

console.log(escape(carpark)); // ["L4", "D1", "R4"]

/*
### **Explanation of Approach**
1. **Find Start**: Search for the cell with value `2` to locate the starting floor and position.
2. **Loop Through Floors**: From the starting floor, move to the staircase horizontally (`L` or `R`), then move down.
3. **Optimize Downward Movement**: If staircases are aligned across floors, count them together for a single `D#`.
4. **Final Move**: On the ground floor (last row), move right to the exit.
*/
