function squareDigits(num){
  var result = [];
  var stringDigits = num.toString();
  for (var i = 0; i < stringDigits.length; i++) {
    var number = stringDigits[i];
    result.push(Math.pow(number, 2));

  }
  return parseInt(result.join(""));
}
