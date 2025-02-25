const Harshad = {
  /**
   * Checks if a number is a Harshad number.
   * @param {number} n - The number to check.
   * @returns {boolean} - True if n is a Harshad number, false otherwise.
   */
  isValid(n) {
    const sumDigits = [...String(n)].reduce(
      (sum, digit) => sum + Number(digit),
      0
    );
    return n % sumDigits === 0;
  },

  /**
   * Finds the next Harshad number greater than n.
   * @param {number} n - The starting number.
   * @returns {number} - The next Harshad number.
   */
  getNext(n) {
    while (!this.isValid(++n)); // Increment n until we find a valid Harshad number
    return n;
  },

  /**
   * Generates a series of Harshad numbers.
   * @param {number} count - Number of Harshad numbers to generate.
   * @param {number} start - Optional starting number (default: 0).
   * @returns {number[]} - Array of Harshad numbers.
   */
  getSerie(count, start = 0) {
    const series = [];
    let num = this.getNext(start); // Find the first Harshad number after start
    while (series.length < count) {
      series.push(num);
      num = this.getNext(num); // Get the next Harshad number
    }
    return series;
  },
};

console.log(Harshad.isValid(10)); // true
console.log(Harshad.getNext(0)); // 1
console.log(Harshad.getSerie(3)); // [1, 2, 3]
console.log(Harshad.getSerie(3, 1000)); // [1002, 1008, 1010]
