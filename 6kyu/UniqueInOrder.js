var uniqueInOrder=function(iterable){
  var newArray = [];

  for (var i = 0; i < iterable.length; i++) {
    var char = iterable[i];
    var nextChar = iterable[i+1];

    if (char !== nextChar) {
      newArray.push(char);
    }
  }

  return newArray;
}
