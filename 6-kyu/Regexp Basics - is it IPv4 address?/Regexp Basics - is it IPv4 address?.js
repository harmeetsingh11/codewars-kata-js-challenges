String.prototype.ipv4_address = function () {
  // Regular expression to match a valid IPv4 address
  return /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/.test(
    this
  );
};

console.log('192.168.1.1'.ipv4_address()); // true
console.log('255.255.255.255'.ipv4_address()); // true
console.log('192.168.01.1'.ipv4_address()); // false (leading zero)
console.log('256.100.100.100'.ipv4_address()); // false (256 is out of range)
console.log('192.168.1'.ipv4_address()); // false (not four octets)

// Explanation:
// - The regex ensures the string consists of exactly four octets (numbers between 0-255), separated by dots.
// - `25[0-5]` matches numbers 250-255.
// - `2[0-4]\d` matches numbers 200-249.
// - `1\d{2}` matches numbers 100-199.
// - `[1-9]?\d` matches numbers 0-99 but prevents leading zeros (e.g., '01' is invalid).
// - `^...$` ensures the entire string matches the pattern, preventing extra characters.
