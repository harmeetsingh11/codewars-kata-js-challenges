function highlight(code) {
  // Use a regular expression to match sequences of characters with the same color
  return code.replace(/(F+|L+|R+|\d+)/g, (match) => {
    // Determine the color based on the character type
    const color =
      match[0] === 'F'
        ? 'pink'
        : match[0] === 'L'
        ? 'red'
        : match[0] === 'R'
        ? 'green'
        : 'orange';

    // Wrap the matched sequence in a span tag with the appropriate color
    return `<span style="color: ${color}">${match}</span>`;
  });
}

console.log(highlight('F3RF5LF7'));
// Output:
// "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

console.log(highlight('FFFR345F2LL'));
// Output:
// "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span s

/* 
Explanation:

Regular Expression:
The regex (F+|L+|R+|\d+) matches groups of:
F+: One or more consecutive F characters.
L+: One or more consecutive L characters.
R+: One or more consecutive R characters.
\d+: One or more consecutive digits (0-9).

replace Method:
The replace function iterates over the matches from the regular expression.
For each match, it determines the appropriate color based on the first character of the match (F, L, R, or a digit).

Color Assignment:
F maps to pink.
L maps to red.
R maps to green.
Digits map to orange.

Wrapping in a <span>:
The matched sequence is wrapped in a <span> tag with the appropriate style="color: ...".

Final Output:
The modified string, with syntax highlighting applied, is returned.
*/
