const flatten = (head)=>{
    let currentNode=head
    while(currentNode!==null){
        if(currentNode.child===null){
            currentNode=currentNode.next
        }else{
            let tail=currentNode.child
            while(tail.next!==null){
                tail=tail.next
            }
            tail.next=currentNode.next
            if(tail.next!==null){
                tail.next.prev=tail
            }
            currentNode.next=currentNode.child
            currentNode.next.prev=currentNode
            currentNode.child=null
            currentNode = currentNode.next;
        }
    }
    return head
}