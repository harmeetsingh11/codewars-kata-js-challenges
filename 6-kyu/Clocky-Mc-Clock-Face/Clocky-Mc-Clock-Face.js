function getTimeFromAngle(angle) {
  // Each hour represents 30 degrees (360 degrees / 12 hours)
  const hours = Math.floor(angle / 30);

  // Calculate the remaining degrees for the minutes
  const remainingDegrees = angle % 30;

  // Each degree represents 2 minutes (30 degrees / 60 minutes)
  const minutes = Math.floor((remainingDegrees * 60) / 30);

  // Format hours to be in 12-hour clock and pad with leading zero if needed
  const formattedHours = hours === 0 ? 12 : String(hours).padStart(2, '0');

  // Format minutes to always have two digits
  const formattedMinutes = String(minutes).padStart(2, '0');

  // Combine formatted hours and minutes
  return `${formattedHours}:${formattedMinutes}`;
}

console.log(getTimeFromAngle(0)); // "12:00"
console.log(getTimeFromAngle(90)); // "03:00"
console.log(getTimeFromAngle(180)); // "06:00"
console.log(getTimeFromAngle(270)); // "09:00"
console.log(getTimeFromAngle(360)); // "12:00"

/* 
Explanation:

Hour Calculation:
Divide the angle by 30 to determine how many full hours have passed. For example, at 90 degrees, 90 / 30 = 3, which corresponds to 3 o'clock.

Minute Calculation:
Use the modulus operator (%) to find the remaining degrees after calculating the hours. Each degree corresponds to 2 minutes, so multiply the remaining degrees by 2 to get the minutes.

Formatting:
Hours: Adjust 0 hours to 12 for the 12-hour clock format. Add leading zeros for single-digit hours.
Minutes: Always display minutes with two digits using padStart.

Output:
Combine the formatted hours and minutes with a colon (:) separator.
*/
