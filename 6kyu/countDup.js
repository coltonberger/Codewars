function obj(str) {
  var countObj = {};

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();
    if (countObj[letter] === undefined) {
      countObj[letter] = 1;
    } else {
      countObj[letter]++;
    }
  }

  return countObj;
}

function duplicateCount(text){
  var dups = 0;
  var count = obj(text);
  for (var key in count) {
    if (count[key] > 1) {
      dups++;
    }
  }

  return dups;
}
