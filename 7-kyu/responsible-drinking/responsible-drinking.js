function hydrate(input) {
  // Use a regular expression to extract all numbers in the input string
  const totalDrinks = input
    .match(/\d+/g) // Matches all numeric values
    .map(Number) // Convert the matched strings to numbers
    .reduce((sum, num) => sum + num, 0); // Sum up all the numbers

  // Return the appropriate string based on the total drinks
  return `${totalDrinks} glass${totalDrinks === 1 ? '' : 'es'} of water`;
}

// Examples
console.log(hydrate('1 beer')); // Output: "1 glass of water"
console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer')); // Output: "10 glasses of water"
console.log(hydrate('1 chainsaw and 2 pools')); // Output: "3 glasses of water"

/* 
Explanation:

Extract numbers using match:
The regular expression /\d+/g finds all numeric sequences in the input string.
For example, in "1 shot, 5 beers", it extracts ["1", "5"].

Convert to numbers with map(Number):
Converts each extracted string number into an integer.

Sum the numbers with reduce:
Accumulates the sum of all numbers to calculate the total drinks.

Dynamic string formatting:
Uses a ternary operator to handle singular or plural cases (glass vs. glasses).
*/
