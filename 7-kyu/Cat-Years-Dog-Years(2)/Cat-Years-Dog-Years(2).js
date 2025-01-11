function ownedCatAndDog(catYears, dogYears) {
  // Helper function to calculate human years for a pet based on their age in pet years
  const calculateHumanYears = (
    years,
    firstYear,
    secondYear,
    subsequentYear
  ) => {
    if (years < firstYear) return 0; // If the age is less than the first year's equivalent, return 0
    if (years < firstYear + secondYear) return 1; // If less than first + second year equivalent, return 1
    return 2 + Math.floor((years - firstYear - secondYear) / subsequentYear);
    // Subtract first + second year equivalents, divide remaining by subsequent year's value, truncate to integer
  };

  // Calculate owned years for the cat
  const ownedCat = calculateHumanYears(catYears, 15, 9, 4);

  // Calculate owned years for the dog
  const ownedDog = calculateHumanYears(dogYears, 15, 9, 5);

  // Return the results as an array
  return [ownedCat, ownedDog];
}

console.log(ownedCatAndDog(24, 39)); // [2, 3]

/* 
Explanation:

calculateHumanYears function:
This function calculates the equivalent "human" years for a given pet based on their age in "pet years."
It uses constants for the first year's value, the second year's value, and the subsequent year's value.
The logic ensures that the calculation correctly handles edge cases (e.g., years below the first or second year's thresholds).

Logic for catYears and dogYears:
Both catYears and dogYears are processed using the helper function to compute how long you've owned the cat and dog in "human years."

Efficiency:
The calculation uses simple arithmetic and is done in constant time, making it highly efficient.

Example Calculation:
For a cat aged 24 cat years:
First year: 15
Second year: 15 + 9 = 24 (matches catYears)
You’ve owned the cat for 2 years.
For a dog aged 39 dog years:
First year: 15
Second year: 15 + 9 = 24
Remaining years: 39 - 24 = 15
Additional human years: Math.floor(15 / 5) = 3
Total: 2 + 3 = 5 years owned.
*/
