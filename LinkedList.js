class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addEnd (value) {
    const node = new Node(value)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail.next = node 
    }

    this.tail = node
  }

  addAfter (nextTo, value) {
    const node = new Node(value)

    let temp = this.head
    
    while (temp != null && temp.value != nextTo){
      temp = temp.next
    }

    if (temp == null) {
      return
    }

    if (temp == this.tail) {
      this.tail.next = node
      this.tail = node 
      return     
    }

    node.next = temp.next
    temp.next = node
  }

  delete (value) {
    let temp = this.head;
    let prev = null

    if (temp != null && temp.value == value){
      this.head = temp.next
      return
    }

    while (temp != null && temp.value != value) {
      prev = temp
      temp = temp.next      
    }
    
    if (temp == null) {
      return
    }

    if (temp == this.tail) {
      this.tail = prev
      this.tail.next = null
      return
    }

    prev.next = temp.next

  }

  display () {
    if (this.head == null){
      console.log('Empty');
      return
    }

    let temp = this.head;

    while (temp != null) {
      console.log(temp.value);
      temp = temp.next
    }
  }


}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  addEnd (value) {
    const newNode = new Node (value)

    if (this.head == null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
    }

    this.tail = newNode
  }

  addAfter(nextTo, value) {
    const newNode = new Node(value);

    let temp = this.head;

    while (temp !== null && temp.value !== nextTo) {
      temp = temp.next;
    }

    if (temp === null) {
      return;
    }

    newNode.next = temp.next;
    newNode.prev = temp;
    temp.next = newNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    } else {
      this.tail = newNode;
    }
  }

  addBefore(beforeTo, value) {
    const newNode = new Node(value);

    let temp = this.head;

    while (temp !== null && temp.value !== beforeTo) {
      temp = temp.next;
    }

    if (temp === null) {
      return;
    }

    newNode.next = temp;
    newNode.prev = temp.prev;

    if (temp.prev !== null) {
      temp.prev.next = newNode;
    } else {
      this.head = newNode;
    }
    
    temp.prev = newNode;
  }

  display () {
    if (this.head == null){
      console.log('Empty');
      return
    }

    let temp = this.head;

    while (temp != null) {
      console.log(temp.value);
      temp = temp.next
    }
  }
}

const list = new LinkedList
const dlist = new DoublyLinkedList



list.display()
list.addEnd(1)
list.addEnd(2)
list.addEnd(3)
list.addEnd(4)
list.display()
list.delete (3)
list.addAfter(2, 8)
list.display()

dlist.display()
dlist.addEnd(1)
dlist.addBefore(1,4)
dlist.display()

