const totalFruit = (fruits)=>{
    let left=0
    let maxLen=0
    let basket=new Map()
    for(let right=0;right<fruits.length;right++){
        let fruit=fruits[right]
        basket.set(fruit, (basket.get(fruit) || 0 ) + 1 )

        while(basket.size>2){
            let leftFruit = fruits[left]
            basket.set(leftFruit, basket.get(leftFruit)-1)
            if(basket.get(leftFruit)===0){
                basket.delete(leftFruit)
            }
            left++
        }
        maxLen = Math.max(maxLen,right-left+1)
    }
    return maxLen
}

console.log(totalFruit([1,2,1]));         // Output: 3
console.log(totalFruit([0,1,2,2]));       // Output: 3
console.log(totalFruit([1,2,3,2,2]));     // Output: 4
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])); // Output: 5