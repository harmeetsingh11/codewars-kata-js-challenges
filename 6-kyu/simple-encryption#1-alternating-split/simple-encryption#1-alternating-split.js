function encrypt(text, n) {
  if (!text || n <= 0) return text; // If text is empty or n is not positive, return text

  for (let i = 0; i < n; i++) {
    // Split text into odd-indexed and even-indexed characters
    let oddChars = text.split('').filter((_, index) => index % 2 !== 0);
    let evenChars = text.split('').filter((_, index) => index % 2 === 0);

    // Concatenate odd-indexed characters with even-indexed characters
    text = oddChars.concat(evenChars).join('');
  }
  return text;
}

// Explanation:

// encrypt function:

// 1. Base case check: If text is empty or n is non-positive, we immediately return the original text.
// Loop through n times: For each repetition, we split the string into two parts:

// 2. Odd-indexed characters: Extract characters where the index is odd.

// 3. Even-indexed characters: Extract characters where the index is even.

// 4. Concatenate: We concatenate the odd characters first and then the even characters.

// 5. Repeat: The process repeats n times.

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText; // If text is empty or n is not positive, return text

  const len = encryptedText.length;
  for (let i = 0; i < n; i++) {
    let mid = Math.floor(len / 2);
    let oddChars = encryptedText.slice(0, mid);
    let evenChars = encryptedText.slice(mid);

    // Reconstruct original text by alternating characters from evenChars and oddChars
    encryptedText = evenChars
      .split('')
      .map((char, index) => char + (oddChars[index] || ''))
      .join('');
  }
  return encryptedText;
}

// Explanation

// decrypt function:

// 1. Base case check: Similar to encrypt, if encryptedText is empty or n is non-positive, return the text.

// 2. Loop through n times: For each repetition, we:

// 3. Split the encrypted text into two parts: the first half corresponds to the odd characters, and the second half to the even characters.

// 4. Reconstruct the original text by alternating characters from the even and odd parts.

// 5. Rebuild text: The map function reconstructs the original text by alternating between even and odd indexed characters.

// 6. Repeat: Repeat the process for n iterations.
