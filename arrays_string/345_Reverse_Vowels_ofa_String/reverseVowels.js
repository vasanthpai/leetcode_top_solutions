const reverseVowels = (s) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const ch = s.split("");
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    while (i < j && !vowels.has(ch[i])) {
      i++;
    }

    while (i < j && !vowels.has(ch[j])) {
      j--;
    }

    [ch[i], ch[j]] = [ch[j], ch[i]];
    i++;
    j--;
  }
  return ch.join("");
};

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
console.log(reverseVowels("aA")); // "Aa"