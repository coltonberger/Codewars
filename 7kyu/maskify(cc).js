// return masked string
function maskify(cc) {
  if (cc.length <= 4) {
  return cc;
  }
  let cutAllButLast = cc.slice(0,cc.length-4);
  let lastFour = cc.slice(-4)
  let masked = '';

  for (let i = 0; i < cutAllButLast.length; i++) {
    let num = cutAllButLast[i];
    masked += "#";
  }

  return masked + lastFour;
}
