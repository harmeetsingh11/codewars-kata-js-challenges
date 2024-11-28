function pointsPer48(ppg, mpg) {
  // If mpg is 0, return 0 to avoid division by zero and handle edge case.
  if (mpg === 0) return 0;

  // Calculate extrapolated points per 48 minutes and round to one decimal place.
  return Math.round((ppg / mpg) * 48 * 10) / 10;
}

/* 
Explanation:

Edge Case for 0 Minutes Played:
If mpg is 0, return 0 immediately since the player did not play any minutes and division by zero is undefined.

Extrapolation Formula:
To find the points per 48 minutes, we calculate:
extrapolated points = (ppg/mpg)×48

This scales the player's points to a full 48-minute game.

Rounding to One Decimal Place:
Multiply the result by 10, round using Math.round, and then divide by 10 to round to the nearest tenth.
*/
