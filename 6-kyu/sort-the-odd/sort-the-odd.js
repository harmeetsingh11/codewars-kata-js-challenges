function sortArray(array) {
  // Step 1: Separate odd numbers from the original array using filter
  // Create a new array 'oddNumbers' that contains only the odd numbers from 'array'
  const oddNumbers = array.filter((num) => num % 2 !== 0);

  // Step 2: Sort the odd numbers in ascending order
  oddNumbers.sort((a, b) => a - b);

  // Step 3: Replace the odd numbers in the original array with the sorted ones
  // Use map to loop through 'array' and replace each odd number with the next sorted odd number from 'oddNumbers'
  // If a number is odd, it replaces it with the next number from the sorted oddNumbers by using oddNumbers.shift(). The shift() method removes and returns the first element from the oddNumbers array.
  return array.map((num) => (num % 2 !== 0 ? oddNumbers.shift() : num));
}
