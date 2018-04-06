function countNums(array) {
  var count = {};

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }

  return count;
}


function findOdd(A) {
  var count = countNums(A);

  for (var key in count) {

    if (count[key] % 2 !== 0) {
      return parseInt(key)
    }
  }
}
