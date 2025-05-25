function naughtyOrNice(data) {
  // Initialize counters for Naughty and Nice
  let naughtyCount = 0;
  let niceCount = 0;

  // Loop over each month in the data
  for (const month in data) {
    // Loop over each day in the month
    for (const day in data[month]) {
      // Count occurrences of Naughty or Nice
      if (data[month][day] === 'Naughty') {
        naughtyCount++;
      } else if (data[month][day] === 'Nice') {
        niceCount++;
      }
    }
  }

  // Return "Naughty!" if Naughty count is greater,
  // otherwise return "Nice!" (also covers tie case)
  return naughtyCount > niceCount ? 'Naughty!' : 'Nice!';
}

/*
### Explanation:

- We iterate through every month and every day inside that month.
- We count how many times `'Naughty'` and `'Nice'` appear.
- If `'Naughty'` count is strictly greater, we return `"Naughty!"`.
- If `'Nice'` is greater or equal, we return `"Nice!"` (as per problem statement).
*/
