function multiplicationTable(size) {
  // Create a 2D array using map, where each row is an array of multiples of the current row number
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
}
//   Explanation:

//   Array.from({ length: size }):
//   - This creates an array of length size. The first Array.from() is used to generate the rows, and the second one (nested) generates the values within each row.

//   Row Generation (i + 1):
//   - For each row, i + 1 represents the multiplier for that row (since i starts at 0).

//   Column Generation ((i + 1) * (j + 1)):
//   - The value at position (i, j) in the table is calculated as (i + 1) * (j + 1) to simulate a multiplication table.
