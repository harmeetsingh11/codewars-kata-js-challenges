// SOLUTION 1: using lookup table (creating an object)
function rot13(message) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Define the original alphabet in both uppercase and lowercase
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'; // Define the ROT13 shifted alphabet (13 positions shift)
  const lookup = {}; // Initialize an empty object for the lookup table

  // Create a lookup table by mapping each character in 'input' to its corresponding character in 'output'
  for (let i = 0; i < input.length; i++) {
    lookup[input[i]] = output[i]; // For each character in 'input', find the matching ROT13 character in 'output'
  }

  // Split the input message into characters, map each character to its ROT13 equivalent using the lookup table,
  // and join the transformed characters back into a string
  return message
    .split('')
    .map((char) => lookup[char] || char)
    .join(''); // If a character is not in the lookup (e.g., punctuation), leave it unchanged
}

// SOLUTION 2: using ASCII values
function rot13(message) {
  return message
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);

      // Check if the character is an uppercase letter
      if (charCode >= 65 && charCode <= 90) {
        // Shift within uppercase letters
        // 65 is the ASCII code of 'A'.

        // Subtracting 65 normalizes the ASCII code of the character to a 0-based index where 'A' is 0, 'B' is 1, ..., 'Z' is 25.

        // (charCode - 65 + 13): This shifts the normalized index by 13 positions to the right.

        // (charCode - 65 + 13) % 26 ==> % 26 ensures that if the shift goes past 'Z', it wraps around to the beginning of the alphabet.

        // ((charCode - 65 + 13) % 26) + 65:

        // Adding 65 converts the 0-based index back to the ASCII code of the shifted character.
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }

      // Check if the character is a lowercase letter
      if (charCode >= 97 && charCode <= 122) {
        // Shift within lowercase letters
        // Same process as above but for lowercase letters:
        // - Subtract 97 (ASCII code of 'a') to normalize to 0-based index (a -> 0, b -> 1, ..., z -> 25)
        // - Add 13, wrap around with % 26, and then add 97 to get the ASCII code of the shifted character
        return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      }

      // Non-alphabetic characters (numbers, punctuation, special characters) remain unchanged
      return char;
    })
    .join(''); // Join the transformed characters back into a string
}
