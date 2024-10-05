function accum(s) {
  return [...s]
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
// Explanation:
// [...s]: Converts the string into an array of characters.

// .map((c, i) => ...): Iterates over each character (c) and its index (i):

// c.toUpperCase(): Makes the first letter uppercase.

// c.toLowerCase().repeat(i): Repeats the lowercase version of the character i times (based on its index).

// .join('-'): Joins the resulting array of strings with a hyphen (-), creating the desired format.

// Example:
// For accum("abcd"):
// The mapped result will be: ["A", "Bb", "Ccc", "Dddd"]
// Then joined as: "A-Bb-Ccc-Dddd"
