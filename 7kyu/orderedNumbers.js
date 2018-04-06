function inAscOrder(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num1 = arr[i];
    var num2 = arr[i+1];
    if (num1 > num2) {
      return false
    }
  }
  return true;
}
