function findCubicNumbers(s) {
  // Helper function to check if a number is a cubic number
  const isCubic = (num) => {
    // Convert the number to a string and calculate the sum of the cubes of its digits
    let sumOfCubes = 0;
    const digits = num.toString().split('');
    for (let digit of digits) {
      sumOfCubes += Math.pow(Number(digit), 3);
    }
    return sumOfCubes === num;
  };

  // Initialize variables to store results
  const cubicNumbers = [];
  let sum = 0;

  // Extract groups of up to 3 digits from the string using regex
  const groups = s.match(/\d{1,3}/g) || [];

  // Loop through each group and check if it is a cubic number
  for (let group of groups) {
    const num = parseInt(group, 10); // Convert the group to a number
    if (isCubic(num)) {
      cubicNumbers.push(num); // If cubic, add to the result array
      sum += num; // Add the cubic number to the sum
    }
  }

  // If cubic numbers are found, return the formatted string, otherwise return "Unlucky"
  if (cubicNumbers.length > 0) {
    return `${cubicNumbers.join(' ')} ${sum} Lucky`;
  } else {
    return 'Unlucky';
  }
}

// Test cases
console.log(findCubicNumbers('aqdf&0#1xyz!22[153(777.777')); // "0 1 153 154 Lucky"
console.log(findCubicNumbers('QK29a45[&erui9026315')); // "Unlucky"

// ### Plan:
// 1. **Extract digit groups**: Split the string into groups of 1, 2, or 3 digits.
// 2. **Check if a group is cubic**: For each group, check if it is a "cubic" number by calculating the sum of the cubes of its digits and comparing it to the number itself.
// 3. **Sum the cubic numbers**: If we find cubic numbers, sum them up.
// 4. **Return result**: Return the formatted string with the cubic numbers followed by their sum, or "Unlucky" if no cubic numbers are found.

/*
Explanation:

1. **`isCubic` function**:
   - This function checks whether a given number is a cubic number by splitting it into digits, cubing each digit, and summing the cubes. If the sum equals the original number, it's a cubic number.
   
2. **`groups` extraction**:
   - We use the regex `\d{1,3}` to match sequences of digits that are at most 3 digits long. The `match` function returns an array of strings, or an empty array if no digits are found.

3. **Main loop**:
   - We iterate through each extracted group, convert it to a number, and check if it's cubic. If it is, we add it to the `cubicNumbers` array and update the `sum`.

4. **Result formatting**:
   - If there are any cubic numbers found, we join them into a string and append the sum with the word "Lucky". If no cubic numbers are found, we return "Unlucky".

### Time Complexity:
- Extracting digit groups and checking each group for being cubic is efficient. The time complexity is linear with respect to the length of the input string, i.e., O(n), where n is the length of the string.

This solution should work efficiently for any input string that fits the problem constraints.
*/
