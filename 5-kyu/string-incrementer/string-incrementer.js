function incrementString(strng) {
  // Use a regular expression to match trailing numbers
  const match = strng.match(/(\d*)$/);

  // If no numbers are found, append '1'
  if (!match[0]) return strng + '1';

  // Extract the numeric part and increment it
  const num = match[0];
  const incrementedNum = String(Number(num) + 1).padStart(num.length, '0');

  // Return the string part combined with the incremented number
  return strng.slice(0, -num.length) + incrementedNum;
}

// Explanation:
// 1. Regular Expression: strng.match(/(\d*)$/):
// This regex captures the trailing digits (if any) at the end of the string.
// (\d*)$: \d* matches zero or more digits, and $ asserts that it's at the end of the string.
// If no digits are found, match[0] will be an empty string.

// 2. No Number Case:
// If there are no trailing digits, we append '1' to the string.

// 3. Increment the Number:
// Convert the extracted numeric part (match[0]) to a number using Number(num).
// Increment the number by 1, then convert it back to a string.
// Use padStart(num.length, '0') to preserve leading zeros, ensuring that the length of the incremented number is the same as the original number.

// 4. Concatenate:
// Return the original string (without the numeric part) combined with the incremented number.

// This solution efficiently handles both cases (with or without trailing numbers) and ensures that leading zeros are preserved when incrementing numbers.
