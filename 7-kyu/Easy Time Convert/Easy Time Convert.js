function timeConvert(minutes) {
  // If the input is 0 or negative, return "00:00"
  if (minutes <= 0) return '00:00';

  // Calculate hours by dividing minutes by 60
  let hours = Math.floor(minutes / 60);

  // Calculate remaining minutes using modulo operation
  let remainingMinutes = minutes % 60;

  // Return the time in "hh:mm" format, ensuring two digits for hours and minutes
  return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(
    2,
    '0'
  )}`;
}

/* 
Explanation:

Input check: If the input is 0 or negative, we immediately return "00:00" as specified.

Hours calculation: We calculate the number of hours by dividing the total minutes by 60 and using Math.floor() to round down to the nearest whole number.

Minutes calculation: The remaining minutes are found using the modulo operation (minutes % 60), which gives the remainder after dividing by 60.

Formatting: We ensure both the hours and minutes are always two digits, even if the value is less than 10, by using 
String().padStart(2, '0'). This ensures the output is in the required "hh:mm" format.

Example:
For 78 minutes:
78 / 60 gives 1 hour.
78 % 60 gives 18 minutes. So, the output will be "01:18".
*/
