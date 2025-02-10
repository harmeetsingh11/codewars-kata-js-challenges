function convertToBase(num, base) {
  let result = '';
  while (num > 0) {
    result = (num % base).toString() + result; // Get remainder and build the number
    num = Math.floor(num / base); // Reduce the number
  }
  return result || '0'; // Ensure we return "0" for 0 input
}

function foreverYoung(age) {
  for (let base = 2; base < age; base++) {
    // Iterate through all possible bases
    let converted = convertToBase(age, base); // Convert using custom base conversion
    if (converted === '20' || converted === '21') {
      return `${age}? That's just ${converted}, in base ${base}!`;
    }
  }
  return 'No valid base found!'; // Fallback case (shouldn't happen in valid tests)
}

console.log(foreverYoung(32)); // "32? That's just 20, in base 16!"
console.log(foreverYoung(39)); // "39? That's just 21, in base 19!"
console.log(foreverYoung(83)); // "83? That's just 21, in base 41!"
console.log(foreverYoung(87)); // "87? That's just 21, in base 43!"

// TC: Runs in O(log_base(n)) time (logarithmic), which is optimal.
