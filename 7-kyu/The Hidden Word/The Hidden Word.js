function decodeWord(num) {
  // Mapping numbers to their corresponding letters
  const key = {
    6: 'a',
    1: 'b',
    7: 'd',
    4: 'e',
    3: 'i',
    2: 'l',
    9: 'm',
    8: 'n',
    0: 'o',
    5: 't',
  };

  // Convert number to string, map each digit using the key, and join to form the word
  return String(num)
    .split('')
    .map((digit) => key[digit])
    .join('');
}

console.log(decodeWord(3175)); // Output: "ibdt"

/* 
Above solution:
1. Defines a mapping (`key`) of numbers to letters.
2. Converts the input number to a string and splits it into individual digits.
3. Maps each digit to its corresponding letter using the `key` object.
4. Joins the mapped letters into a single string and returns the result.

It's efficient (`O(n)` complexity) and concise, making it easy to read and maintain.
*/
