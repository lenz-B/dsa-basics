// fibonacci
function fibonacci(n) {
  const fib = [0, 1]

  for ( let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib  
}

// console.log(fibonacci(7));


// recursive fibonacci
function recursiveFibonacci(n) {
  if ( n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)  
}

// console.log(recursiveFibonacci(6));


// factorial of num
function factorial(n) {
  let fac = 1
  
  for (let i = 2; i <= n; i++){
    fac = fac * i
  }
  return fac
}

// console.log(factorial(5));


// recursive factorial
function recursiveFactorial(n) {
  if ( n == 0){
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

// console.log(recursiveFactorial(10));

// Prime Numbers
function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.sqrt(n); i++){
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// console.log(isPrime(8));


// Power of two
function powerOfTwo(n) {
  if (n < 1){
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0){
      return false
    }
    n  = n / 2
  }
  return true
}

// console.log(powerOfTwo(82));  // O(log n)


function powerOfTwoBitWise(n) {
  if (n < 1){
    return false
  }
  return (n & (n-1)) === 0
}

// console.log(powerOfTwoBitWise(765)) // O(1)


// Binary search
function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    if (target === arr[middleIndex]) {
      return middleIndex      
    }

    if (target < arr[middleIndex]){
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

// console.log(binarySearch([1,2,3,4,5,6], 4));


// recursive binary search
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)  
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex)/2)
  if (target === arr[middleIndex]){
    return middleIndex
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}

// console.log(recursiveBinarySearch([1,2,3,4,5,6], 6));

function binarySearchAgain(arr, target, left = 0, right = arr.length - 1) {
  if (left > right){
    return -1
  }

  const mid = Math.floor((left + right) / 2)

  if (arr[mid] == target){
    return mid
  } else if (target < arr[mid]){
    return binarySearchAgain(arr, target, left, mid - 1)
  } else {
    return binarySearchAgain(arr, target, mid + 1, right)
  }
}

function capString(data) {
  return data.split(' ').map(word => {
    if (word.length == 0) return word
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const revStr = cleanStr.split('').reverse().join('')
  return revStr === cleanStr
}

//------------------------------------------------------------

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  getSize(){
    return this.size
  }

  append(value){
    const newNode = new Node (value)

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++
  }

  prepend(value){
    const newNode = new Node (value)

    if (this.head == null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;

    this.size++
  }

  insert(nextTo, value){
    const newNode = new Node (value)

    if (this.head == null){
      console.log('empty list');
      return
    }

    let temp = this.head

    while (temp.value != nextTo) {
      temp = temp.next
      if (temp == null){
        console.log('element not exist');
        return
      }
    }

    newNode.next = temp.next
    temp.next = newNode

    this.size++
  }

  reverseList(){
    if (!this.head) return

    let prev = null
    let next = null
    let temp = this.head

    while (temp) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next      
    }
    this.head = prev
  }

  duplicateCount() {
    if (this.head === null) {
      console.log('empty list');
      return;
    }

    let currentCount = {};
    let temp = this.head;

    while (temp !== null) {
      this.counting(temp.value, currentCount);
      temp = temp.next;
    }

    console.log(currentCount);
    return currentCount;
  }

  counting(element, currentCount) {
    if (element in currentCount) {
      currentCount[element] += 1;
    } else {
      currentCount[element] = 1;
    }
  }

  duplicateDelete(){
    if (!this.head) return

    let temp = this.head
    let unique = new Set();

    unique.add(temp.value)

    while (temp.next) {
      if (unique.has(temp.next.value)) {
        temp.next = temp.next.next
      } else {
        unique.add(temp.next.value)
        temp = temp.next
      }
    }
  }

  findMid(){
    if (!this.head) {
      console.log('podaa');
      return
    }
    let slow = this.head
    let fast = this.head

    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }

    return slow
  }

  deleteMid(){
    if (!this.head) {
      console.log('podaa');
      return
    }
    let slow = this.head
    let fast = this.head
    let prev = null

    while (fast !== null && fast.next !== null) {
      prev = slow
      slow = slow.next
      fast = fast.next.next
    }

    if (prev) {
      prev.next = slow.next
    }
  }

  isPalindrome(){
    if (!this.head || !this.head.next){
      return true
    }

    let slow = this.head
    let fast = this.head
    let prev = null

    while (fast && fast.next) {
      prev = slow
      slow = slow.next
      fast = fast.next.next      
    }

    let secondHalf = reverseList(slow)
    let firstHalf = this.head

    while (secondHalf) {
      if (firstHalf.value !== secondHalf.value) return false

      firstHalf = firstHalf.next
      secondHalf = secondHalf.next
    }

    return true

    function reverseList(head) {
      let prev = null
      let temp = head
      let next = null
      
      while (temp) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next            
      }
      return prev
    }

  }

  print(){
    if(this.head == null){
      console.log('empty');
      return
    }

    let temp = this.head

    while (temp != null) {
      console.log(temp.value, ' ');
      temp = temp.next
    }
  }
}


let data = "make the first letter of the word capital in a sentence"
console.log(capString(data));

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello"));

const list = new LinkedList();
list.print();
list.append(1);
list.append(2);
list.append(2);
list.insert(2,3)
list.append(2);
list.prepend(0);
list.print();  
console.log('Size:', list.getSize());
list.duplicateCount()
// list.duplicateDelete()
console.log(list.findMid());
// list.reverseList()
list.print()
console.log('Size:', list.getSize());













