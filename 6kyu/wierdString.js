function oppositeCase(word){
  var newArray = [];
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (i % 2 === 0) {
      newArray.push(letter.toUpperCase());
    } else {
      newArray.push(letter.toLowerCase());
    }
  }

  return newArray.join("");
}

function toWeirdCase(sentence) {
  var words = sentence.split(" ");
  var newArray = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    newArray.push(oppositeCase(word));
  }

  return newArray.join(" ");
}
