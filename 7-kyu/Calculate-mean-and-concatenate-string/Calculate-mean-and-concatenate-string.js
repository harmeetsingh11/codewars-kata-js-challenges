function processArray(lst) {
  // Separate integers and characters using array reduce
  const { sum, chars } = lst.reduce(
    (acc, item) => {
      if (!isNaN(item)) {
        // If item is a number, add it to the sum
        acc.sum += Number(item);
      } else {
        // If item is a character, append it to the chars string
        acc.chars += item;
      }
      return acc;
    },
    { sum: 0, chars: '' } // Initial accumulator values
  );

  // Calculate mean of the integers
  const mean = sum / 10;

  // Return the result as an array
  return [mean, chars];
}

// Test case
const lst = [
  'u',
  '6',
  'd',
  '1',
  'i',
  'w',
  '6',
  's',
  't',
  '4',
  'a',
  '6',
  'g',
  '1',
  '2',
  'w',
  '8',
  'o',
  '2',
  '0',
];
console.log(processArray(lst)); // Output: [3.6, "udiwstagwo"]

/* 
Explanation:

reduce Method:
The reduce function is used to traverse the input array once, separating integers and characters in one pass.
The accumulator is an object with properties sum (to accumulate the sum of integers) and chars (to build the string of characters).

Check for Numbers:
isNaN(item) determines if the element is a number or not. Numbers are converted to Number and added to the sum.

Append Characters:
Non-numeric elements are appended to the chars string in the same order as they appear in the array.

Calculate Mean:
Since the prompt guarantees exactly 10 integers, the mean is calculated by dividing the sum by 10.

Return Result:
The mean and the concatenated string of characters are returned as an array.

Efficiency:
Time Complexity: 
O(n), where n is the length of the input array, as it only iterates through the array once.
Space Complexity: 
O(1) additional space (apart from the result array).
*/
