var rooms = {
  first: {
    description: 'This is the first room', // Added missing comma
    items: {
      // Fixed missing opening brace and proper key-value structure
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    },
  },
  second: {
    description: 'This is the second room', // Added missing comma
    items: {
      couch: 'This couch looks like it would hurt your back', // Fixed missing closing quote and added comma
      table: 'On the table there is an unopened bottle of water',
    },
  },
};

console.log(rooms);
