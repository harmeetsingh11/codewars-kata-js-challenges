function lastEvenNumbers(array, number) {
  // Filter only the even numbers from the array
  const evenNumbers = array.filter((num) => num % 2 === 0);

  // Return the last 'number' elements from the filtered even numbers
  return evenNumbers.slice(-number);
}

/* 
Explanation:

Filter Even Numbers:
The filter method iterates over the array and keeps only those elements that satisfy the condition num % 2 === 0, which checks if the number is even.

Get the Last number Even Numbers:
The slice(-number) method extracts the last number elements from the filtered even numbers array. The negative index ensures slicing starts from the end of the array.

Efficiency:
Filtering has a time complexity of O(n), where n is the length of the input array.
Slicing has a time complexity of O(k), where k is the value of number (the length of the result array).
Overall time complexity: O(n+k).
*/
