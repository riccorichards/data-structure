const LinkedList = require("./learn");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.appand(value);
  }

  dequeue() {

  }

  isEmpty() {
    return this.list.isEmpty();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();

console.log("Is is empty? ", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(`Size ${queue.getSize()}`);

queue.print();
console.log(`Size ${queue.getSize()}`);

console.log(`Peek ${queue.peek()}`);
