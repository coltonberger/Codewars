function comp(array1, array2){
  if (array1 === null || array2 === null) {
  return false;
  }

  let squared = [];

  for (let i = 0; i < array1.length; i++) {
    squared.push((array1[i] * array1[i]));
  }

  let a1 = squared.sort();
  let a2 = array2.sort();
  return JSON.stringify(a1) === JSON.stringify(a2);
}
