function getResistorBands(ohmsValue) {
  // Define resistor color codes
  const colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white',
  ];

  // Extract numeric value from input string
  let [value] = ohmsValue.split(' ');

  // Convert to number representation
  let multiplier = 0;
  if (value.includes('k')) {
    value = parseFloat(value) * 1000;
  } else if (value.includes('M')) {
    value = parseFloat(value) * 1000000;
  } else {
    value = parseInt(value);
  }

  // Convert number to string for easy extraction of first two digits
  let digits = value.toString();
  let firstTwo = digits.slice(0, 2); // First two significant digits
  multiplier = digits.length - 2; // Power of ten (multiplier)

  // Map digits to color bands
  let bands = [
    colors[parseInt(firstTwo[0])],
    colors[parseInt(firstTwo[1])],
    colors[multiplier],
    'gold', // Fixed tolerance band of 5%
  ];

  return bands.join(' ');
}

// test cases
console.log(getResistorBands('10 ohms')); // "brown black black gold"
console.log(getResistorBands('100 ohms')); // "brown black brown gold"
console.log(getResistorBands('1k ohms')); // "brown black red gold"
console.log(getResistorBands('22k ohms')); // "red red orange gold"
console.log(getResistorBands('2M ohms')); // "red black green gold"
