function raceResults(input) {
  if (!input) return ''; // Return empty string if input is empty

  // Helper to convert time string to total seconds
  const toSeconds = (time) => {
    const [h, m, s] = time.split('|').map(Number);
    return h * 3600 + m * 60 + s;
  };

  // Helper to format seconds back to hh|mm|ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m, s].map((x) => x.toString().padStart(2, '0')).join('|');
  };

  // Parse input into an array of times in seconds
  const timesInSeconds = input.split(', ').map(toSeconds);
  timesInSeconds.sort((a, b) => a - b); // Sort for median and range

  // Calculate statistics
  const range = timesInSeconds[timesInSeconds.length - 1] - timesInSeconds[0];
  const average = Math.floor(
    timesInSeconds.reduce((sum, t) => sum + t, 0) / timesInSeconds.length
  );
  const median =
    timesInSeconds.length % 2 === 1
      ? timesInSeconds[Math.floor(timesInSeconds.length / 2)]
      : Math.floor(
          (timesInSeconds[timesInSeconds.length / 2 - 1] +
            timesInSeconds[timesInSeconds.length / 2]) /
            2
        );

  // Construct the result string
  return `Range: ${formatTime(range)} Average: ${formatTime(
    average
  )} Median: ${formatTime(median)}`;
}

// Example
const input = '01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17';
console.log(raceResults(input));

/* 
Explanation:

Input Validation:
If the input string is empty, return an empty string immediately.

Convert Time to Seconds:
Each time string is converted into total seconds for easier arithmetic.

Sorting:
Sorting the array of times in seconds is necessary for calculating the median and range.

Calculate Statistics:
Range: Difference between the max and min times.
Average: Sum of all times divided by the count, truncated to an integer.
Median:
If the length is odd, take the middle element.
If the length is even, take the average of the two middle elements.

Format Time:
Convert seconds back into the hh|mm|ss format using padStart to ensure two-digit representation.

Result String:
Combine all calculated values into the required output format.
*/
