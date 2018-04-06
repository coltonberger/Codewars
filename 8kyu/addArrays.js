function arrayPlusArray(arr1, arr2) {
  var newArray = arr1.concat(arr2);
  var sum = 0;

  for (var i = 0; i < newArray.length; i++) {
    var num = newArray[i];
    sum += num;
  }

  return sum;
}
