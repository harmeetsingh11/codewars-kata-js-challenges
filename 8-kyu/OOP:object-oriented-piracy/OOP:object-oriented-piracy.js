class Ship {
  constructor(draft, crew) {
    this.draft = draft; // Total weight of the ship
    this.crew = crew; // Number of crew members on the ship
  }

  // Method to determine if the ship is worth looting
  isWorthIt() {
    // Calculate the effective draft by subtracting crew weight (1.5 units per crew member)
    const effectiveDraft = this.draft - this.crew * 1.5;

    // Return true if the effective draft is more than 20, otherwise false
    return effectiveDraft > 20;
  }
}

// Example usage
const titanic = new Ship(15, 10);
console.log(titanic.isWorthIt()); // Output: false

const blackPearl = new Ship(50, 10);
console.log(blackPearl.isWorthIt()); // Output: true

/* 
Explanation:

Constructor:
draft: Represents the total weight of the ship.
crew: Represents the number of people aboard.

isWorthIt Method:
Calculates the effective draft by subtracting the total weight of the crew (crew * 1.5) from the draft.
Checks if the remaining draft exceeds 20 to determine if the ship is worth looting.
*/
