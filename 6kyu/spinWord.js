function reverseWord(word){
  var newWord = "";
  for (var i = word.length -1; i >= 0; i--) {
    var letter = word[i];
    newWord += letter;
  }
  return newWord;
}


function spinWords(str){
  var wordSpin = [];
  var words = str.split(" ")
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length < 5) {
      wordSpin.push(word);
    } else {
      wordSpin.push(reverseWord(word));
    }
  }

  return wordSpin.join(" ");
}
