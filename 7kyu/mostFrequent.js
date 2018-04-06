function countObj(array) {
  var count = {};

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++
    }
  }

  return count;
}


function mostFrequentItemCount(collection) {
  var obj = countObj(collection);
  var max = 0;

  for (var key in obj) {
    var num = obj[key];

    if (max === null || num > max) {
      max = num;
    }
  }

  return max;
}
