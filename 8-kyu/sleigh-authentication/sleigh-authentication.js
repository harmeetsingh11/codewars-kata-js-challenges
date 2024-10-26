function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  // Check if name is "Santa Claus" and password is "Ho Ho Ho!"
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};
