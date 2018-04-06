var greet = function(name) {
  var firstLetter = name.slice(0,1).toUpperCase();
  var otherLetters = name.slice(1).toLowerCase();
  return "Hello " + firstLetter+ otherLetters + "!"
};
