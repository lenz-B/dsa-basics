// Write a function that finds the maximum number in an array.
function max(array){
  let max = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max){
      max = array[i]
    }    
  }
  return max
}

console.log(max([1,5,8,6,2,4,1]));

// Create an object representing a car with properties for make, model, and year. Then, create a method to display the car's details.
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2012,
  display: function(){
    return `${this.make} ${this.model} in ${this.year}.`
  }
}

console.log(car.display());

// Write a function that accepts a string and returns the string in reverse.
function revStr(str){
  return str.split('').reverse().join('')
}

console.log(revStr('aknaM'));

// Use the map() function to multiply each number in an array by 2.
function multiply(arr){
  return arr.map(n => n * 2)
}
let aq = [1, 2, 3, 4, 5]
console.log('asd', multiply(aq));

// Write a function to filter out odd numbers from an array.
function oddOut(arr){
  return arr.filter(i => i % 2 == 0)
}
console.log(oddOut([1, 2, 3, 4, 5, 6]));

// Write a function that counts the number of vowels in a string.
function vowels(str){
  let vowels = 'aeiouAEIOU'
  let count = 0
  for(let char of str){
    if(vowels.includes(char)){
      count++
    }
  }
  return count
}

console.log(vowels('aelk'));

// What is a callback function? Write an example where one function is passed as an argument to another.
function a(cb){
  let x = 'suii'
  cb(x)
}

function b(str){
  console.log(str)
}

a(b)

// Write a function that finds the factorial of a number using recursion.
// n x (n-1) 

function factorial(n){
  if (n == 0) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5));

// Rewrite the function below using an arrow function.

function multiply(a, b) {
  return a * b;
}

const multiplyArrow = (a, b) => a *b
console.log(multiplyArrow(4, 5))

// promise
let suiii = new Promise((resolve, reject) => {
  let kjk = true
  if (kjk){
    resolve('asddddf')
  }
  reject('asdf')
})

suiii.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
})

function includeNum(arr){
  return new Promise((resolve, reject) => {
    if (arr.includes(4)){
      resolve('success')
    }
    reject('failed')
  })
}
let arr = [1,2,4,5,7,8,9]

includeNum(arr).then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.error(err);
})

//
function* reverseGenerator(n) {
  while (n >= 0) {
    yield n;
    n--;
  }
}

// Usage
const reverseGen = reverseGenerator(10); // You can start from any number
for (let num of reverseGen) {
  console.log(num);
}


//callback hell
function a1(cb){
  setTimeout(() => {
    console.log('suiii 1');
    cb()    
  }, 1000);
}

function b2(cb){
  setTimeout(() => {
    console.log('suiii 2');
    cb()
  }, 1000);
}

function c3(cb){
  setTimeout(() => {
    console.log('suiii 3');
    cb()
  }, 1000);
}

function d4(cb){
  setTimeout(() => {
    console.log('suiii 4');
    cb()
  }, 1000);
}

a1(() => {
  b2(() => {
    c3(() => {
      d4(() => {
        console.log('sdf');
      })
    })
  })
})

// call, apply and bind
function greet(greetWord){
  console.log(`${greetWord}, njan ${this.name}`);
}

let person = {
  name: 'Muhammed Labeeb', 
  age: 20
}

greet.call(person, 'suiii')
greet.apply(person, ['adi sakke'])
let bindFun = greet.bind(person, 'hambada pulsu')

bindFun()

// memory leak
function memoryLeak() {
  // Accidentally creating a global variable
  let leakyVar = new Array(1000).fill("Leak");
  console.log(leakyVar);  
}

// setInterval(memoryLeak, 1000);

//print fibonacci of 0 to 100
function fibonacci(n){
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function printFibonacci(n, max){
  const fib = fibonacci(n)
  if (fib >= max) return
  console.log(fib);
  printFibonacci(n +1, max)  
}

printFibonacci(0, 100)

// find the sum of all elements in the array
const abc = [
  {
      a:5,
      b:[10, 20, 30]
  },
  {
      a:5,
      b:[10, 20, 30]
  },
  {
      a:10,
      b:[10, 20, 30]
    }
]


function sumOfArr(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    let objsum = 0

    objsum+= arr[i].a + arr[i].b[0] + arr[i].b[1] + arr[i].b[2]
    console.log(objsum, 'obj');
    
    sum+= objsum
  }
  return sum
}

console.log('.........',sumOfArr(abc));


//
let array = [1, 3, 4, 3, 6, 8, 9, 7]
let result = [];

function isOdd(num) {
    return num % 2 !== 0
}

for (let i = 0; i < array.length; i++) {
    if (isOdd(array[i]) && isOdd(array[i - 1])) {
        continue;
    }

    else if (isOdd(array[i]) && isOdd(array[i + 1])) {
        i++;
        continue;
    }
    
    else {
        result.push(array[i]);
    }
}

console.log(result);