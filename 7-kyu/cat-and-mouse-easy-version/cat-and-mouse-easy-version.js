function catMouse(x) {
  // Calculate the distance between 'C' and 'm'
  const distance = Math.abs(x.indexOf('C') - x.indexOf('m'));

  // If the distance is less than or equal to 4 (including 'C' and 'm'), return 'Caught!'
  // Otherwise, return 'Escaped!'
  return distance <= 4 ? 'Caught!' : 'Escaped!';
}

/* 
Explanation:

Find the positions:
Use indexOf to get the positions of the cat 'C' and the mouse 'm' in the string.

Calculate the distance:
Subtract the indices of the two characters and use Math.abs to ensure the distance is positive.

Check the jump condition:
The cat can catch the mouse if the distance is 4 or less (accounting for 3 characters between the cat and the mouse plus the two positions themselves).

Return the result:
Use a concise ternary operator to decide between 'Caught!' and 'Escaped!'.
*/
