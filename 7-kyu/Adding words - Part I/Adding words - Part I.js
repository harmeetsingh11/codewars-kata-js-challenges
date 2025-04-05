class Arith {
  constructor(value) {
    // Define a fixed array of number words from 0 to 20
    this.words = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
    ];

    // Store the numeric value of the input word
    this.value = this.words.indexOf(value);
  }

  add(word) {
    // Convert input word to number and add to the stored value
    const sum = this.value + this.words.indexOf(word);

    // Return the word representation of the result
    return this.words[sum];
  }
}

const k = new Arith('three');
console.log(k.add('seven')); // Output: "ten"

/*
### Why this solution is optimal:
- Uses a **static lookup array** (`words`) for fast and easy conversion between word and number.
- Keeps code **short and readable**.
- Assumes valid inputs between `"zero"` and `"ten"` as per the problem statement, so no need for additional error handling.
- Supports results up to `"twenty"` (handles `10 + 10` safely).
*/
