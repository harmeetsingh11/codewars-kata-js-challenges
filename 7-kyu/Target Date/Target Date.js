function dateNbDays(a0, a, p) {
  // Define the starting date
  let date = new Date(2016, 0, 1);

  // Daily interest rate (p% per 360 days, so divide by 36000)
  const dailyRate = p / 36000;

  // Increase the amount daily until it reaches or exceeds 'a'
  while (a0 < a) {
    a0 += a0 * dailyRate; // Add interest
    date.setDate(date.getDate() + 1); // Move to the next day
  }

  // Return the final date in "YYYY-MM-DD" format
  return date.toISOString().split('T')[0];
}

console.log(dateNbDays(100, 101, 0.98)); // "2017-01-01"
console.log(dateNbDays(100, 150, 2.0)); // "2035-12-26"
