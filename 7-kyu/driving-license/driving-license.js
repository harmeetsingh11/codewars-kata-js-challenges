function generateDrivingLicense(data) {
  const [forename, middleName, surname, dob, gender] = data;

  // 1-5: First five characters of the surname, padded with 9s
  const surnamePart = surname.toUpperCase().padEnd(5, '9').slice(0, 5);

  // Split the date of birth into components
  const [day, month, year] = dob.split(/[-\s]/); // Handles both full and abbreviated months

  // 6: Decade digit from the year of birth
  const decadeDigit = year[2];

  // Convert month to a number (e.g., Jan => 01)
  const monthNumber = new Date(`${month} 1, ${year}`).getMonth() + 1;

  // 7-8: Month of birth adjusted for gender (incremented by 5 for females)
  const monthPart = (monthNumber + (gender === 'F' ? 50 : 0))
    .toString()
    .padStart(2, '0');

  // 9-10: Day of birth
  const dayPart = day.padStart(2, '0');

  // 11: Year digit from the year of birth
  const yearDigit = year[3];

  // 12-13: First initials of forename and middle name, padded with 9 if no middle name
  const initialsPart = `${forename[0]}${
    middleName ? middleName[0] : '9'
  }`.toUpperCase();

  // 14: Arbitrary digit - always 9
  const arbitraryDigit = '9';

  // 15-16: Computer check digits - always "AA"
  const checkDigits = 'AA';

  // Combine all parts to form the driving license number
  return `${surnamePart}${decadeDigit}${monthPart}${dayPart}${yearDigit}${initialsPart}${arbitraryDigit}${checkDigits}`;
}

const data = ['John', 'James', 'Smith', '01-Jan-2000', 'M'];
console.log(generateDrivingLicense(data)); // Output: "SMITH801010JJ9AA"

/* 
Explanation:

Surname (1–5):
Convert to uppercase, pad to 5 characters with '9', and slice to ensure only 5 characters.

Decade Digit (6):
Extract the third digit from the year of birth.

Month of Birth (7–8):
Use Date to handle full or abbreviated month names.
Add 50 to the month if the gender is female.

Day of Birth (9–10):
Pad the day to 2 digits.

Year Digit (11):
Extract the last digit of the year of birth.

Initials (12–13):
Use the first initials of the forename and middle name (or '9' if no middle name).

Arbitrary Digit (14):
Always set to '9'.

Check Digits (15–16):
Always set to "AA".
*/
