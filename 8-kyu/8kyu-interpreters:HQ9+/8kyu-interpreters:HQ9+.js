function hq9Plus(input) {
  // Handle 'H': Return "Hello World!"
  if (input === 'H') return 'Hello World!';

  // Handle 'Q': Return the input itself
  if (input === 'Q') return input;

  // Handle '9': Return the full lyrics of "99 Bottles of Beer"
  if (input === '9') {
    let lyrics = '';
    for (let i = 99; i > 0; i--) {
      const next = i - 1;
      lyrics += `${i} bottle${
        i > 1 ? 's' : ''
      } of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.\n`;
      lyrics += `Take one down and pass it around, ${
        next > 0 ? next : 'no more'
      } bottle${next === 1 ? '' : 's'} of beer on the wall.\n`;
    }
    lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return lyrics;
  }
  // Everything else: Do not return anything (implicitly returns undefined)
}

/* 
Explanation:

Input Check for 'H':
If the input is 'H', return the string 'Hello World!'.

Input Check for 'Q':
If the input is 'Q', return the input itself.

Input Check for '9':
Generate the "99 Bottles of Beer" lyrics using a loop:
Loop from 99 down to 1.
For each iteration, add two lines to the lyrics:
First line specifies the current number of bottles.
Second line updates the count or mentions "no more bottles".
After the loop, add the final verse about going to the store.

Default Case:
If the input does not match 'H', 'Q', or '9', return null.
*/
