const vowels = ["a", "e", "i", "o", "u"];

var removeVowels = function (s) {
  const sArr = s.split("");
  const newS = [];

  for (let i = 0; i < sArr.length; i++) {
    if (!vowels.includes(sArr[i])) {
      newS.push(sArr[i]);
    }
  }
  return newS.join("");
};
