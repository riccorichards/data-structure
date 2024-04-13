class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      node.next = this.head; //new node's next is equal to head, that means it became the first node is the linked list;
      this.head = node; //the head as we know it always should be the first node is the linked list, so we assign it to new added node
    }

    this.size++;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return value;
    } else {
      let prev = this.head; //we need to define prev to start iteration process from scratch'
      while (prev.next && prev.next !== this.tail) {
        //once the prev.next would be equal to the tail we need to done iteration process
        prev = prev.next; //we need to move on the next node before the prev reach the last node;
      }
      prev.next = null; //we know that the next node it the last node so we simple remove it;
      this.tail = prev; //the now the last node is prev
    }
    this.size--;
    return value;
  }

  appand(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head; //start iteration process from the scratch
      while (prev.next) {
        prev = prev.next; //move the next before we reached the last node, means the next is null;
      }
      prev.next = node; //so if the next is null we assign it new node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Provided Invalid Index (PII)");
    }
    if (index === 0) {
      this.prepend(value); //if index is 0. we know that 0 is the first element in the linked list;
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        //we start iteration process from the 0 index and running before end - 1,
        prev = prev.next; //move on the next node;
      }
      node.next = prev.next; //if prev.next is 5 and node is 4. now node.next is equal 5
      prev.next = node; // and prev.next is 5 but we need to make it 4.
      this.size++;
    }
  }

  search(value) {
    if (this.isEmpty()) return "List is empty!";
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }

    return "Value was not defined";
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      //it would be true until it reach null (move than existing values)
      let next = curr.next; //curr = 0; curr.next/next = 1; (0 => 1)
      curr.next = prev; //curr.next = null; curr = 0; next = 1; (null <= 0)
      prev = curr; // prev = 0; (null <= 0)
      curr = next; // curr = 1; curr.next = null; prev = 0; curr = 1; (null <= 0 <= 1)
    }

    this.head = prev; //because head should be always 0;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Provided Invalid Index");
      return;
    }
    let removedIndex;
    if (index === 0) {
      removedIndex = this.head; //removedItem now it head's value;
      this.head = this.head.next; //the current node is head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedIndex = prev.next; //prev.next is the node which we need to remove; if prev.next = 5; now removedIndex also is equal 5;
      prev.next = removedIndex.next; //now prev.next = equal 6 (removeIndex.next), so we lost value 5;
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
      this.head = this.head.next; //current head lost;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        //this means we catch the node which should removed;
        const removeNode = prev.next;
        prev.next = removeNode.next; //still we are lossing the node
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

module.exports = LinkedList;

//console.log(`Is list empty? ${list.isEmpty()}`);
//console.log(`Can you show me the size? ${list.getSize()}`);
//list.print();
//list.appand(10);
//list.print();

//list.appand(20);
//list.appand(30);
//list.print();
//console.log(`Now show me size please? ${list.getSize()}`);

//list.insert(25, 2);
//list.print();

//console.log(list.removeFrom(4));
//list.print();

//console.log(list.search(10));
//console.log(list.search(20));
//console.log(list.search(25));
//console.log(list.search(30));
//console.log(list.search(40));
//list.reverse();
//list.print();
