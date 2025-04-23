function dayToDate(day, isLeap) {
  // Define number of days in each month for normal and leap years
  const months = [
    ['January', 31],
    ['February', isLeap ? 29 : 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31],
  ];

  // Iterate through months to find where the 'day' falls
  for (let [month, daysInMonth] of months) {
    if (day <= daysInMonth) {
      return `${month}, ${day}`; // Found the correct month
    }
    day -= daysInMonth; // Subtract days of the current month and move to next
  }
}

console.log(dayToDate(41, false)); // "February, 10"
console.log(dayToDate(60, false)); // "March, 1"
console.log(dayToDate(60, true)); // "February, 29"
console.log(dayToDate(365, false)); // "December, 31"
console.log(dayToDate(366, true)); // "December, 31"
