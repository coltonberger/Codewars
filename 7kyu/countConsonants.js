function countObj(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}

function countConsonants(str) {
  let vowels = "aeiou";
  let count = 0;
  let object = countObj(str);

  for (var key in object) {
    if (vowels.indexOf(key) === -1 && key !== "!" && key !== " " && key !== "0" && key !== "1" && key !== "2" && key !== "3" && key !== "4" && key !== "5" && key !== "6" && key !== "7" && key !== "8" && key !== "9") {
      count++;
    }
  }


  return count;
}
