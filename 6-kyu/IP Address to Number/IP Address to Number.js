// Convert an IPv4 address to a number
function ipToNum(ip) {
  // Split the IP into its four octets, convert each to a number and combine them using bitwise shifts
  return ip.split('.').reduce((acc, octet) => (acc << 8) + +octet, 0) >>> 0;
}

// Convert a number to an IPv4 address
function numToIp(num) {
  // Extract each octet by shifting the number to the right and masking the lower 8 bits
  return (
    (num >>> 24) +
    '.' +
    ((num >> 16) & 255) +
    '.' +
    ((num >> 8) & 255) +
    '.' +
    (num & 255)
  );
}

console.log(ipToNum('192.168.1.1')); // 3232235777
console.log(numToIp(3232235777)); // '192.168.1.1'
console.log(ipToNum('209.70.224.244')); // 3511083252
console.log(numToIp(3511083252)); // '209.70.224.244'

/*
### Explanation:
1. **`ipToNum`**: The shift operations are now followed by `>>> 0`, which ensures the final result is a positive 32-bit unsigned integer.
2. **`numToIp`**: The bitwise operations are unaffected by this change since we are only extracting each octet and combining them into a string representation.
*/

/* 
### Approach/Intuition:

The problem asks us to convert an IPv4 address (in dotted-decimal notation) into a 32-bit integer, and vice versa. Let's break down the process for both conversions and understand the intuition behind the solution.

### 1. **IPv4 Address to Number (`ipToNum`)**:

An IPv4 address is made up of four octets (8-bit numbers), each separated by a dot (`.`). For example, the IP address `192.168.1.1` consists of four octets:
- `192`
- `168`
- `1`
- `1`

Each octet represents a byte, or 8 bits, in the 32-bit number. When combined, the four octets form a single 32-bit integer.

#### Conversion Steps:
1. **Break down the IP**: Split the IP address string into its four octets. For example, `192.168.1.1` becomes `['192', '168', '1', '1']`.
2. **Convert each octet**: Convert each octet to a number and use bitwise operations to combine them.
    - The leftmost octet (e.g., `192`) contributes to the highest 8 bits.
    - The second octet (e.g., `168`) contributes to the next 8 bits.
    - The third octet (e.g., `1`) contributes to the next 8 bits.
    - The rightmost octet (e.g., `1`) contributes to the lowest 8 bits.
3. **Combine the octets**: Using the bitwise shift operator (`<<`), shift each octet into its appropriate position:
   - First octet is shifted 24 bits to the left: `192 << 24`.
   - Second octet is shifted 16 bits to the left: `168 << 16`.
   - Third octet is shifted 8 bits to the left: `1 << 8`.
   - The fourth octet remains in its place.
4. **Add them together**: Finally, sum these shifted values to get the 32-bit integer. 

#### Example (for `192.168.1.1`):
```
ipToNum('192.168.1.1')
- First, split the IP into octets: ['192', '168', '1', '1']
- Convert each octet to a number:
  192 -> 11000000 (binary)
  168 -> 10101000 (binary)
  1   -> 00000001 (binary)
  1   -> 00000001 (binary)
- Combine them by shifting:
  192 << 24 -> 11000000 00000000 00000000 00000000
  168 << 16 -> 00000000 10101000 00000000 00000000
  1   << 8  -> 00000000 00000001 00000000 00000000
  1         -> 00000000 00000000 00000001 00000001
- Add them together:
  3232235777 (final result)
```

#### Why use bitwise shift operations?
- **Shifting** is a highly efficient operation that directly moves bits to the correct position in the 32-bit integer.
- **Bitwise OR (`|`)** could also be used to combine the values, but in our case, addition (`+`) works fine because the numbers are non-overlapping.

#### Why `>>> 0`?
- **JavaScript's bitwise operations** work on **signed 32-bit integers**. When the value exceeds `2^31 - 1` (the max signed 32-bit integer), it may cause the result to be negative.
- To prevent negative results and ensure the number is treated as an **unsigned 32-bit integer**, we use the **unsigned right shift operator (`>>> 0`)**, which forces the result to be interpreted as a positive 32-bit number.

### 2. **Number to IPv4 Address (`numToIp`)**:

Now, let's reverse the process: convert a 32-bit integer back into an IPv4 address.

#### Conversion Steps:
1. **Extract each octet**: For a given 32-bit number, we want to extract each of the 8-bit chunks that represent each octet.
   - Use the **unsigned right shift operator (`>>>`)** to shift the number and extract the octets.
   - For example, the first octet is extracted by shifting the number 24 bits to the right, the second octet by shifting 16 bits, and so on.
2. **Convert each chunk**: After extracting each 8-bit chunk, mask it with `255` (`& 255`) to retain the lower 8 bits and discard anything else.
3. **Combine the octets**: Convert the resulting octets to a string and join them with dots (`.`).

#### Example (for `3232235777`):
```
numToIp(3232235777)
- First, extract each octet:
  (3232235777 >>> 24) & 255 -> 192
  (3232235777 >>> 16) & 255 -> 168
  (3232235777 >>> 8)  & 255 -> 1
  (3232235777 >>> 0)  & 255 -> 1
- Combine them to form the IP address: '192.168.1.1'
```

### Why use bitwise operations here?
- **Shifting** is used to move the bits to the correct position, so we can easily extract each octet.
- **Masking with 255** (`& 255`) ensures we only get the lower 8 bits, which correspond to one octet of the IP address.

### Summary of the Approach:

- **`ipToNum`**: Split the IP address into its octets, shift each octet into its correct position in a 32-bit number, and combine them.
- **`numToIp`**: Extract each octet from the 32-bit number by shifting and masking, then combine them into the IP address string.
- **Bitwise operations** ensure that the conversion is efficient and avoids pitfalls with signed integers in JavaScript.
*/
