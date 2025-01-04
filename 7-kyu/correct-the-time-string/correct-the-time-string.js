function correctTime(time) {
  // If the input is null, empty, or doesn't match the valid time format, return the appropriate value
  if (!time) return time; // Return null or empty string for invalid input
  if (!/^\d{2}:\d{2}:\d{2}$/.test(time)) return null;

  // Split the time into hours, minutes, and seconds
  let [hours, minutes, seconds] = time.split(':').map(Number);

  // Adjust seconds to fit within 0-59 and carry over extra to minutes
  minutes += Math.floor(seconds / 60);
  seconds %= 60;

  // Adjust minutes to fit within 0-59 and carry over extra to hours
  hours += Math.floor(minutes / 60);
  minutes %= 60;

  // Adjust hours to fit within 0-23 using modulo for 24-hour format
  hours %= 24;

  // Return the corrected time in HH:MM:SS format
  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');
}

// Examples:
console.log(correctTime('09:10:01')); // "09:10:01"
console.log(correctTime('11:70:10')); // "12:10:10"
console.log(correctTime('19:99:99')); // "20:40:39"
console.log(correctTime('24:01:01')); // "00:01:01"
console.log(correctTime('')); // ""
console.log(correctTime(null)); // null
console.log(correctTime('invalid')); // null

/* 
Explanation:

Validation:
If the time is null or an empty string, it directly returns the same value.
If the time format doesn't match HH:MM:SS using a regex, it returns null.

Splitting and Conversion:
The input string is split into hours, minutes, and seconds using split(':') and converted to numbers using map(Number).

Normalization:
Seconds Adjustment: Extra seconds are converted into minutes using Math.floor(seconds / 60). The remaining seconds are updated using seconds % 60.
Minutes Adjustment: Extra minutes are converted into hours similarly, and the remaining minutes are updated.
Hours Adjustment: Hours are normalized to a 24-hour clock using hours % 24.

Formatting:
Each unit (hours, minutes, seconds) is formatted to always have two digits using String(unit).padStart(2, '0').
The corrected units are joined with : to form the final time string.
*/
