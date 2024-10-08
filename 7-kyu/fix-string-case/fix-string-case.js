function solve(s) {
  // Count the number of uppercase letters
  const upperCount = s.split('').filter((c) => c === c.toUpperCase()).length;

  // If uppercase letters are more than half of the total length, convert to uppercase
  // Otherwise, convert to lowercase
  return upperCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
