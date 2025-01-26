function decode(code, key) {
  // Convert the key into an array of its digits (e.g., 1939 -> [1, 9, 3, 9])
  const keyDigits = String(key).split('').map(Number);

  // Decode each number in the code
  return code
    .map((num, index) => {
      // Subtract the corresponding key digit (using modulo to cycle through key digits)
      const decodedValue = num - keyDigits[index % keyDigits.length];
      // Convert the number back to a letter (1 = 'a', 2 = 'b', etc.)
      return String.fromCharCode(decodedValue + 96);
    })
    .join(''); // Combine all decoded letters into a single string
}

console.log(decode([20, 12, 18, 30, 21], 1939)); // Output: "scout"
console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // Output: "masterpiece"

/* 
Explanation:

Key Conversion:
The key is converted into an array of its individual digits (String(key).split('').map(Number)).
For example, 1939 becomes [1, 9, 3, 9].

Decoding Each Number:
For each number in the code:
Find the corresponding digit in the key by using index % keyDigits.length to ensure the key repeats cyclically.
Subtract the key digit from the current code number.
Convert the resulting number back to a letter using String.fromCharCode(decodedValue + 96). (The ASCII value of 'a' is 97, so adding 96 maps 1 -> 'a', 2 -> 'b', and so on.)

Combine Results:
Use .join('') to merge the decoded letters into a single string.
*/
