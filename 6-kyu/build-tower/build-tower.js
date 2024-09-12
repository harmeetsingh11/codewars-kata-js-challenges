function towerBuilder(nFloors) {
  const tower = []; // Initialize an empty array to store the tower
  // outer loop for no. of lines
  for (let i = 1; i <= nFloors; i++) {
    // for spaces
    const spaces = ' '.repeat(nFloors - i);

    // for stars
    const stars = '*'.repeat(2 * i - 1);

    // Combine spaces and stars to form a floor
    const floor = spaces + stars + spaces;
    tower.push(floor); // Add the floor to the tower
  }
  return tower;
}
