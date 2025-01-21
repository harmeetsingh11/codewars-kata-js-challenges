function snailClimb(columnHeight, dayClimb, nightSlide) {
  // If the snail climbs higher in a single day than the column, it reaches the top in one day
  if (dayClimb >= columnHeight) return 1;

  // Calculate the net distance the snail climbs in a full day (up during the day minus sliding at night)
  const netClimb = dayClimb - nightSlide;

  // Calculate the remaining height after the final day climb
  const remainingHeight = columnHeight - dayClimb;

  // Calculate the number of full days required to reach within reach of the top
  const fullDays = Math.ceil(remainingHeight / netClimb);

  // Total days include the full days plus the last day when the snail reaches the top
  return fullDays + 1;
}

console.log(snailClimb(10, 3, 1)); // Output: 5

/* 
Explanation:

Edge Case for Immediate Success:
If the snail climbs as much or more than the column height during the day, it only takes one day to reach the top.

Net Climb Calculation:
Each day, the snail makes a net climb (dayClimb - nightSlide), as it climbs up during the day and slides down at night.

Remaining Height:
Subtract the distance climbed in the final day's daytime from the total column height (columnHeight - dayClimb).

Days to Reach Near Top:
Calculate the number of days needed to cover the remaining height using the net climb (Math.ceil(remainingHeight / netClimb)).

Final Day:
Add one day to account for the last day's climb to the top.
*/
