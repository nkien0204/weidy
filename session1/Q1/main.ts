class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function main() {
    let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))))
    let temp: number[] = new Array()

    let indexNode = head
    while (true) {
        temp.push(indexNode.val)
        if (indexNode.next === null) {
            break
        }
        indexNode = indexNode.next
    }

    temp.sort((a, b) => a - b)

    let output = new ListNode(temp[0], null)
    indexNode = output
    for (let i = 1; i < temp.length; i++) {
        let newNode = new ListNode(temp[i], null)
        indexNode.next = newNode
        indexNode = indexNode.next
    }

    for (let i = 0; i < temp.length; i++) {
        console.log(output.val)
        if (output.next === null) {
            break
        }
        output = output.next
    }

}

main()
