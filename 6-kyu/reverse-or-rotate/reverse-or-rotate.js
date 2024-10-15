function revrot(str, sz) {
  // Return empty string if invalid size or string is empty or chunk size exceeds string length
  if (sz <= 0 || str === '' || sz > str.length) return '';

  // Function to sum digits of a chunk
  const sumOfDigits = (chunk) =>
    [...chunk].reduce((sum, digit) => sum + Number(digit), 0);

  // Function to reverse a string chunk
  const reverseChunk = (chunk) => chunk.split('').reverse().join('');

  // Function to rotate a string chunk to the left by one position
  const rotateChunk = (chunk) => chunk.slice(1) + chunk[0];

  // Process the string in chunks of size `sz`
  return str
    .match(new RegExp(`.{1,${sz}}`, 'g')) // Split string into chunks of size `sz`
    .filter((chunk) => chunk.length === sz) // Ignore last chunk if size is less than `sz`
    .map(
      (chunk) =>
        sumOfDigits(chunk) % 2 === 0 ? reverseChunk(chunk) : rotateChunk(chunk) // Reverse if sum is divisible by 2, else rotate
    )
    .join(''); // Join chunks into the final string
}

// Explanation:

// 1. Input Validation:

// If sz is less than or equal to 0, or if the string is empty, or if sz is larger than the length of the string, return an empty string as per the problem statement.

// 2. Helper Functions:

// sumOfDigits(chunk): Calculates the sum of the digits in the chunk by splitting the chunk into an array of characters, converting each character to a number, and summing them.
// reverseChunk(chunk): Reverses the chunk using split, reverse, and join.
// rotateChunk(chunk): Rotates the chunk to the left by taking all characters except the first (slice(1)) and appending the first character at the end.

// 3. Processing:

// We split the string into chunks of size sz using a regular expression (.{1,${sz}}), which matches substrings of exactly sz length.
// Ignore chunks smaller than sz (e.g., the last chunk).
// Use map to process each chunk: reverse it if the sum of its digits is divisible by 2; otherwise, rotate it.
// Join the modified chunks back together into a single string and return it.

// Time Complexity:
// O(n), where n is the length of the input string, since we process each character in the string once through the chunking, summing, and reversing/rotating operations.
