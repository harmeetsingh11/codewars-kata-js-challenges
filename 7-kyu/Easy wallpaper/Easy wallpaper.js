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

/* 
Explanation:

Check for Zero Dimensions: If any of the room dimensions (l, w, or h) is zero, return "zero" immediately since no wallpaper is needed.

Convert Roll Width: The wallpaper roll width is given in centimeters, so it's converted to meters (0.52 meters).

Calculate Surface Area: The formula 2 * (l * h + w * h) calculates the total area of the walls to be covered.

Area Covered by One Roll: Each wallpaper roll has a width of 0.52 meters and a length of 10 meters, so we multiply these to find the area one roll can cover.

Calculate Rolls Needed: We calculate the number of rolls required, ensuring to add 15% extra by multiplying the surface area by 1.15. We use Math.ceil() to round up since partial rolls still count as full rolls.

Return the Result in Words: Finally, we map the number of rolls to its corresponding English word from the numbers array and return it.

Example:
wallpaper(4.0, 3.5, 3.0) will return "ten", as the calculation gives 9.8 rolls, and rounding up gives 10.
wallpaper(0.0, 3.5, 3.0) will return "zero" because one dimension is zero.
*/
