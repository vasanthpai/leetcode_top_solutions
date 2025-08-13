const rightSideView = (root)=>{
    if(!root) return []
    const res=[]
    let q=[root]
    while(q.length){
        let count=0,node=null
        const length=q.length
        while(count<length){
            node=q.shift()
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
            count++
        }
        res.push(node.val)
    }
    return res
}