function sabbatical(val, happiness, s) {
  // Calculate the sum of the occurrences of letters from 'sabbatical' in string s
  const letterCount = [...s].reduce(
    (count, char) => ('sabbatical'.includes(char) ? count + 1 : count),
    0
  );

  // Calculate the total score
  const totalScore = val + happiness + letterCount;

  // Determine the outcome based on the total score
  return totalScore > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}

console.log(sabbatical(5, 6, 'I am considering a sabbatical leave')); // Output: 'Sabbatical! Boom!'
console.log(sabbatical(3, 2, 'Work is overwhelming lately')); // Output: 'Back to your desk, boy.'

/* 
Explanation:

letterCount:
The reduce function iterates over each character of string s.
For each character, it checks if it exists in the string "sabbatical".
If true, the count is incremented by 1; otherwise, it remains unchanged.

totalScore:
The sum of val, happiness, and the computed letterCount.

Return Statement:
If totalScore is greater than 22, it returns "Sabbatical! Boom!".
Otherwise, it returns "Back to your desk, boy.".
*/
