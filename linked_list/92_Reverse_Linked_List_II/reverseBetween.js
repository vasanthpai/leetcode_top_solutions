const reverseBetween = (head, left, right) => {
    let currentPos = 1, currentNode = head, start = head;

    while (currentPos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let tail = currentNode, newList = null;

    while (currentPos >= left && currentPos <= right) {
        let next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    if (left > 1) {
        start.next = newList;
    } else {
        head = newList;
    }

    tail.next = currentNode;

    return head;
};

console.log(reverseBetween([1, 2, 3, 4, 5],2,4)) //output: [1, 4, 3, 2, 5]
console.log(reverseBetween([1, 2, 3, 4, 5],1,5)) //output: [5, 4, 3, 2, 1]