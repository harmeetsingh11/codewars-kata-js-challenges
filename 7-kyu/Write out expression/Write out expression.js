function expressionOut(expr) {
  // Dictionary mapping operators to their word equivalents
  const OPERATORS = {
    '+': 'Plus',
    '-': 'Minus',
    '*': 'Times',
    '/': 'Divided By',
    '**': 'To The Power Of',
    '=': 'Equals',
    '!=': 'Does Not Equal',
  };

  // Dictionary mapping numbers to their word equivalents
  const NUM_WORDS = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
  };

  // Split input into [left operand, operator, right operand]
  const [left, operator, right] = expr.split(' ');

  // Check if the operator is valid
  if (!OPERATORS[operator]) return "That's not an operator!";

  // Convert numeric operands to words and construct the output string
  return `${NUM_WORDS[left]} ${OPERATORS[operator]} ${NUM_WORDS[right]}`;
}

console.log(expressionOut('4 ** 9')); // "Four To The Power Of Nine"
console.log(expressionOut('2 x 3')); // "That's not an operator!"

// This solution is efficient (O(1) lookup using dictionaries), readable, and handles invalid operators gracefully.
