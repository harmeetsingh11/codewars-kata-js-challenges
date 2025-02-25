// Solution 1
function redarr(arr) {
  // Create a sorted array with unique channel names
  const uniqueSortedChannels = [...new Set(arr)].sort();

  // Convert the array into an object with indices as keys
  return uniqueSortedChannels.reduce((obj, channel, index) => {
    obj[index] = channel;
    return obj;
  }, {});
}

console.log(redarr(['BBC1', 'BBC2', 'MTV']));
// Output: { "0": "BBC1", "1": "BBC2", "2": "MTV" }

console.log(redarr(['BBC1', 'BBC1', 'BBC2', 'MTV']));
// Output: { "0": "BBC1", "1": "BBC2", "2": "MTV" }

// ------------------
// Solution 2
function redarr(arr) {
  // Create a sorted array with unique channel names
  const uniqueSortedChannels = [...new Set(arr)].sort();

  // Convert the array into an object with indices as keys
  return Object.fromEntries(
    uniqueSortedChannels.map((channel, index) => [index, channel])
  );
}
