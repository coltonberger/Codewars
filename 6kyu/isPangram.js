function isPangram(string){
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var combineStr = string.split(" ").join("").toLowerCase();

  for (var i = 0; i < alphabet.length; i++) {
    var letter = alphabet[i];
    if (combineStr.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
}
