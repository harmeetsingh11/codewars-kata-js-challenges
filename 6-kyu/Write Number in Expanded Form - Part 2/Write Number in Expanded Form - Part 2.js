function expandedForm(num) {
  // Convert number to string and split into whole and decimal parts
  let [intPart, decPart] = num.toString().split('.');

  // Process integer part: Extract non-zero digits with place values
  let intExpanded = intPart
    .split('')
    .map((d, i, arr) => (d !== '0' ? d + '0'.repeat(arr.length - i - 1) : ''))
    .filter(Boolean);

  // Process decimal part: Extract non-zero digits with fractional place values
  let decExpanded = decPart
    ? decPart
        .split('')
        .map((d, i) => (d !== '0' ? `${d}/${Math.pow(10, i + 1)}` : ''))
        .filter(Boolean)
    : [];

  // Join the parts with " + " and return
  return [...intExpanded, ...decExpanded].join(' + ');
}

// Test cases
console.log(expandedForm(807.304)); // "800 + 7 + 3/10 + 4/1000"
console.log(expandedForm(1.24)); // "1 + 2/10 + 4/100"
console.log(expandedForm(7.304)); // "7 + 3/10 + 4/1000"
console.log(expandedForm(0.04)); // "4/100"

/*
### Explanation:
1. **Convert the number to a string** and split it into integer and decimal parts.
2. **Process the integer part**:
   - Iterate over the digits and multiply them by their place value.
   - Ignore zeros and filter out empty values.
3. **Process the decimal part**:
   - Convert each digit into a fraction with the denominator as a power of 10.
   - Ignore zeros and filter out empty values.
4. **Merge both parts** into a single string separated by `" + "`.
*/
