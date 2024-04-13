class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;
    const value = this.head.value;
    this.head = this.head.next; //we lost the current head;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  appand(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; //this.tail.next = null; node = 6 ===>  this.tail.next = 6;
      this.tail = node; // this.tail = 6; this.tail.next = null;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} => `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const list = new LinkedListWithTail();
console.log(`Is list empty? ${list.isEmpty()}`);
console.log(`Can you show me the size? ${list.getSize()}`);
list.print();

list.appand(1);
list.appand(2);
list.appand(3);
list.prepend(0);
list.print();

console.log(list.removeFromEnd());
console.log(list.removeFromFront());
list.print();
