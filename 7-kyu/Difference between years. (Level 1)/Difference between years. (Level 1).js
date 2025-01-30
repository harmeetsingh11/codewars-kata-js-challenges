function dateDifference(date1, date2) {
  // Extract the years from both date strings by splitting at the '/' and taking the first part
  const year1 = parseInt(date1.split('/')[0]);
  const year2 = parseInt(date2.split('/')[0]);

  // Calculate and return the absolute difference between the two years
  return Math.abs(year2 - year1);
}

// Test cases
console.log(dateDifference('1997/10/10', '2015/10/10')); // 18
console.log(dateDifference('2015/10/10', '1997/10/10')); // 18

/* 
Explanation:

Extract the year: We split each date string at the '/' and take the first part (the year). date1.split('/')[0] will give us the year from the first string and date2.split('/')[0] from the second string.

Parse the year: We convert the year string into an integer using parseInt().

Calculate the absolute difference: We calculate the absolute difference between the two years using Math.abs() to ensure the result is always non-negative.

Return the result: We return the calculated difference.
*/
