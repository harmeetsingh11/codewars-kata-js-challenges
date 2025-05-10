function howMuchCoffee(events) {
  // Define a Set of valid events that require coffee
  const validEvents = new Set(['cw', 'cat', 'dog', 'movie']);

  // Reduce the array to calculate total coffee needed
  const coffeeCount = events.reduce((total, event) => {
    const lowerEvent = event.toLowerCase();
    // Only consider if the event is one of the valid ones
    if (validEvents.has(lowerEvent)) {
      // If event is all uppercase, add 2 coffees; else add 1
      total += event === event.toUpperCase() ? 2 : 1;
    }
    return total;
  }, 0);

  // Return the final result based on coffee count
  return coffeeCount > 3 ? 'You need extra sleep' : coffeeCount;
}

/*
### Explanation:

* We use a `Set` for efficient O(1) lookup of valid events.
* The `reduce` method efficiently accumulates the total coffee count.
* Events in uppercase require `2` coffees, lowercase `1`.
* If coffee count exceeds `3`, return `'You need extra sleep'`.
*/
