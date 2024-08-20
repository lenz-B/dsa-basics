class Node {
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList{
  constructor () {
    this.head = null
    this.tail = null
  }

  append(value){
    const newNode = new Node(value)

    if (this.head == null){
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  prepend(value){
    const newNode = new Node(value)

    if (!this.head){
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
  }

  
}