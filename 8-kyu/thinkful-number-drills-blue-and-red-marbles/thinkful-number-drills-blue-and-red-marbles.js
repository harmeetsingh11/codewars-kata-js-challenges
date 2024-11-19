function guessBlue(startBlue, startRed, pulledBlue, pulledRed) {
  // Remaining blue and red marbles in the bag
  const remainingBlue = startBlue - pulledBlue;
  const remainingRed = startRed - pulledRed;

  // Total remaining marbles
  const totalRemaining = remainingBlue + remainingRed;

  // Probability of drawing a blue marble
  return remainingBlue / totalRemaining;
}

/* 
Explanation:

Calculate Remaining Marbles:
Subtract the number of pulled marbles from the starting count to find how many blue and red marbles are left in the bag.

Determine Total Remaining:
Add the remaining blue and red marbles to calculate the total number of marbles still in the bag.

Compute Probability:
Divide the number of remaining blue marbles by the total number of remaining marbles to get the probability of drawing a blue marble.

Return Result:
The result is a float representing the probability, which will always be between 0 and 1.
*/
