function censorWord(word) {
    return word.replace(/./g, "*");
}

function censorThis(text, forbiddenWords) {
  var newText = [];
  var words = text.split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if(forbiddenWords.indexOf(word.toLowerCase()) === -1) {
      newText.push(word);
    } else {
      newText.push(censorWord(word));
    }
  }

  return newText.join(" ");
}
