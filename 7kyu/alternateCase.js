function evenLetters(s){
  var newArray = [];

  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
    newArray.push(s[i].toUpperCase())
    } else {
    newArray.push(s[i].toLowerCase())
  }
 }
  return newArray.join("");
}

function oddLetters(s){
  var newArray = [];

  for (var i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
    newArray.push(s[i].toUpperCase())
    } else {
    newArray.push(s[i].toLowerCase())
  }
 }
  return newArray.join("");
}


function capitalize(s) {
  var finalArray = [];

  finalArray.push(evenLetters(s));
  finalArray.push(oddLetters(s));

  return finalArray;
}
