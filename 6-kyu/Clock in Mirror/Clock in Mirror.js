function WhatIsTheTime(timeInMirror) {
  // Split the input time into hours and minutes
  const [mirrorHour, mirrorMinute] = timeInMirror.split(':').map(Number);

  // Calculate the real minutes
  let realMinute = (60 - mirrorMinute) % 60;

  // Calculate the real hour
  let realHour = 12 - mirrorHour;

  // If minutes are not 0, subtract 1 from the real hour
  if (realMinute !== 0) {
    realHour -= 1;
  }

  // Adjust for the 12-hour clock format
  if (realHour <= 0) realHour += 12;

  // Format the output as hh:mm
  return `${realHour.toString().padStart(2, '0')}:${realMinute
    .toString()
    .padStart(2, '0')}`;
}

console.log(WhatIsTheTime('12:22')); // "11:38"
console.log(WhatIsTheTime('05:25')); // "06:35"
console.log(WhatIsTheTime('01:50')); // "10:10"
console.log(WhatIsTheTime('11:58')); // "12:02"
console.log(WhatIsTheTime('12:01')); // "11:59"

/* 
Explanation:

Handling realHour: We calculate the real hour as 12 - mirrorHour. If the minute is non-zero, we subtract 1 from the real hour to account for the fact that the clock's hour hand moves slightly forward as minutes pass.

Wrap around the 12-hour format: If the resulting hour is less than or equal to 0, we wrap it around by adding 12 (since the clock is based on a 12-hour format).

Formatted output: We use padStart(2, '0') to ensure that both the hour and the minute are always displayed with two digits.
*/
