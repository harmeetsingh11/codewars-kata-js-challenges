function dropCaps(str) {
  return str.replace(/\S+/g, (word) =>
    word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word
  );
}

// Test cases
console.log(dropCaps('apple')); // "Apple"
console.log(dropCaps('apple of banana')); // "Apple of Banana"
console.log(dropCaps('one   space')); // "One   Space"
console.log(dropCaps('   space WALK   ')); // "   Space Walk   "

// Explanation:
// - `\S+` matches any sequence of non-space characters (words).
// - `replace` iterates over each matched word.
// - If the word length is greater than 2, capitalize the first letter and make the rest lowercase.
// - Otherwise, keep the word unchanged.
