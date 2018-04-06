function fizzbuzz(n){
  var newArray = [];

  for (var i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      newArray.push("FizzBuzz")
    }
    else if (i % 5 === 0) {
      newArray.push("Buzz")
    }
    else if(i % 3 === 0) {
      newArray.push("Fizz")
    }
    else (newArray.push(i));
  }

  return newArray;
}
