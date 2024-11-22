function numberToString(num) {
  return String(num);
}
// The String constructor String() is a clean and efficient way to convert any value (including numbers) into a string.
// It ensures type conversion is handled consistently and works for all valid number inputs.

/* 
Other Methods but slightly less preferable

toString Method:
function numberToString(num) {
  return num.toString();
}
This calls the toString method on the number. It's slightly longer to type and can cause errors if num is null or undefined.

Template Literals:
function numberToString(num) {
  return `${num}`;
}
Converts the number to a string using template literals. It is concise but may be less clear to readers.

String Concatenation:
function numberToString(num) {
  return num + '';
}
Concatenates the number with an empty string to produce a string. It's concise but can be less readable and less semantic.
*/
