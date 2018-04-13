function sum(str) {
  var longString = str.split(" ").join("")
  var letters = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7,
    h : 8,
    i : 9,
    j : 10,
    k : 11,
    l : 12,
    m : 13,
    n : 14,
    o : 15,
    p : 16,
    q : 17,
    r : 18,
    s : 19,
    t : 20,
    u : 21,
    v : 22,
    w : 23,
    x : 24,
    y : 25,
    z : 26
  };
  var total = 0;

  for (var i = 0; i < longString.length; i++) {
    total += letters[longString[i]];
  }

  return total;
}

function wordValue(array) {
  var finalArray = [];

  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    finalArray.push(sum(word) * (i+1));
  }

  return finalArray;
}
