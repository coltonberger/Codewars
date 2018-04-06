function positiveSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num >= 0) {
     sum += num;
    }
  }

  return sum;
}
