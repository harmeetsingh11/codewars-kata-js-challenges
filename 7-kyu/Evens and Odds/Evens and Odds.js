const convertNumber = (n) => (n % 2 === 0 ? n.toString(2) : n.toString(16));

console.log(convertNumber(10)); // "1010"  (binary)
console.log(convertNumber(15)); // "f"     (hex)

// Explanation:
// - Use the modulo operator (%) to check if the number is even or odd.
// - If `n` is even (n % 2 === 0), convert it to a binary string using `toString(2)`.
// - If `n` is odd, convert it to a hexadecimal string using `toString(16)`.
// - `.toString(16)` returns a lowercase hexadecimal string by default.
