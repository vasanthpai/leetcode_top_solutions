const reverseList = (head)=>{
    let prev=null
    let current=head
    while(head){
        let next=current.next
        current.next=prev
        prev=current
        current=next
    }
    return prev
}

console.log(reverseList([1,2,3,4,5])) //output: [5, 4, 3, 2, 1]