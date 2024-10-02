let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  // For equal1, we want the sum of two variables to be 100
  // v1 is 50, so 50 + 50 = 100
  let a = v1,
    b = v1;
  return a + b; // returns 100
}

function equal2() {
  // For equal2, we want the result of subtraction to be 100
  // v4 (200) - v2 (100) = 100
  let a = v4,
    b = v2;
  return a - b; // returns 100
}

function equal3() {
  // For equal3, we want the result of multiplication to be 100
  // v1 (50) * v5 (2) = 100
  let a = v1,
    b = v5;
  return a * b; // returns 100
}

function equal4() {
  // For equal4, we want the result of division to be 100
  // v4 (200) / v5 (2) = 100
  let a = v4,
    b = v5;
  return a / b; // returns 100
}

function equal5() {
  // For equal5, we want the remainder (modulus) to be 100
  // v6 (250) % v3 (150) gives a remainder of 100
  let a = v6,
    b = v3;
  return a % b; // returns 100
}
