var number = function (busStops) {
  // The function uses the reduce method to iterate through the busStops array.
  // busStops is an array of pairs (arrays with two elements each).
  // Each pair represents the number of people getting on the bus (pair[0]) and the number getting off (pair[1]) at a stop.

  return busStops.reduce((peopleLeft, pair) => {
    // For each stop, the number of people still on the bus (peopleLeft) is updated by:
    // - Adding the number of people getting on (pair[0]).
    // - Subtracting the number of people getting off (pair[1]).
    return peopleLeft + pair[0] - pair[1];
  }, 0); // The second argument to reduce, 0, is the initial value for peopleLeft, representing the number of people on the bus at the start.
};

// Example:
// If busStops is [[10, 0], [3, 5], [5, 8]]:

// At the first stop: 10 - 0 = 10 people on the bus.
// At the second stop: 10 + 3 - 5 = 8 people on the bus.
// At the third stop: 8 + 5 - 8 = 5 people on the bus.
// The function would return 5.
