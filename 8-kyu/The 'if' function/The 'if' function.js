function _if(bool, func1, func2) {
  // The ternary operator checks the value of 'bool':
  // - If 'bool' is truthy, it calls func1()
  // - If 'bool' is falsy, it calls func2()
  bool ? func1() : func2();
}

// example
_if(
  true,
  () => console.log('True'),
  () => console.log('False')
); // Logs: True
_if(
  false,
  () => console.log('True'),
  () => console.log('False')
); // Logs: False
