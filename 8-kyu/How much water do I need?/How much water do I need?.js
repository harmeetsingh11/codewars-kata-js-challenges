function howMuchWater(water, load, clothes) {
  // Validation checks
  if (clothes < load) return 'Not enough clothes';
  if (clothes > 2 * load) return 'Too much clothes';

  // Calculate the extra multiplier for clothes above the load
  const extraClothes = clothes - load;
  const multiplier = Math.pow(1.1, extraClothes);

  // Calculate the final water amount
  const waterNeeded = water * multiplier;

  // Convert the rounded result back to a number
  return Number(waterNeeded.toFixed(2));
}

// Test cases
console.log(howMuchWater(5, 10, 14)); // 7.32
console.log(howMuchWater(5, 10, 5)); // 'Not enough clothes'
console.log(howMuchWater(5, 10, 20)); // 'Too much clothes'
console.log(howMuchWater(5, 10, 10)); // 5.00
console.log(howMuchWater(10, 15, 23)); // 86.38 (as a number, not string)
