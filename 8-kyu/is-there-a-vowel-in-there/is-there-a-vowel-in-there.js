function isVow(arr) {
  // Create a map of vowel character codes to their corresponding vowel characters
  const vowels = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };

  // Use map to iterate over the array, replacing numbers if they match a vowel code
  return arr.map((num) => vowels[num] || num);
}
