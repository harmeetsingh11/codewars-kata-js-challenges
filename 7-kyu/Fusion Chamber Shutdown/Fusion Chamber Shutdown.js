function getMolecules(C, H, O) {
  // Step 1: Form as much water as possible: H2O needs 2 H and 1 O
  const water = Math.min(Math.floor(H / 2), O);
  H -= water * 2;
  O -= water;

  // Step 2: Form as much carbon dioxide as possible: CO2 needs 1 C and 2 O
  const carbonDioxide = Math.min(C, Math.floor(O / 2));
  C -= carbonDioxide;
  O -= carbonDioxide * 2;

  // Step 3: Form as much methane as possible: CH4 needs 1 C and 4 H
  const methane = Math.min(C, Math.floor(H / 4));

  // Return result as a tuple (water, carbonDioxide, methane)
  return [water, carbonDioxide, methane];
}

console.log(getMolecules(45, 11, 100)); // Output: [5, 45, 0]

/*
### Reaction Priority Logic:
1. **Water (H₂O)** is produced first because Hydrogen has a high reactivity with Oxygen.
2. **Carbon Dioxide (CO₂)** comes next, using up remaining Carbon and Oxygen.
3. **Methane (CH₄)** is formed last using remaining Carbon and Hydrogen.
*/
