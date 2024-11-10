function quarterOf(month) {
  // Divide month by 3 and round up to get the quarter
  return Math.ceil(month / 3);
}

/* 
Explanation:

Math Calculation:
The year is divided into quarters, with each quarter spanning 3 months:
Q1: Months 1–3
Q2: Months 4–6
Q3: Months 7–9
Q4: Months 10–12
By dividing month by 3 and using Math.ceil, we round up to the nearest whole number, which corresponds to the quarter.
For example, month = 2 → 2 / 3 = 0.67, and Math.ceil(0.67) = 1, so it's in Q1.
month = 6 → 6 / 3 = 2, so it's in Q2.
*/
