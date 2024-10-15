function nearestSq(n) {
  // Find the square root of n, round it to the nearest integer, and return its square
  const root = Math.round(Math.sqrt(n));
  return root * root;
}
