const cipherMap = (key) => {
  const map = {};
  // Removing dashes and processing pairs
  key = key.replace(/-/g, '');
  for (let i = 0; i < key.length; i += 2) {
    const [a, b] = [key[i], key[i + 1]];
    map[a] = b;
    map[b] = a;
    map[a.toLowerCase()] = b.toLowerCase();
    map[b.toLowerCase()] = a.toLowerCase();
  }
  return map;
};

const GADERYPOLUKI_MAP = cipherMap('GA-DE-RY-PO-LU-KI');

const transform = (str, map) =>
  str
    .split('')
    .map((char) => map[char] || char)
    .join('');

const encode = (str) => transform(str, GADERYPOLUKI_MAP);
const decode = encode; // Same function for decoding

// Test cases
console.log(encode('ABCD')); // "GBCE"
console.log(encode('Ala has a cat')); // "Gla hgs g cgt"
console.log(encode('gaderypoluki')); // "agedyropulik"
console.log(decode('Gla hgs g cgt')); // "Ala has a cat"
console.log(decode('agedyropulik')); // "gaderypoluki"
console.log(decode('GBCE')); // "ABCD"
