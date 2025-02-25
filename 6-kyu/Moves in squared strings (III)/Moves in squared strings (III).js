// Function to transform the string with symmetry along the main diagonal
const diag_1_sym = (s) => {
  const lines = s.split('\n');
  return lines[0]
    .split('')
    .map((_, i) => lines.map((row) => row[i]).join(''))
    .join('\n');
};

// Function to rotate the string 90 degrees clockwise
const rot_90_clock = (s) => {
  return diag_1_sym(s)
    .split('\n')
    .map((row) => row.split('').reverse().join(''))
    .join('\n');
};

// Function to concatenate the original string with its diagonal symmetry
const selfie_and_diag1 = (s) => {
  const original = s.split('\n');
  const transformed = diag_1_sym(s).split('\n');
  return original.map((row, i) => `${row}|${transformed[i]}`).join('\n');
};

// High-order function to apply transformations
const oper = (fct, s) => fct(s);

const s = 'abcd\nefgh\nijkl\nmnop';
console.log(oper(diag_1_sym, s)); // "aeim\nbfjn\ncgko\ndhlp"
console.log(oper(rot_90_clock, s)); // "miea\nnjfb\nokgc\nplhd"
console.log(oper(selfie_and_diag1, s)); // "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

/* 
### Explanation:
1. **`diag_1_sym(s)`**  
   - Splits the string into an array of lines.
   - Constructs new lines by collecting the i-th character from each line.
   - Joins the transformed rows back into a string.

2. **`rot_90_clock(s)`**  
   - Uses `diag_1_sym(s)` to get the diagonal transformation.
   - Reverses each row to achieve a 90-degree clockwise rotation.

3. **`selfie_and_diag1(s)`**  
   - Splits the original and diagonal transformation into arrays.
   - Merges corresponding lines using `"|"` separator.

4. **`oper(fct, s)`**  
   - A higher-order function that applies the given transformation function to `s`.
*/
