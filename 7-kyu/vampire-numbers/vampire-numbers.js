function isVampireNumber(fang1, fang2) {
  // Calculate the product of the two fangs
  const product = fang1 * fang2;

  // Convert the product and fangs to sorted strings of their digits
  const productDigits = String(product).split('').sort().join('');
  const fangsDigits = (String(fang1) + String(fang2)).split('').sort().join('');

  // Check if the sorted digits of the product match the sorted digits of the fangs
  return productDigits === fangsDigits;
}

console.log(isVampireNumber(6, 21)); // true, as 6 * 21 = 126 and digits match
console.log(isVampireNumber(10, 11)); // false, as digits don't match the product
console.log(isVampireNumber(15, 93)); // true, as 15 * 93 = 1395 and digits match

/* 
Explanation:

Calculate the product:
Compute the product of the two fangs.

Convert to strings and sort digits:
Convert the product and the concatenated fangs into strings.
Split the strings into arrays of digits, sort them, and join them back into sorted strings.

Compare sorted strings:
If the sorted string of the product matches the sorted string of the fangs, the fangs form a valid vampire number.
*/
