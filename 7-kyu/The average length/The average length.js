function averageLength(arr) {
  // Calculate total characters and get the rounded average length
  const avgLen = Math.round(arr.join('').length / arr.length);

  // Map each element to a string of its first character repeated avgLen times
  return arr.map((str) => str[0].repeat(avgLen));
}

console.log(averageLength(['u', 'y'])); // ['u', 'y']
console.log(averageLength(['aa', 'bbb', 'cccc'])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])); // ['aaa', 'bbb', 'ddd', 'eee']

/*
### Explanation:
- `arr.join('')` joins all strings into one big string.
- `.length` gives the total number of characters.
- Divide total characters by number of strings to get the average length.
- Use `Math.round()` to handle decimals.
- `arr.map()` creates a new array where **each string** is made by repeating the **first character** `avgLen` times.
*/
