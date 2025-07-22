const reverseWords=(s)=>{
    let word = s.trim().split(/\s+/)
    reverse(word,0,word.length-1)
    return word.join(" ")

    function reverse(word,start,end){
        while(start<end){
            [word[start],word[end]]=[word[end],word[start]]
            start++
            end--
        }
    }
}

console.log(reverseWords("the sky is blue"))