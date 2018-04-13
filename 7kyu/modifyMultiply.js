function modifyMultiply(str, loc, num) {
  let repeatedWord = "-";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
      if (i === loc) {
        repeatedWord += word;
    }

  }


  let anwser = repeatedWord.repeat(num);

  return anwser.slice(1);
}
