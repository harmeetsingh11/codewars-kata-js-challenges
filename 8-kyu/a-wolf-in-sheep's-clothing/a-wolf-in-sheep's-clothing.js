function warnTheSheep(queue) {
  // Find the position of the wolf in the array
  const wolfIndex = queue.indexOf('wolf');
  // Calculate the position of the sheep in danger
  const sheepInDanger = queue.length - wolfIndex - 1;

  // If the wolf is at the front of the queue, return a warning message
  if (sheepInDanger === 0) {
    return 'Pls go away and stop eating my sheep';
  }

  // Otherwise, warn the sheep in danger
  return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
}

/* 
Explanation:

Find the wolf's position:
Use indexOf to locate the wolf in the queue. This gives the index of the wolf.

Calculate the sheep's position:
Since the queue is reversed (from the perspective of the farmer), calculate the position of the sheep in danger using queue.length - wolfIndex - 1.

Check the wolf's position:
If sheepInDanger === 0, it means the wolf is at the front (closest to the farmer), and no sheep is in immediate danger.

Construct the appropriate warning:
Use a template literal to return the warning message for the sheep in danger.
*/
