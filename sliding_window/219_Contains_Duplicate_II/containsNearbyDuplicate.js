const containsNearbyDuplicate = (nums,k)=>{
    const set = new Set()

    for(let right=0;right<nums.length;right++){
        if(set.has(nums[right])){
            return true
        }

        set.add(nums[right])

        if(set.size>k){
            set.delete(nums[right-k])
        }
    }

    return false
}

console.log(containsNearbyDuplicate([1,2,3,1],3))