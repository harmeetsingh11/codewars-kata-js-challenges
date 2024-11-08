function cookie(input) {
  // Determine who ate the cookie based on input type
  let name =
    typeof input === 'string'
      ? 'Zach'
      : typeof input === 'number'
      ? 'Monica'
      : 'the dog';

  // Return the formatted message
  return `Who ate the last cookie? It was ${name}!`;
}

/* 
Explanation:

Determine Who Ate the Cookie:
We use a typeof check to determine the type of input:
If input is a string, we set name to "Zach".
If input is a number (which covers both integers and floats), we set name to "Monica".
For any other type, we set name to "the dog".

Return Formatted Message:
We use template literals to format and return the message: "Who ate the last cookie? It was ${name}!".
*/
