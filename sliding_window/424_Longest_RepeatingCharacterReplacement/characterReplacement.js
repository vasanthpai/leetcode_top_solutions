const characterReplacement = (s, k) => {
  let left = 0;
  let freq = new Map();
  let maxFreq = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    freq.set(ch, (freq.get(ch) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(ch));

    while (right - left + 1 - maxFreq > k) {
      let leftCh = s[left];
      freq.set(leftCh, freq.get(leftCh) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(characterReplacement("AABABBA", 1)); //4
console.log(characterReplacement("ABAB", 2)); //4