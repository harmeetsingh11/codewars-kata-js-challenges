function mostFrequentDays(year) {
  // Days of the week in order, starting with Monday
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Get the day of the week for Jan 1st and Dec 31st of the given year
  const jan1 = new Date(year, 0, 1).getDay(); // 0 = Sunday, 6 = Saturday
  const dec31 = new Date(year, 11, 31).getDay();

  // Convert Sunday (0) to 6 for compatibility with Monday as the start of the week
  const jan1Index = jan1 === 0 ? 6 : jan1 - 1;
  const dec31Index = dec31 === 0 ? 6 : dec31 - 1;

  // If Jan 1st and Dec 31st fall on the same day, it's the most frequent day
  if (jan1Index === dec31Index) return [daysOfWeek[jan1Index]];

  // If they're different, both days occur equally often (leap year scenario)
  return [daysOfWeek[jan1Index], daysOfWeek[dec31Index]].sort(
    (a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b)
  );
}

console.log(mostFrequentDays(2427)); // ['Friday']
console.log(mostFrequentDays(2185)); // ['Saturday']
console.log(mostFrequentDays(2860)); // ['Thursday', 'Friday']

/* 
Explanation:

Days of the Week Array: The array daysOfWeek ensures consistent ordering from Monday to Sunday.

Date Calculations:
Use new Date(year, month, day) to determine the day of the week for January 1st (jan1) and December 31st (dec31).
Adjust the day indices so Monday = 0, ..., Sunday = 6, which aligns with the array daysOfWeek.

Leap Year Handling:
If January 1st and December 31st fall on the same weekday, return it as the only frequent day.
Otherwise, both are equally frequent in leap years, so return both days sorted by the order in the week.

Sorting: For leap years, days are sorted based on their order in daysOfWeek.

Efficiency:
The solution computes only two dates and performs minimal operations, making it both time- and space-efficient.
*/
