const merge = (intervals)=>{
    intervals.sort((a,b)=>a[0]-b[0])

    const merged=[]
    for(let interval of intervals){
        if(merged.length===0 || merged[merged.length-1][1] < interval[0]){
            merged.push(interval)
        }else{
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1],interval[1])
        }
    }

    return merged
}

console.log(merged([[1,3],[2,6],[8,10],[15,18]]))
console.log(merged([1, 4], [2, 5], [7, 9], [6, 8], [10, 12]))