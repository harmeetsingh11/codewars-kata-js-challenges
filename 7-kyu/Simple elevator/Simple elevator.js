function goto(level, button) {
  // Convert valid levels and buttons to a set for quick validation
  const validLevels = new Set([0, 1, 2, 3]);
  const validButtons = new Set(['0', '1', '2', '3']);

  // Validate input types and values
  if (typeof level !== 'number' || !validLevels.has(level)) return 0;
  if (typeof button !== 'string' || !validButtons.has(button)) return 0;

  // Convert button string to number and calculate difference
  return Number(button) - level;
}

console.log(goto(0, '2')); // 2
console.log(goto(3, '0')); // -3
console.log(goto(2, '2')); // 0
console.log(goto(2, '4')); // 0 (invalid button)
console.log(goto(4, '0')); // 0 (invalid level)
console.log(goto(3, undefined)); // 0 (invalid input)

/*
### Key Points:

**Validation:** Ensures `level` is a number and `button` is a string within allowed ranges.
**Safety:** Returns `0` for any invalid input.
**Efficiency:** Uses `Set` for O(1) lookups.
**Concise Logic:** Converts button to number and subtracts `level` to get the movement.
*/
