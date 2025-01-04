 function parent(){
  let a = 10
  console.log(a)
  console.log(b)
  child()



  function child(){
    let b = 20

    console.log(a)
    console.log(b)
  }
 }

 parent()

 //callback hell

 function one(callback){
  console.log('first fun')
  // setTimeout(() => callback(), 1000)
  return new Promise((resolve, reject) => {callback()})
 }
 function two(callback){
  console.log('second fun')
  // setTimeout(() => callback(), 1000)
  return new Promise((resolve, reject) => {callback()})
 }
 function three(callback){
  console.log('third fun')
  // setTimeout(() => callback(), 1000)
  return new Promise((resolve, reject) => {callback()})

 }
 function four(callback){
  console.log('fourth fun')
  // setTimeout(() => callback(), 1000)
  return new Promise((resolve, reject) => {callback()})

 }

one().then(two().then(three().then(four))).catch(err => console.log(err))

//  one(() => {
//   two(() => {
//     three(() => {
//       four()
//     })
//   })
//  })

//event emitter

let eventOne = new Event

eventOne.addEventListener

function dispacting(){
  eventOne.dispatchEvent
}



//employ table, total 10 empployee, 5 has same email id . count of the employee with same email id

db.collection.aggregate([{$group: {_id: '$emailId', count: {$sum: 1}}}])

//second highest salary in each manager

db.collection.aggregate([{$group: {_id: '$manager'}}, {$sort: {salary: -1}}, {$skip: 1}, {$limit: 1}])

/// binary search, find second largest in sorted array

function secondLargest(arr){
  let size = arr.length
  let mid = Math.floor(size / 2)
  let largest = -Infinity
  let second = -Infinity

  let right = arr.slice(mid, size)

  if (arr[mid] > largest){
    second = largest
    largest = a
  }
}


// reverse a string using a stack

// function reverse(str){
//   let stack = []

//   for (let i = 0; i < str.length; i++){
//     stack.push(str[i])
//   }
//   let result = ''

//   while (stack.length > 0){
//     let a = stack.pop()
//     result += a
//   }

//   return result  
// }

// console.log(reverse('labeeb'))

//labeeb => labeeb => beebal





//remove dup in array using recursion
 
  function helperFun(arr, result = []){
    if (arr.length === 0) return

    let last = arr.splice(arr.length - 1, 1)
    if (!result.includes) result.push(last)
    return helperFun(arr, result)
  }

let arr = [1, 2, 3, 2, 4, 5, 5]
let result = []


console.log(helperFun(arr, result))