    const detectCycle = (head)=>{
        if(!head) return null
        let slow=head,fast=head
        while(true){
            slow=slow.next
            fast=fast.next
            if(fast===null || fast.next===null){
                return null
            }else{
                fast=fast.next
            }
            if(slow===fast) break;
        }
        let p1=head,p2=fast
        while(p1!==p2){
            p1=p1.next
            p2=p2.next
        }
        return p1
    }

    console.log(detectCycle([3,2,0,-4])) //output: 1
    console.log(detectCycle([1,2])) //output: null