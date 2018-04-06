function reverseWord(word) {
  return word.split("").reverse().join("")
}


function shorter_reverse_longer(a,b){
  if (a.length >= b.length) {
    return b + reverseWord(a) + b
  } else {
    return a + reverseWord(b) + a
  }
}
