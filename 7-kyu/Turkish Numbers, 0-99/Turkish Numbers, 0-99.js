function numberToTurkish(n) {
  // Define mappings for units (0-9) and tens (10-90)
  const units = [
    'sıfır',
    'bir',
    'iki',
    'üç',
    'dört',
    'beş',
    'altı',
    'yedi',
    'sekiz',
    'dokuz',
  ];
  const tens = [
    '',
    'on',
    'yirmi',
    'otuz',
    'kırk',
    'elli',
    'altmış',
    'yetmiş',
    'seksen',
    'doksan',
  ];

  // Extract tens and unit digits
  let ten = Math.floor(n / 10),
    unit = n % 10;

  // Return combined string, omitting unit if zero (except for zero itself)
  return ten ? (unit ? `${tens[ten]} ${units[unit]}` : tens[ten]) : units[unit];
}

console.log(numberToTurkish(1)); // "bir"
console.log(numberToTurkish(13)); // "on üç"
console.log(numberToTurkish(27)); // "yirmi yedi"
console.log(numberToTurkish(38)); // "otuz sekiz"
console.log(numberToTurkish(77)); // "yetmiş yedi"
console.log(numberToTurkish(94)); // "doksan dört"

/* 
Explanation:
1. **Define arrays** for units (0-9) and tens (10-90) to store their Turkish equivalents.
2. **Extract the tens and units digits** from the given number.
3. **Construct the output string**:
   - If the number has both tens and units, concatenate them with a space.
   - If there's only a tens value, return it directly.
   - If the number is a single-digit (0-9), return the corresponding unit.
4. **Efficient and concise**, handling edge cases naturally (e.g., `10 -> "on"`, `0 -> "sıfır"`).
*/
