function powersOfTwo(n) {
  // Create an array with numbers from 0 to n and map each to 2 raised to its power
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
