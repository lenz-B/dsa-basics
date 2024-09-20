// Stack
class Stack {
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    if (this.isEmpty()) return 'Stack is empty'
    return this.items.pop()
  }

  peek(){
    if (this.isEmpty()) return 'Stack is empty'
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0
  }

  getSize(){
    console.log();
    return this.items.length
  }

  printStack(){
    return this.items.join(', ')
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // Output: 10 20 30
console.log(stack.peek());       // Output: 30
console.log(stack.pop());        // Output: 30
console.log(stack.printStack()); // Output: 10 20

//_____________________________________________________________

// Stack in Linked List
class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedListStack{
  constructor(){
    this.top = null
    this.length = 0
  }

  push(value){
    const newNode = new Node(value)
    newNode.next = this.top;
    this.top = newNode;
    this.length++
  }

  pop(){
    if (this.isEmpty()) return 'Stack underflow'
    const value = this.top.value
    this.top = this.top.next
    this.length--
    return value
  }

  peek(){
    if (this.isEmpty()) return 'Stack is empty'
    return this.top.value
  }

  isEmpty(){
    return this.length === 0
  }

  getSize(){
    return this.length
  }

  printStack(){
    let temp = this.top
    let result = ''

    while (temp) {
      result += temp.value + ' '
      temp = temp.next
    }
    return result.trim()
  }
}

const stackL = new LinkedListStack();
stackL.push(1);
stackL.push(2);
stackL.push(3);
console.log(stackL.pop());     // Output: 3
console.log(stackL.peek());    // Output: 2
console.log(stackL.getSize());    // Output: 2
console.log(stackL.isEmpty()); // Output: false
console.log(stackL.printStack()); // Output: 2 1

// ________________________________________________________________

// Queue in array
class Queue{
  constructor(){
    this.queue = []
  }

  enqueue(element){
    this.queue.push(element);
  }

  dequeue(){
    if (this.isEmpty()) return 'Queue is empty'
    return this.queue.shift()
  }

  isEmpty(){
    return this.queue.length === 0
  }

  getSize(){
    return this.queue.length
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());  // Output: 1
console.log(q.getSize());     // Output: 2

// ___________________________________________________________________

// Queue in Linked List

class QueueLinked{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(value){
    const newNode = new Node (value)
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length++
  }

  dequeue(){
    if (this.isEmpty()) return 'Queue is empty'

    const value = this.head.value;
    this.head = this.head.next
    this.length--

    if (this.isEmpty()) this.tail = null

    return value
  }

  isEmpty(){
    return this.length  === 0
  }

  getSize(){
    return this.length
  }
}

const qq = new QueueLinked();
qq.enqueue(1);
qq.enqueue(2);
qq.enqueue(3);
console.log(qq.dequeue());  // Output: 1
console.log(qq.getSize());  // Output: 2