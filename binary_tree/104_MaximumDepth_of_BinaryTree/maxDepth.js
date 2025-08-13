const maxDepth = (node) =>{
    if(node === null) return 0

    const leftDepth=maxDepth(node.left)
    const rightDepth=maxDepth(node.right)

    return Math.max(leftDepth,rightDepth)+1
}