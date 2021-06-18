// Create a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Create LinkedList
class LinkedList{
    constructor(head){
        this.head = head;
    }
    add(item){
        const newNode = new Node(item);
        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
    delete(item){
        let current = this.head;
        // console.log("Head",this.head);
        let previous = null;
        while (current !== null){
            if(current.value === item){
                if(previous === null){
                    this.head = current.next;
                }
                else {
                    previous.next = current.next;
                }
            }
            previous = current;
            current = current.next;
        }
    }
}
// Head Creation
const head = new Node(50);
// Insert head to the beginning of the linkedList
const list = new LinkedList(head);

list.add(40);
list.add(30);
list.add(20);
console.log(JSON.stringify(list));
list.delete(50);
console.log(JSON.stringify(list));