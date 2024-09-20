function between(a, b) {
  // Step 1: Create an array of length (b - a + 1).
  // This creates an array with empty slots that represents the range from 'a' to 'b'.
  // Example: If a = 2, b = 5, Array(b - a + 1) will create [empty, empty, empty, empty] (4 elements).

  // Step 2: Array.from() converts the created empty array into an array of numbers.
  // Array.from() takes two arguments:
  // - The first argument is the array-like object, which in this case is Array(b - a + 1), an empty array with a certain length.
  // - The second argument is a map function that takes the index of the array and adds 'a' to it, effectively filling the array with values from 'a' to 'b'.

  return Array.from(Array(b - a + 1), (_, index) => index + a);

  // Example:
  // If a = 2 and b = 5:
  // Array(b - a + 1) -> [ , , , ] (an array with 4 empty slots)
  // Array.from( ... ) will transform this into [2, 3, 4, 5].
}
