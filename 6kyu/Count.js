function count (string) {
  var count = {};

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  return count;
}
