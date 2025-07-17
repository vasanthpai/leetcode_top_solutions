const summaryRanges = (nums)=>{
    let results=[]
    let start=0

    for(i=0;i<nums.length;i++){
        if(i===nums.length-1 || nums[i]+1 !== nums[i+1]){
            if(i===start){
                results.push(`${nums[i]}`)
            }else{
                results.push(`${nums[start]}->${nums[i]}`)
            }
            start=i+1
        }
    }
    return results
}

console.log(summaryRanges([0,1,2,5,7,8,10]))