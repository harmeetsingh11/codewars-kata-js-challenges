// Function to encode the text
const code = (t) => {
  const l = t.length;

  // Calculate the smallest n such that n*n >= l
  const n = Math.ceil(Math.sqrt(l));

  // Pad the text with ASCII character 11 until it fits into n*n
  const padded = t.padEnd(n * n, String.fromCharCode(11));

  // Convert to a squared string (2D array representation)
  const square = [];
  for (let i = 0; i < n; i++) {
    square.push(padded.slice(i * n, (i + 1) * n));
  }

  // Rotate the square 90 degrees clockwise
  const rotated = Array.from({ length: n }, (_, col) =>
    square
      .map((row) => row[col])
      .reverse()
      .join('')
  );

  return rotated.join('\n');
};

// Function to decode the encoded string
const decode = (s) => {
  // Split into rows by newline
  const square = s.split('\n');
  const n = square.length;

  // Rotate 90 degrees counter-clockwise
  const rotated = Array.from({ length: n }, (_, col) =>
    square.map((row) => row[n - 1 - col]).join('')
  );

  // Flatten and clean the resulting string by removing ASCII 11 characters
  return rotated.join('').replace(new RegExp(String.fromCharCode(11), 'g'), '');
};

const t = "I.was.going.fishing.that.morning.at.ten.o'clock";
const encoded = code(t);
const decoded = decode(encoded);

console.log('Encoded:\n', encoded);
console.log('\nDecoded:\n', decoded);

/*
### **Explanation:**

1. **`code(t)` function:**
    - Calculates the smallest square size `n` such that `n*n >= l` (ensuring the square can fit the entire string).
    - Pads the string with ASCII 11 (`String.fromCharCode(11)`) until its length is `n*n`.
    - Splits the string into `n` rows of length `n`.
    - Rotates the square 90° clockwise by:
        - Iterating over each column and building new rows by reversing the vertical characters.
    - Joins the rotated rows with `\n`.

2. **`decode(s)` function:**
    - Splits the input into rows.
    - Rotates the square 90° counter-clockwise by:
        - Iterating over columns and building new rows by traversing the square in the opposite direction.
    - Flattens the rotated rows into a string and removes padding characters (`ASCII 11`).


### **Complexity Analysis:**
- **Time complexity:** \(O(n^2)\) → Iterating through the square for both encoding and decoding.
- **Space complexity:** \(O(n^2)\) → To store the square matrix.
*/
