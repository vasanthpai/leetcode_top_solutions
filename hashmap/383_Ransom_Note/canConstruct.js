const canConstruct = (ransomNote, magazine) => {
  let count = {};

  for (let ch of magazine) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let ch of ransomNote) {
    if (!count[ch]) {
      return false;
    }
    count[ch] -= 1;
  }

  return true;
};

console.log(canConstruct("aa", "aab")); //true
console.log(canConstruct("aa", "ab")); //false