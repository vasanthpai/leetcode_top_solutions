const twoSum = (nums,target)=>{
    let left=0
    let right=nums.length-1
    while(left<right){
        const sum=nums[left]+nums[right]
        if(target===sum){
            return [left+1,right+1]
        }
        else if(target>sum){
            left++
        }
        else{
            right--
        }
    }
    return [-1,-1]
}

console.log(twoSum([2,7,11,15],9))