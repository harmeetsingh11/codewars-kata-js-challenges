function isPangram(string) {
  // Convert the input string to lowercase and remove any non-alphabetic characters
  const letters = string.toLowerCase().replace(/[^a-z]/g, '');

  // Create a Set to store unique characters from the filtered string
  // A Set automatically removes any duplicate letters
  const uniqueLetters = new Set(letters);

  console.log(uniqueLetters);

  // Check if the Set contains all 26 unique letters of the alphabet
  // If it does, the string is a pangram
  return uniqueLetters.size === 26;
}
