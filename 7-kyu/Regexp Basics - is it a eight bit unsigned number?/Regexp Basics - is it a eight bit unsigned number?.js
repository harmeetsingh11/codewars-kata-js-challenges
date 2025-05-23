// Extend the String prototype with eight_bit_number? method
String.prototype.eight_bit_number = function () {
  // Use a regular expression to match only numbers 0 to 255 with no leading zeroes (unless it's "0")
  return /^(0|[1-9]\d{0,2})$/.test(this) && Number(this) <= 255;
};

'0'.eight_bit_number(); // true
'255'.eight_bit_number(); // true
'256'.eight_bit_number(); // false
'0255'.eight_bit_number(); // false
'+255'.eight_bit_number(); // false
' 255'.eight_bit_number(); // false
''.eight_bit_number(); // false
'1000'.eight_bit_number(); // false
'42'.eight_bit_number(); // true

/*
### Explanation:

* `String.prototype.eight_bit_number`: Adds the method to all string instances.
* `^(0|[1-9]\d{0,2})$`:

  * `0`: Matches string `"0"`.
  * `[1-9]\d{0,2}`: Matches numbers from 1 to 999, but we check the upper bound separately.
  * This regex ensures:

    * No leading zeroes like `"001"`.
    * No `+` signs or spaces.
* `Number(this) <= 255`: Ensures the number is within the 8-bit unsigned integer range (0–255).
*/
