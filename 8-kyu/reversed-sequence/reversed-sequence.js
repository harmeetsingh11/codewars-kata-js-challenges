const reverseSeq = (n) => {
  return Array.from({ length: n }, (_, i) => n - i);
};

// Array.from({ length: n }): Creates an array of length n.
// The first argument is an object specifying the desired length of the array.
// (_, i) => n - i: This is a mapping function where _ is a placeholder for the unused element, and i is the index.
// It calculates the element at each position as n - i, so the array will start from n and count down to 1.

// Example:
// For n = 5:

// Array created: [undefined, undefined, undefined, undefined, undefined]
// Mapping: [5, 4, 3, 2, 1]
