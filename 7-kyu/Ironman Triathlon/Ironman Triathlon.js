function ironmanStatus(distance) {
  // Total race distance components
  const swim = 2.4,
    bike = 112,
    run = 26.2;
  const totalDistance = swim + bike + run;
  const remaining = (totalDistance - distance).toFixed(2) + ' to go!';

  // Check if race has just started
  if (distance === 0) return 'Starting Line... Good Luck!';

  // Check if race is completed
  if (distance >= totalDistance) return "You're done! Stop running!";

  // Determine current activity based on distance covered
  if (distance < swim) return { Swim: remaining };
  if (distance < swim + bike) return { Bike: remaining };
  if (distance < totalDistance - 10) return { Run: remaining };

  // Final stretch of the race
  return { Run: 'Nearly there!' };
}

console.log(ironmanStatus(0)); // "Starting Line... Good Luck!"
console.log(ironmanStatus(2)); // { Swim: "138.60 to go!" }
console.log(ironmanStatus(5)); // { Bike: "104.60 to go!" }
console.log(ironmanStatus(120)); // { Run: "20.60 to go!" }
console.log(ironmanStatus(140)); // { Run: "Nearly there!" }
console.log(ironmanStatus(140.6)); // "You're done! Stop running!"
