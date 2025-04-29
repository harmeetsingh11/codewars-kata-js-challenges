function getLowestTemperature(temps) {
  // Return null if the input string is empty or contains only whitespace
  if (!temps.trim()) return null;

  // Split the string by spaces, convert to numbers, and find the minimum value
  return Math.min(...temps.split(' ').map(Number));
}

console.log(getLowestTemperature('23 -5 15 0 8')); // Output: -5
console.log(getLowestTemperature('')); // Output: null
console.log(getLowestTemperature('  ')); // Output: null

/*
### Explanation:
- `temps.trim()` checks if the string is non-empty and not just spaces.
- `.split(' ')` turns the string into an array of temperature strings.
- `.map(Number)` converts each string to a number.
- `Math.min(...array)` uses the spread operator to find the minimum in the array.
*/
