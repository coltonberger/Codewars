function arrayPlusArray(arr1, arr2) {
  var newArray = arr1.concat(arr2);
  var sum = 0;
  debugger;
  for (var i = 0; i < newArray.length; i++) {
    var num = newArray[i];
    debugger;
    sum += num;
  }

  return sum;
}
