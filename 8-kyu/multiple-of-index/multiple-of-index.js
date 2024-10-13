function multipleOfIndex(array) {
  return array.filter((num, index) => num === 0 || num % index === 0);
}
// Explanation
// array.filter(...): This method creates a new array with all elements that pass the test implemented by the provided function.
// (num, index) =>: This is an arrow function where num is the current element and index is its index in the array.
// num === 0: This condition allows zero to be included in the result since zero is technically a multiple of any number (except for division by zero).
// num % index === 0: This condition checks if the element num is a multiple of its index (index).
