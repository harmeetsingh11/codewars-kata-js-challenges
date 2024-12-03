function periodIsLate(last, today, cycleLength) {
  // Calculate the difference in days between the two dates
  const daysPassed = (today - last) / (1000 * 60 * 60 * 24);

  // Return true if the days passed exceed the cycle length, otherwise false
  return daysPassed > cycleLength;
}

/* 
Explanation:

Date Difference Calculation:
today - last: Subtracting two Date objects in JavaScript gives the difference in milliseconds.
Dividing by 1000 * 60 * 60 * 24 converts milliseconds into days.

Comparison:
Check if the daysPassed exceeds cycleLength.
Return true if the condition is met; otherwise, return false.
*/
