const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let map = new Map();
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    if (map.has(ch) && map.get(ch) >= left) {
      left = map.get(ch) + 1;
    }
    map.set(ch, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcdabc"));