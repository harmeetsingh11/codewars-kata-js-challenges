function countBy(x, n) {
  // The function returns an array of the first `n` multiples of `x`.

  // Array.from() creates a new array with a specified length.
  // `{ length: n }` sets the length of the array to `n`.
  // The second argument of Array.from() is a mapping function that is called on each element.

  // The mapping function takes two arguments:
  // `_` is the current element (which is not used, hence the underscore).
  // `i` is the index of the current element, starting from 0.

  // `x * (i + 1)` calculates the multiple of `x` based on the index.
  // Since `i` starts from 0, `i + 1` gives us the correct multiple, starting from `x * 1`.

  // The result is an array of multiples of `x`, starting from `x` and ending at `x * n`.
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}
