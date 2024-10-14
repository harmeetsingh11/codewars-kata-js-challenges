function whatday(num) {
  // Array to map numbers to weekdays
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Check if the number is within the valid range (1-7), return the corresponding day or error message
  return num >= 1 && num <= 7
    ? days[num - 1]
    : 'Wrong, please enter a number between 1 and 7';
}

// Explanation:

// 1. Array Mapping:
// We create an array days where each index corresponds to the weekday. The index starts from 0, so num - 1 gives the correct day for the input number.

// 2. Ternary Operator for Validation:
// We check if the input num is between 1 and 7 (inclusive). If it is, we return the appropriate day from the days array.
// If the input is outside the valid range, we return the error message: "Wrong, please enter a number between 1 and 7".

// This solution is both concise and efficient, using O(1) operations for array access and validation.
