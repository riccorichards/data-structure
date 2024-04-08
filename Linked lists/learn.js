class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  appand(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Provided Invalid Index (PII)");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Provided Invalid Index");
      return;
    }
    let removedIndex;
    if (index === 0) {
      removedIndex = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedIndex = prev.next;
      prev.next = removedIndex.next;
    }
    this.size--;
    return removedIndex.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }

      return "Provided value was not defined";
    }
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

const list = new LinkedList();
console.log(`Is list empty? ${list.isEmpty()}`);
console.log(`Can you show me the size? ${list.getSize()}`);
list.print();
list.appand(10);
list.print();

list.appand(20);
list.appand(30);
list.print();
console.log(`Now show me size please? ${list.getSize()}`);

list.insert(25, 2);
list.print();

console.log(list.removeFrom(4));
list.print();

console.log(list.removeValue(20));
console.log(list.removeValue(20));
list.print();
