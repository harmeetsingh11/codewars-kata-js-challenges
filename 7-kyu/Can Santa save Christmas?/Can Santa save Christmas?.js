function canSantaSaveChristmas(durations) {
  // Convert each time duration string into total seconds and sum them up
  const totalSeconds = durations.reduce((sum, time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number); // Split into parts and convert to numbers
    return sum + hours * 3600 + minutes * 60 + seconds; // Convert HH:MM:SS to seconds
  }, 0);

  // 24 hours in seconds
  const secondsInADay = 24 * 3600;

  // Check if total seconds required is less than or equal to 24 hours
  return totalSeconds <= secondsInADay;
}

const durations = ['01:30:00', '02:45:30', '20:15:00'];
console.log(canSantaSaveChristmas(durations)); // true or false

/* 
Explanation:

Input Parsing and Conversion:
Each string in the array (e.g., "01:30:00") is split into hours, minutes, and seconds using .split(":").
These are converted into numbers with map(Number).

Time Calculation:
Convert hours to seconds by multiplying by 3600.
Convert minutes to seconds by multiplying by 60.
Add the seconds directly.
Sum up all the converted seconds using reduce.

Comparison:
Calculate the total seconds available in 24 hours (24 * 3600).
Compare the total time needed (totalSeconds) with secondsInADay.

Result:
Return true if totalSeconds is less than or equal to the seconds in 24 hours, otherwise return false.
*/
