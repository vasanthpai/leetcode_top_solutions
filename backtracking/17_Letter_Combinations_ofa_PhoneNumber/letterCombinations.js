var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const path = [];
  const results = [];

  function backtrack(index) {
    if (index === digits.length) {
      results.push(path.join(""));
      return;
    }

    const letters = digitToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);
      backtrack(index + 1);
      path.pop();
    }
  }

  backtrack(0);
  return results;
};

console.log(letterCombinations("23"));
