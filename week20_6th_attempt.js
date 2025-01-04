//  object destructuring

let obj = {'a': 1, 'b': 2}

let {num1, num2} = obj

console.log(num1,num2)


//call apply and bind

function greet(some, random){
  console.log(`${some}, ${this.name}, ${random}`)
}

let a = {name: 'labeeb', age: 20}

greet.call(a, 'hello', '!!!!')
greet.apply(a, ['hello', '%%%'])

let newGreet = greet.bind(a)

newGreet('suiii', 'random')

// find 2nd smallest odd no using reduce 

function smallestOddNum(arr){
  return arr.reduce(num => {

  })
}


// [1,2,[3,4],5] => 2,4,6,8,10

function one(arr){
  let result = arr.flat(1)
  for (let num of result){
    num = num * 2
  }
  return result
}

let array = [1,2,[3,4],5]
one(array)

// callback fun

function first(next){
  console.log('this is first fun')
  setTimeout(() => next(), 1000)
}

function second(){
  console.log('this is second fun')
}

first(() => {
  second()
})


// using gen fun print even no 1 to 100 in reverse order

function* printEven(){
  yield num6 = 2
  
}

function calling(){
  for (let i = 2; i <= 100; i+= 2){

  }
}

// deep copy

let anyObj = {
  name: 'Manaf',
  age: '54',
  someArray: [1, 2, 3]
}

let deepCopy = JSON.parse(JSON.stringify(anyObj))


// implement promise, resolve: write a time into a file

let time = new Date
let fileName = newFile.txt

function anyName(fileName, time){
  return new Promise(resolve => {
    resolve = true
    if (resolve) {
      fs.write(fileName, time, (err) => {
        if(err) console.error(err)
      })
    }
  })
}

anyName(fileName, time)

//eventEmitter

let someName = document.getElementById('someId').addEventListener

//dist dept with avg age, total mark and count of students


//HeapSort

class MaxHeap{
  constructor(){
    this.heap = []
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length -1)
  }

  buildHeap(arr){
    this.heap = [...arr]

    for(let i = Math.floor((this.heap.length - 2) / 2); i >= 0; i--){
      heapifyDown(i)
    }
  }

  remove(){
    if (this.heap.length === 0) return 'sorry'
    
    let target = this.heap[0]
    let end = this.heap.pop()

    return target
  }

  heapifyUp(i){
    let parent = Math.floor((i - 1) / 2)

    if (parent >= 0 && this.heap[parent] < this.heap[i]){
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
      this.heapifyUp(parent)
    }
  }

  heapifyDown(i, size = this.heap.length){
    let biggest = i
    let left = 2 * i +1
    let right = 2 * i +2

    if (left < size && this.heap[left] > this.heap[biggest]) biggest = left
    if (right < size && this.heap[right] > this.heap[biggest]) biggest = right
    if (biggest !== i){
      [this.heap[biggest], this.heap[i]] = [this.heap[i], this.heap[biggest]]
      this.heapifyDown(biggest)
    }
  }
}