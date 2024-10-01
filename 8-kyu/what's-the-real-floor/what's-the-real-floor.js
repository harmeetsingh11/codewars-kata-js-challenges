function getRealFloor(n) {
  // If floor is less than or equal to 0, return as it is unchanged (basements are the same)
  if (n <= 0) return n;

  // If floor is 13 or above, subtract 2 (no ground floor and no 13th floor)
  if (n >= 13) return n - 2;

  // Otherwise, subtract 1 for floors between 1 and 12 (no ground floor)
  return n - 1;
}
