function divisors(integer) {
  var nums = [];

  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
        nums.push(i);
    }
  }

  if (nums.length === 0) {
   return i + " is prime"
  } else {
    return nums
  }
}
