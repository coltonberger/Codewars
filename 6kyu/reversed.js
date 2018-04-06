function reverse(word) {
  return word.split("").reverse().join("");
}

function reverseWords(str) {
  var newSent = [];
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    newSent.push(reverse(word));
  }

  return newSent.join(" ");
}
