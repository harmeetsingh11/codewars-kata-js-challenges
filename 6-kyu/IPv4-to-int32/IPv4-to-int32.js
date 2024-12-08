function ipToInt32(ip) {
  // Split the IP address into octets, convert to integers, and combine using bit shifts
  return (
    ip
      .split('.')
      .map(Number) // Convert each octet to a number
      .reduce((acc, octet) => (acc << 8) + octet, 0) >>> 0
  ); // Ensure unsigned result
}

/* 
Explanation

1. Input
The input is an IPv4 address in the form of a string, e.g., "128.32.10.1".

2. Splitting the IP Address
ip.split('.')
The .split('.') method splits the string into an array of 4 octets by using the . as a delimiter.
For "128.32.10.1", this results in:
["128", "32", "10", "1"].

3. Converting Octets to Numbers
.map(Number)
The .map(Number) method converts each octet string into a numeric value.
After conversion:
[128, 32, 10, 1].

4. Reducing to a 32-bit Integer

.reduce((acc, octet) => (acc << 8) + octet, 0)

The .reduce() method iteratively combines the octets into a single 32-bit integer:

Initialization: Starts with 0 as the accumulator (acc).
Step-by-Step Bit Shifting:
The acc << 8 shifts the accumulated value acc left by 8 bits (equivalent to multiplying by 2^8
 ), creating space for the next octet.
The + octet adds the current octet into the lowest 8 bits.

Example for "128.32.10.1":
Start with acc = 0.
(0 << 8) + 128 = 128 → First octet added.
(128 << 8) + 32 = 32800 → Second octet added.
(32800 << 8) + 10 = 8405026 → Third octet added.
(8405026 << 8) + 1 = 2149583361 → Fourth octet added.

5. Ensuring Unsigned Result
>>> 0
The >>> 0 operator ensures the final result is treated as an unsigned 32-bit integer.
In JavaScript, bitwise operations treat numbers as signed 32-bit integers. Values greater than 
2^31 −1 (2147483647) are interpreted as negative.
The >>> 0 converts the number into an unsigned 32-bit integer by zero-filling the most significant bits.

6. Output
The final result is a 32-bit unsigned integer representation of the IP address.

Example Walkthrough
For "128.32.10.1":

Split:
["128", "32", "10", "1"]
Convert to Numbers:
[128, 32, 10, 1]

Reduce:
Step 1: (0 << 8) + 128 = 128
Step 2: (128 << 8) + 32 = 32800
Step 3: (32800 << 8) + 10 = 8405026
Step 4: (8405026 << 8) + 1 = 2149583361

Ensure Unsigned:
2149583361 >>> 0 = 2149583361 (no change since it’s already positive).

Final output: 2149583361
*/
