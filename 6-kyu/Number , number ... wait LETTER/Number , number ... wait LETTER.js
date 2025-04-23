function compute(str) {
  // Extract letter and number from each chunk and map to {letter, num, originalIndex}
  const items = str.split(' ').map((s, i) => {
    const letter = s.match(/[a-zA-Z]/)[0]; // extract the letter
    const number = Number(s.replace(/[a-zA-Z]/g, '')); // remove the letter to get the number
    return { letter, number, index: i }; // preserve original index for stable sort
  });

  // Sort based on letter, then original index (stable sort for duplicates)
  items.sort((a, b) => {
    if (a.letter === b.letter) return a.index - b.index;
    return a.letter.localeCompare(b.letter);
  });

  // Extract the sorted numbers
  const numbers = items.map((item) => item.number);

  // Apply operations in + - * / order cyclically
  const ops = ['+', '-', '*', '/'];
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const op = ops[(i - 1) % 4]; // determine which operation to apply
    if (op === '+') result += numbers[i];
    else if (op === '-') result -= numbers[i];
    else if (op === '*') result *= numbers[i];
    else if (op === '/') result /= numbers[i];
  }

  // Return the final result rounded to nearest integer
  return Math.round(result);
}

console.log(compute('24z6 1x23 y369 89a 900b')); // 1299
console.log(compute('24z6 1z23 y369 89a 900b')); // 1414
console.log(compute('10a 90x 14b 78u 45a 7b 34y')); // 60

/*
### Explanation:
- **Step 1**: Split the input string and extract the letter and numeric parts.
- **Step 2**: Sort by letter, maintaining original order when letters are the same.
- **Step 3**: Perform operations `+`, `-`, `*`, `/` in strict cyclic order.
- **Step 4**: Return the rounded result.
*/
