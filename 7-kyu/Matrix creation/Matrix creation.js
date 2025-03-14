const identityMatrix = (size) =>
  Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i === j ? 1 : 0))
  );

// Explanation:
// - We use Array.from to create an array of length 'size'.
// - The first Array.from generates rows, where 'i' is the row index.
// - The second Array.from generates columns, where 'j' is the column index.
// - If row index 'i' matches column index 'j', we set the value to 1 (diagonal element), else 0.

console.log(identityMatrix(5));
