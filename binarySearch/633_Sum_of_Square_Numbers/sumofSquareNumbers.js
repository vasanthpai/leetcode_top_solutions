var judgeSquareSum = function(c) {
    let left = 0, right = Math.floor(Math.sqrt(c));
    while (left <= right) {  // <= to include when left == right (1^2+1^2)
        let sum = (left * left) + (right * right);
        if (sum === c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};
 
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))