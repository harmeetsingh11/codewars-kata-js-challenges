function dnaStrand(dna) {
  // Create an object to store complementary pairs
  // A pairs with T, and C pairs with G and so on
  const complements = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  // The input DNA string is split into individual characters
  // Then, each character is mapped to its complementary base using the 'complements' object
  // Finally, the resulting array of complementary bases is joined back into a string
  return dna
    .split('') // Split the input DNA string into an array of characters
    .map((char) => complements[char]) // Replace each character with its complementary base
    .join(''); // Join the array of complementary bases into a single string
}
