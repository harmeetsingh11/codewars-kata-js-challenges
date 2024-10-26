function findLongest(numbers) {
  // Sort the array by the length of each number's string representation, in descending order
  numbers.sort((a, b) => b.toString().length - a.toString().length);

  // Return the first element, which has the most digits due to the sorting
  return numbers[0];
}

/* 
Explanation:

Convert to String:
We use toString() on each number in the array to get its digit length.

Sort by Length in Descending Order:
The sort function sorts numbers by their string length in descending order. This places the number with the most digits at the beginning of the array.
If two numbers have the same number of digits, they remain in their original order relative to each other (due to stable sorting in JavaScript).

Return the First Element:
After sorting, the first element in the array is the number with the most digits, so we simply return numbers[0].
*/
