function chromosomeCheck(sperm) {
  sperm = sperm.toUpperCase();
  // Check the second character to determine the sperm's chromosome (X or Y)
  return sperm.includes('Y')
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}
