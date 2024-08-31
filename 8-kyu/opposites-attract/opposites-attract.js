// Refactored code: more efficient and concise
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// verbose code
function lovefunc(flower1, flower2) {
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
  );
}
