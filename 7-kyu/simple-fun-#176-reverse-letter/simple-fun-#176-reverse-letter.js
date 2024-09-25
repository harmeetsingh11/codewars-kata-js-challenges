function reverseLetter(str) {
  return (
    str
      // Step 1: Split the string into an array of characters
      // Example: "ultr53a23o?n" becomes ['u', 'l', 't', 'r', '5', '3', 'a', '2', '3', 'o', '?', 'n']
      .split('')

      // Step 2: Filter out any characters that are not lowercase letters (a-z)
      // The `char.charCodeAt(0)` gets the ASCII value of the character.
      // We only keep characters whose ASCII value is between 97 ('a') and 122 ('z').
      // After filtering: ['u', 'l', 't', 'r', 'a', 'o', 'n']
      .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)

      // Step 3: Reverse the array of remaining characters
      // Example: ['u', 'l', 't', 'r', 'a', 'o', 'n'] becomes ['n', 'o', 'a', 'r', 't', 'l', 'u']
      .reverse()

      // Step 4: Join the array back into a string
      // Example: ['n', 'o', 'a', 'r', 't', 'l', 'u'] becomes "noartlu"
      .join('')
  );
}

console.log(reverseLetter('ultr53a23o?n')); // Output: "noartlu"
