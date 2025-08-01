const generate = (numRows)=>{
    let results=[]
    for(let i=0;i<numRows;i++){
        const row=new Array(i+1).fill(1)

        for(let j=1;j<i;j++){
            row[j]=results[i-1][j-1]+results[i-1][j]
        }

        results.push(row)
    }

    return results
}

console.log(generate(5))