function countSheep(num) {
  // Use Array.from to create an array of numbers from 1 to num
  // Use map to transform each number into a string with ' sheep...'
  // Use join to concatenate all strings into a single output
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}

/* 
Explanation:

Array.from:
Creates an array of a specific length (num in this case).
Uses the second argument (a mapping function) to populate the array with values.
The (_, i) parameters in the callback refer to the value (unused here) and the index.

Template literals:
Each number is transformed into a string like "1 sheep...", "2 sheep...", etc., using ${i + 1} sheep....

join:
Combines all the strings in the array into a single string, with no separator.
*/
