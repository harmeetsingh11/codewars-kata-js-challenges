function checkLottery(ticket, win) {
  // Count mini-wins by iterating through each subarray
  const miniWins = ticket.reduce((count, [str, num]) => {
    // Check if any character's char code matches the number
    const hasWin = str.split('').some((char) => char.charCodeAt(0) === num);
    return count + (hasWin ? 1 : 0); // Increment count if a mini-win is found
  }, 0);

  // Compare mini-win count with the required win number and return the result
  return miniWins >= win ? 'Winner!' : 'Loser!';
}

// Example
const ticket = [
  ['ABC', 65],
  ['HGR', 74],
  ['BYHT', 74],
];
const win = 2;
console.log(checkLottery(ticket, win)); // Output: 'Winner!'

/* 
Explanation:

Input Format: The ticket is an array of subarrays, where each subarray contains a string and a number. win is the number of mini-wins required.

Logic:
Use reduce to iterate through the ticket and maintain a count of mini-wins.

For each subarray:
Use some to check if any character in the string has a character code equal to the number.
If a match is found, increment the mini-win count.
Compare the total mini-win count to win and return the appropriate result.
*/
