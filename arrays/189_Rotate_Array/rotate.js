const rotate = (nums,k)=>{
    const n=k%nums.length

    reverse(nums,0,nums.length-1)
    reverse(nums,0,n-1)
    reverse(nums,n,nums.length-1)

    function reverse(arr,start,end){
        while(start<end){
            [arr[start],arr[end]]=[arr[end],arr[start]]
            start++
            end--
        }
    }
    return nums
}

console.log(rotate([1,2,3,4,5,6,7],3))