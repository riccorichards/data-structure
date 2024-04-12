const LinkedList = require("./learn");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.appand(value);
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

const stack = new LinkedListStack();

console.log("Is is empty? ", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(`Size ${stack.getSize()}`);

stack.print();
console.log(`Size ${stack.getSize()}`);

console.log(`Peek ${stack.peek()}`);
