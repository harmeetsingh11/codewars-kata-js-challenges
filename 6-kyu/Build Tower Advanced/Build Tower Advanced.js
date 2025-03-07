function towerBuilder(nFloors, [blockWidth, blockHeight]) {
  const tower = [];

  // Loop through each floor
  for (let floor = 0; floor < nFloors; floor++) {
    const width = (floor * 2 + 1) * blockWidth; // Calculate total width of the floor
    const pad = (nFloors - floor - 1) * blockWidth; // Calculate padding on each side
    const row = ' '.repeat(pad) + '*'.repeat(width) + ' '.repeat(pad); // Construct a single row

    // Repeat row blockHeight times for vertical stretching
    for (let i = 0; i < blockHeight; i++) {
      tower.push(row);
    }
  }

  return tower;
}

/* 
### Explanation:
1. **Loop through floors**: Each floor has increasing width, calculated as `(floor * 2 + 1) * blockWidth`.
2. **Calculate padding**: Each floor is centered by adding spaces on both sides.
3. **Construct row**: A single row is created using `'*'.repeat(width)`, with leading and trailing spaces.
4. **Repeat rows**: Each floor’s row is repeated `blockHeight` times to account for vertical stretching.

This approach ensures **optimal time complexity** (O(n²)) while keeping the implementation **clean and efficient**.
*/
