const isValid = (s) => {
  let stack = [];
  let pairs = { ")": "(", "]": "[", "}": "{" };
  for (let char of s) {
    if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false