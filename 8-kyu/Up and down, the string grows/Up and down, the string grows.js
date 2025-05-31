// **shortest, most efficient** JavaScript solution to fulfill the requirement where:

str.toUpperCase().toLowerCase().length > str.length;

// This happens with special **Unicode characters**, particularly the **German Eszett (ß)**, which transforms into two characters (`SS`) when uppercased.

// STRANGE_STRING should be a string where .toUpperCase().toLowerCase().length > original length

// The German letter 'ß' becomes 'SS' when uppercased, increasing length from 1 → 2
const STRANGE_STRING = 'ß';

// Explanation :

// 'ß'.toUpperCase() === 'SS'       → length becomes 2
// 'SS'.toLowerCase() === 'ss'      → stays at length 2
// 'ß'.length === 1, but final length === 2

// So the condition holds: 'ß'.toUpperCase().toLowerCase().length > 'ß'.length
