function order(words) {
  // Return an empty string if the input string is empty
  if (!words) return '';

  // Split the input string into an array of words
  const wordArray = words.split(' ');

  // Sort the words based on the number found within each word
  // The regular expression /\d/ matches the first digit found in each word
  // parseInt extracts that digit as a number for comparison
  const sortedWords = wordArray.sort((a, b) => {
    // Extract the number from each word and convert it to an integer
    const numA = parseInt(a.match(/\d/)[0]); // Number from word 'a'
    const numB = parseInt(b.match(/\d/)[0]); // Number from word 'b'

    // Compare the two numbers to determine their order
    return numA - numB;
  });

  // Join the sorted words back into a single string and return the result
  return sortedWords.join(' ');
}
