function processPacket(packet) {
  // Extract each section from the packet
  const header = packet.slice(0, 4);
  const instruction = packet.slice(4, 8);
  const data1 = parseInt(packet.slice(8, 12), 10);
  const data2 = parseInt(packet.slice(12, 16), 10);
  const footer = packet.slice(16);

  let result;

  // Determine the result based on the instruction code
  switch (instruction) {
    case '0F12': // Addition
      result = data1 + data2;
      break;
    case 'B7A2': // Subtraction
      result = data1 - data2;
      break;
    case 'C3D9': // Multiplication
      result = data1 * data2;
      break;
    default:
      result = 0;
  }

  // Clamp result within the allowed range: 0000 to 9999
  if (result < 0) result = 0;
  if (result > 9999) result = 9999;

  // Format result as 4-digit string
  const resultStr = String(result).padStart(4, '0');

  // Construct the response packet
  return `${header}FFFF${resultStr}0000${footer}`;
}

console.log(processPacket('H1H10F1200120008F4F4')); // Output: H1H1FFFF00200000F4F4

/*
### Explanation:

* Each part of the packet is exactly 4 characters long.
* We extract the header, instruction, data1, data2, and footer using `.slice()`.
* Based on the instruction, we perform the required arithmetic operation.
* We ensure the result is within the range `[0, 9999]`, and pad it to 4 digits.
* The response packet follows the format: `Header + 'FFFF' + Result + '0000' + Footer`.
*/
