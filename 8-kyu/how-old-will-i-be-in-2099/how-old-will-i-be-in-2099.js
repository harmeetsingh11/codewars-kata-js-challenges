function calculateAge(birthYear, targetYear) {
  // Calculate the age difference
  const age = targetYear - birthYear;

  // If birthYear equals targetYear
  if (age === 0) return 'You were born this very year!';

  // If targetYear is in the future
  if (age > 0) {
    return `You are ${age} year${age > 1 ? 's' : ''} old.`;
  }

  // If targetYear is in the past
  return `You will be born in ${-age} year${-age > 1 ? 's' : ''}.`;
}

/* 
Explanation:

Calculate Age Difference:
We compute the difference between targetYear and birthYear to get age. This will be positive if the target year is in the future, negative if it's in the past, and zero if it's the same year.

Same Year Case:
If age is 0, it means birthYear equals targetYear, so we return "You were born this very year!".

Future Case:
If age is positive, it means targetYear is after birthYear, so we return "You are X year(s) old."
We use age > 1 ? 's' : '' to correctly handle the plural form.

Past Case:
If age is negative, it means targetYear is before birthYear, so we return "You will be born in X year(s)."
-age is used to convert the negative value to positive for the output, and -age > 1 ? 's' : '' handles the plural form.
*/
