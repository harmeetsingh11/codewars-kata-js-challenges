const regex = /^([0-1]?\d|2[0-3]):[0-5]\d$/;

// Test cases
console.log(regex.test('01:00')); // true (valid)
console.log(regex.test('1:00')); // true (valid)
console.log(regex.test('24:00')); // false (invalid, hour can't be 24)
console.log(regex.test('23:59')); // true (valid)
console.log(regex.test('10:30')); // true (valid)
console.log(regex.test(' 1:00')); // false (leading space)

/*
### Explanation of the regex:
- **`^`**: This marks the start of the string. The time string should start from the first character.

- **`([0-1]?\d|2[0-3])`**: This is the part that matches the hour (before the colon `:`):
  - **`[0-1]?\d`**:
    - **`[0-1]`**: This matches the first digit of the hour, either `0` or `1`.
    - **`?`**: This means the preceding character, `[0-1]`, is optional. So, it will match either a single-digit hour (like `0` or `1`) or two-digit hours (like `10`, `11`, etc.).
    - **`\d`**: This matches any digit from `0` to `9`, making it so that valid hours like `00`, `01`, `02`, ..., `09`, `10`, ..., `19` are accepted.
  - **`|`**: The pipe symbol means **"or"**, so we are specifying two different patterns for valid hours.
  - **`2[0-3]`**: This matches the hours `20`, `21`, `22`, or `23`:
    - **`2`**: Matches the digit `2`.
    - **`[0-3]`**: Matches one of the digits `0`, `1`, `2`, or `3`, so it can match hours like `20`, `21`, `22`, or `23`.

- **`:`**: This matches the colon (`:`) separator between the hour and minute part of the time. It's mandatory for valid time formats.

- **`[0-5]\d`**: This part matches the minute (after the colon `:`):
  - **`[0-5]`**: This matches the first digit of the minute, which must be in the range `0-5`, ensuring valid minute values like `00`, `01`, ..., `59`.
  - **`\d`**: This matches any digit (from `0` to `9`) for the second digit of the minute, making it valid for any minute value from `00` to `59`.

- **`$`**: This marks the end of the string, ensuring the string finishes after the minute value (i.e., no extra characters after the minute).

### Final regex in detail:
- **`^([0-1]?\d|2[0-3]):[0-5]\d$`** ensures the following:
  1. The hour part (`[0-1]?\d|2[0-3]`) matches a number from `00` to `23` (valid 24-hour format hours).
  2. The `:` is present as a separator.
  3. The minute part (`[0-5]\d`) matches a number from `00` to `59` (valid minute values).
  4. The regex starts and ends with `^` and `$`, so there can't be extra characters, spaces, or anything else in the string.

### Examples:
- `"01:00"` matches: the hour is `01` (valid), the minute is `00` (valid).
- `"1:00"` matches: the hour is `1` (valid, it's the same as `01`), the minute is `00` (valid).
- `"24:00"` does **not** match: `24` is **not valid** for the hour (hours should be from `00` to `23`).
- `"23:59"` matches: the hour is `23` (valid), the minute is `59` (valid).
- `"10:30"` matches: the hour is `10` (valid), the minute is `30` (valid).
- `" 1:00"` does **not** match: there is a space at the beginning of the string, which the regex doesn't allow.

*/
