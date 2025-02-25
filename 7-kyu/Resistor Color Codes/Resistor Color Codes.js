function decodeResistorColors(bands) {
  // Define color codes mapping to digits
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  // Define tolerance mapping
  const toleranceMap = { gold: 5, silver: 10 };

  // Split the input string into an array of colors
  const colors = bands.split(' ');

  // Compute base resistance value
  let ohms =
    (colorCodes[colors[0]] * 10 + colorCodes[colors[1]]) *
    10 ** colorCodes[colors[2]];

  // Determine tolerance
  let tolerance = toleranceMap[colors[3]] || 20;

  // Format the ohms value based on magnitude
  let formattedOhms =
    ohms >= 1e6 ? ohms / 1e6 + 'M' : ohms >= 1e3 ? ohms / 1e3 + 'k' : ohms;

  return `${formattedOhms} ohms, ${tolerance}%`;
}

// Test cases
console.log(decodeResistorColors('brown black black')); // "10 ohms, 20%"
console.log(decodeResistorColors('brown black brown gold')); // "100 ohms, 5%"
console.log(decodeResistorColors('red red brown')); // "220 ohms, 20%"
console.log(decodeResistorColors('orange orange brown gold')); // "330 ohms, 5%"
console.log(decodeResistorColors('yellow violet brown silver')); // "470 ohms, 10%"
console.log(decodeResistorColors('blue gray brown')); // "680 ohms, 20%"
console.log(decodeResistorColors('brown black red silver')); // "1k ohms, 10%"
console.log(decodeResistorColors('brown black orange')); // "10k ohms, 20%"
console.log(decodeResistorColors('red black green gold')); // "2M ohms, 5%"

/*
### Explanation:
1. **Mapping Colors to Values**:  
   - The `colorCodes` object maps color names to their respective numeric values.
   - The `toleranceMap` stores tolerance values for gold and silver bands, defaulting to 20% if absent.

2. **Parsing the Input**:  
   - The input string is split into an array of color bands.

3. **Computing Resistance**:  
   - The first two colors form a two-digit number.
   - The third color represents the power of ten multiplier.
   - The resistance is computed as:  
     \[
     (firstDigit \times 10 + secondDigit) \times 10^{multiplier}
     \]

4. **Determining Tolerance**:  
   - If a fourth band exists, its corresponding value is used; otherwise, 20% is the default.

5. **Formatting Output**:  
   - If the resistance is ≥1M, it’s divided by `1e6` and suffixed with `"M"`.
   - If it’s ≥1k, it’s divided by `1e3` and suffixed with `"k"`.
   - Otherwise, it remains unchanged.
   - The result is returned in the required format.

This approach is **efficient (O(1) time complexity)** and **concise**, handling all cases elegantly. 
*/
