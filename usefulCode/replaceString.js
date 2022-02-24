/* function replaceString(oldS, newS, fullS) {
  if (!fullS.toLowerCase().includes(oldS.toLowerCase())) {
    return 'the word which you want to replace from the text is not included in it, try onther word please';
  }

  if (newS.toLowerCase().includes(oldS.toLowerCase())) {
    return 'you can not replace old word with new word includs the old word';
  }

  let oldLength = oldS.length;
  for (i = 0; i < fullS.length; i++) {
    if (
      fullS.substring(i, i + oldLength).toLowerCase() === oldS.toLowerCase()
    ) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(oldLength + i);
    }
  }
  return fullS;
}
console.log(replaceString('World', 'otherworld', 'Brave world New World'));
console.log(replaceString('love', 'otherworld', 'Brave world New World'));
console.log(replaceString('World', 'Web', 'Brave world New World')); */

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
// console.log(replaceString('World', 'otherworld', 'Brave world New World'));
// console.log(replaceString('love', 'otherworld', 'Brave world New World'));
console.log(replaceString('World', 'Web', 'Brave world New World'));
