const eraseOverlapIntervals =(intervals)=>{
    if(intervals.length===0) return 0
    intervals.sort((a,b)=>a[1]-b[1])

    let count=0
    let prevEnd=intervals[0][1]
    for(let i=1;i<intervals.length;i++){
        const [start, end] = intervals[i]
        if(start<prevEnd){
            count++
        }else{
            prevEnd=end
        }
    }
    return count
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Output: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));       // Output: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]]));             // Output: 0