function checkSequence(input) {
  // Handle empty input
  if (!input.trim()) return 0; // An empty sequence is considered valid and complete

  // Split the input string by spaces to get an array of elements
  const elements = input.split(' ');

  // Check if all elements are numbers
  if (!elements.every((el) => /^\d+$/.test(el))) {
    return 1; // Return 1 if any element is non-numeric
  }

  // Convert elements to integers and sort them
  const nums = elements.map(Number).sort((a, b) => a - b);

  // Check for missing numbers in the sequence
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1; // Return the missing number
    }
  }

  return 0; // Return 0 if the sequence is complete
}

// Test cases
console.log(checkSequence('1 2 3 4')); // 0
console.log(checkSequence('1 2 4 3')); // 0
console.log(checkSequence('2 1 3 a')); // 1
console.log(checkSequence('1 3 2 5')); // 4
console.log(checkSequence('1 5')); // 2
console.log(checkSequence('')); // 0
console.log(checkSequence('   ')); // 0

/* 
Explanation:

Empty Input Handling:
Before processing, check if the input string is empty or contains only whitespace using !input.trim().
If the sequence is empty, return 0 immediately, as it is considered a valid and complete sequence.

Input Parsing and Validation:
Split the input string into an array of elements using split(' ').
Use the regular expression /^\d+$/ with every to ensure all elements are numeric.

Sorting:
Convert elements to integers using map(Number) and sort them numerically.

Sequence Check:
Start by verifying that the smallest number is 1; otherwise, return 1 as the sequence cannot start properly.
Iterate through the sorted array to check if each number matches its expected position in the sequence. If a number is missing, return it.

Return Result:
Return 0 if all conditions are satisfied, indicating a complete sequence.
If a non-numeric value is found, return 1.
If numbers are missing, return the smallest missing number.
*/
