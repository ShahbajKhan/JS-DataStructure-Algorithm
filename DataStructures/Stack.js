class Stack{
    constructor() {
        this.stack =[]
    }
    add(item){
        this.stack.push(item)
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}
const guest = new Stack();
guest.add('Shahbaj');
guest.add('Khan');
guest.add('Toky');
console.log(guest.stack);
let speaker = guest.remove()
console.log(speaker);
console.log(guest.stack);