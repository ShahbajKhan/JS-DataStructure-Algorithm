class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const fruits = new Queue();
fruits.enqueue('Apple')
fruits.enqueue('Mango')
fruits.enqueue('orange');
console.log(fruits.queue);
const rotten = fruits.dequeue();
console.log(rotten);
console.log(fruits.queue);