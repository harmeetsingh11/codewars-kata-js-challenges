function analyzeMarks(marks) {
  // Calculate the average mark and round to 3 decimal places
  const classAverage = +(
    marks.reduce((sum, mark) => sum + mark, 0) / marks.length
  ).toFixed(3);

  // Create the dictionary for high, average, and low marks
  const counts = { h: 0, a: 0, l: 0 };
  marks.forEach((mark) => {
    if (mark >= 9) counts.h++;
    else if (mark >= 7) counts.a++;
    else counts.l++;
  });

  // Check if all marks are high and decide the return format
  const result = [classAverage, counts];
  if (counts.a === 0 && counts.l === 0) result.push('They did well');

  return result;
}

console.log(analyzeMarks([10, 9, 9, 10, 9, 10, 9]));
// Output: [9.429, { h: 7, a: 0, l: 0 }, "They did well"]

console.log(analyzeMarks([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]));
// Output: [7.9, { h: 5, a: 2, l: 3 }]

/* 
Explanation:

Calculate the Average:
Use reduce to sum the marks and divide by the length of the array.
Use toFixed(3) to round the result to three decimal places and convert it to a number using +.

Count High, Average, and Low Marks:
Initialize a dictionary counts with keys h, a, and l.
Loop through the marks and classify each mark based on the given ranges.

Check for Only High Marks:
If there are no average or low marks (counts.a === 0 && counts.l === 0), add "They did well" to the result.

Return Result:
The result is either [classAverage, counts] or [classAverage, counts, "They did well"] based on the marks' distribution.
*/
