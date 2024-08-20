// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null
//     this.length = 0
//   }

//   push(value) {
//     const newNode = new Node(value)
//     newNode.next = this.top
//     this.top = newNode
//     this.length++
//   }

//   pop(){
//     if (this.isEmpty()) return 'Stack underflow'

//     const value = this.top.value
//     this.top = this.top.next
//     this.length--
//     return value
//   }

//   peek(){
//     if (this.isEmpty()) return 'Empty stack'
//     return this.top.value
//   }

//   isEmpty(){
//     return this.length === 0    
//   }

//   size(){
//     return this.length
//   }

//   display(){
//     const temp = this.top
//     let result = ''
//     while (temp){
//       result += temp.value + ' '
//       temp = temp.next 
//     }
//     return result.trim()
//   }
// }

class Stack {
  constructor() {
    this.item = []
  }

  push(value) {
    this.item.push(value)
  }

  pop() {
    if (this.isEmpty()) return null
    return this.item.pop()
  }

  peek() {
    if (this.isEmpty()) return null
    return this.item[this.item.length - 1]
  }

  isEmpty() {
    return this.item.length === 0
  }

  size() {
    return this.item.length
  }
}

function reverseString(string) {
  const stack = new Stack()
  let reversed = ''

  for (let char of string) {
    stack.push(char)
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed
}

function deleteMiddleElement(stack) {
  const midIndex = Math.floor(stack.size() / 2)
  deleteMiddleItem(stack, midIndex)
}

function deleteMiddleItem(stack, Index) {
  if (Index === 0) {
    stack.pop()
    return
  }

  let top = stack.pop()

  deleteMiddleItem(stack, Index - 1)

  stack.push(top)
}

function sortStack(originalStack) {
  const tempStack = new Stack()

  while (!originalStack.isEmpty()) {
    let tmp = originalStack.pop()

    while (!tempStack.isEmpty() && tempStack.peek() < tmp) {
      originalStack.push(tempStack.pop())
    }
    tempStack.push(tmp)
  }
  while (!tempStack.isEmpty()) {
    originalStack.push(tempStack.pop());
  }
}

const stack = new Stack();
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original Stack:", stack.item);  // Output: [1, 2, 3, 4, 5]

deleteMiddleElement(stack);

console.log("Stack after deleting middle element:", stack.item);

stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log("Original Stack:", stack.item);

sortStack(stack);

console.log("Sorted Stack:", stack.item);

// __________________________________________________________________________

function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = arr[i]
        swapped = true
      }
    }
  } while (swapped);
  return arr
}

function insertionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let smallest = i

    for (j = i + 1; j < arr.length; j++) {

      if ( arr[j] < arr[smallest]){
        smallest = j
      }
    }

    if (smallest !== i){
      let temp = arr[i]
      arr[i] = arr[smallest]
      arr[smallest] = arr[i]
    }
  }
  return arr
}

function quickSort(arr){
  if (arr.length <= 1) return arr

  let pivot = arr[Math.floor(arr.length/2)]

  let left = []
  let right = []
  let equal = []

  for (i = 0; i < arr.length; i++){
    if (arr[i] < pivot){
      left.push(arr[i])
    } else if (pivot < arr[i]){
      right.push(arr[i])
    } else {
      equal.push(arr[i])
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)]
}


function mergeSort(arr){
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))

  function merge(left, right){
    let leftIndex = 0
    let rightIndex = 0
    let result = []

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex])
        leftIndex++
      } else {
        result.push(right[rightIndex])
        rightIndex++
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }
}

class hashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for (let i = 0; i < key.length; i++){
      total += key.charCodeAt(i) 
    }
    return total % this.size
  }

  set(key, value){
    let index = this.hash(key)

    const bucket = this.table[index]

    if (!bucket){
      this.table[index] = [[key, value]]
    } else {
      const sameKey = bucket.find(item => item[0] === key) 
      if (sameKey) {
        sameKey[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key){
    const index = this.hash(key)

    const bucket = this.table[index]

    if (bucket){
      const item = bucket.find(item => item[0] === key)
      if (item) return item[1]
    }
    return undefined
  }

  remove(key){
    const index = this.hash(key)

    const bucket = this.table[index]

    if (bucket){
      const item = bucket.find(iem => item[0] === key)
      if (item){
        bucket.splice(bucket.indexOf(item), 1)
      }
    }
    return false
  }
}