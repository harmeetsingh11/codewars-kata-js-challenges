function findSlope([a, b, c, d]) {
  // If x-coordinates are the same, the slope is undefined (vertical line)
  if (a === c) return 'undefined';

  // Calculate the slope (y2 - y1) / (x2 - x1)
  const slope = (d - b) / (c - a);

  // Return the slope as a string
  return slope.toString();
}

/* 
Explanation:

Input Check for Vertical Line:
If x1 equals x2 , the line is vertical, and its slope is undefined. Return "undefined" as per the requirements.

Slope Calculation:
Use the formula slope = (y2-y1)/(x2-x1)
The result is guaranteed to be an integer since inputs are integers, avoiding any need for rounding or floating-point operations.

Output as String:
Convert the calculated slope to a string using .toString() before returning, ensuring the output type matches the requirements.
*/
