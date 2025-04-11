/**
 * Function to calculate how many days are left from today to a given date.
 *
 * @param {Date} date - The target event date as a Date object.
 * @returns {string} - A message indicating how far the event is from today.
 *
 * Intuition:
 * - Dates in JavaScript are stored as milliseconds since Jan 1, 1970 (Unix epoch).
 * - By subtracting today's timestamp from the target date's timestamp,
 *   and then converting the result to days, we can figure out how many days away the event is.
 *
 * Approach:
 * 1. Get the current date.
 * 2. Calculate the number of milliseconds in one day.
 * 3. Subtract today's timestamp from the event date's timestamp.
 * 4. Divide by milliseconds per day to get day difference.
 * 5. Round the result to handle partial day time differences.
 * 6. Return message based on whether the day is in the past, today, or future.
 */

function countDays(date) {
  // Step 1: Get the current date and time
  var today = new Date();

  // Step 2: Define number of milliseconds in one day
  var one_day = 1000 * 60 * 60 * 24;

  // Step 3: Get time difference between given date and today in milliseconds
  // Step 4: Convert it to days and round to get an integer
  var daysFromToday = Math.round((date.getTime() - today.getTime()) / one_day);

  // Step 5: Determine the output based on how many days away the event is
  if (daysFromToday < 0) {
    return 'The day is in the past!'; // Event already happened
  }
  if (daysFromToday == 0) {
    return 'Today is the day!'; // Event is today
  }
  return `${daysFromToday} days`; // Event is in the future
}
