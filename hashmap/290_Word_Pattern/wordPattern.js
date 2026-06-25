const wordPattern = (pattern, s) => {
  const word = s.split(" ");
  if (pattern.length !== word.length) return false;

  const ChToWord = new Map();
  const WordToCh = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const w = word[i];
    const c = pattern[i];
    if (ChToWord.has(c)) {
      if (ChToWord.get(c) !== w) return false;
    } else {
      ChToWord.set(c, w);
    }

    if (WordToCh.has(w)) {
      if (WordToCh.get(w) !== c) return false;
    } else {
      WordToCh.set(w, c);
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));