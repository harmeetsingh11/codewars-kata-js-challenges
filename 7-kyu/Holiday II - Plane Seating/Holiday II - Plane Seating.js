function getSeatLocation(seat) {
  // Extract the number and letter from the seat string
  const match = seat.match(/^(\d{1,2})([A-K])$/);

  // Validate the seat format and exclude letters 'I' and 'J'
  if (!match || ['I', 'J'].includes(match[2])) return 'No Seat!!';

  const number = parseInt(match[1], 10);
  const letter = match[2];

  // Validate seat number range
  if (number < 1 || number > 60) return 'No Seat!!';

  // Determine section based on seat number
  const section = number <= 20 ? 'Front' : number <= 40 ? 'Middle' : 'Back';

  // Determine side based on seat letter
  const side = 'ABC'.includes(letter)
    ? 'Left'
    : 'DEF'.includes(letter)
    ? 'Middle'
    : 'Right';

  return `${section}-${side}`;
}

console.log(getSeatLocation('2B')); // Front-Left
console.log(getSeatLocation('35E')); // Middle-Middle
console.log(getSeatLocation('61A')); // No Seat!!
console.log(getSeatLocation('14I')); // No Seat!!
