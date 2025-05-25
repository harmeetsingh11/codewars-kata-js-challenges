const animals = [
  'Rat',
  'Ox',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Goat',
  'Monkey',
  'Rooster',
  'Dog',
  'Pig',
];
const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

function getZodiac(year) {
  // Base year for the cycle is 1984 (Wood Rat)
  const baseYear = 1984;

  // Calculate difference from base year
  const diff = year - baseYear;

  // Animals cycle every 12 years
  // Use modulo 12 to find animal index, adjusting for negative years
  const animalIndex = ((diff % 12) + 12) % 12;

  // Elements cycle every 10 years (5 elements * 2 years each)
  // Each element lasts 2 years, so divide difference by 2
  // Use modulo 5 to find element index, adjusting for negative years
  const elementIndex = ((Math.floor(diff / 2) % 5) + 5) % 5;

  // Return combined string
  return `${elements[elementIndex]} ${animals[animalIndex]}`;
}

console.log(getZodiac(1998)); // Earth Tiger

// Your zodiac sign and element:
// I'm born in 1998, so I am an Earth Tiger.

/*
### Explanation:

- The animal repeats every 12 years, so we take `(year - 1984) mod 12`.
- The element changes every 2 years, cycling through 5 elements (total 10 years), so `(floor((year - 1984) / 2) mod 5)`.
- Using modulo arithmetic with adjustments handles years before 1984 gracefully.
- The function returns the correct combination string `"Element Animal"`.
*/
