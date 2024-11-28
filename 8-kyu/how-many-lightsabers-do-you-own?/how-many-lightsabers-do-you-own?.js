const howManyLightsabersDoYouOwn = (name = '') => (name === 'Zach' ? 18 : 0);

// Explanation:
// 1. The function takes one parameter `name` with a default value of an empty string.
// 2. A concise ternary operator checks if the `name` is "Zach":
//    - If true, return 18 (the number of lightsabers owned by Zach).
//    - Otherwise, return 0 (default for everyone else).
