Got it! Here are some practical DSA problems that can help you test your skills:

1. **Reverse an Array:**
   Write a function to reverse an array in place.

   ```javascript
   function reverseArray(arr) {
    return arr.reverse()
   }
   ```

2. **Find the Maximum Element in an Array:**
   Write a function that returns the maximum element in an unsorted array.

   ```javascript
   function findMax(arr) {
    let lar = -Infinity
    for(let i of arr){
      if(i > lar) lar = i
    }
    return lar
   }
   ```

3. **Check if a String is a Palindrome:**
   Write a function to check if a given string is a palindrome.

   ```javascript
   function isPalindrome(str) {
    let i = 0
    let j = str.length - 1
    while (i < j){
      if (str[i] !== str[j]) return false
      i++
      j--
    }
    return true
   }
   ```

4. **Implement a Stack Using Arrays:**
   Implement the basic operations of a stack (push, pop, peek) using a JavaScript array.

   ```javascript
   class Stack {
       constructor() {
           this.stack = [];
       }

       push(element) {
        this.stack.push(element)
       }

       pop() {
        return this.stack.pop()
       }

       peek() {
        return this.stack[this.stack.length - 1]
       }

       isEmpty() {
        return this.stack.length == 0
       }
   }
   ```

5. **Find the Missing Number in an Array:**
   Given an array of `n-1` numbers in the range 1 to `n`, find the missing number.

   ```javascript
   function findMissingNumber(arr, n) {
    let total = (n * (n + 1)/ 2)
    let arr = arr.reduce((a, b) => a + b, 0)
    return total - arr
   }
   ```

6. **Implement a Queue Using Two Stacks:**
   Implement a queue with two stacks, performing enqueue and dequeue operations.

   ```javascript
   class Queue {
       constructor() {
           this.stack1 = [];
           this.stack2 = [];
       }

       enqueue(element) {
        this.stack1.push(element)
       }

       dequeue() {
        if (this.stack2.length === 0){
          while (this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
          }
        }
        return this.stack2.pop()
       }
   }
   ```

7. **Two Sum Problem:**
   Given an array of integers and a target sum, return the indices of the two numbers that add up to the target.

   ```javascript
   function twoSum(arr, target) {
    let map = {}
    for(let i = 0; i < arr.length; i++){
      let otherNum = target - arr[i]
      if(map[otherNum]){
        return [map[otherNum], arr[i]]
      }
      map[arr[i]] = i
    }    
   }
   ```

8. **Find the Factorial of a Number:**
   Write a function that computes the factorial of a number using recursion.

   ```javascript
   function factorial(n) {
    if (n === 0 || n === 1) return 1
    return n * factorial(n-1)
   }
   ```

9. **Fibonacci Series:**
   Write a function that returns the `n`th number in the Fibonacci sequence using both recursion and dynamic programming.

   ```javascript
   function fibonacci(n) {
    if (n === 0 || n === 1) return n
    return fibonacci(n-1) + fibonacci(n-2)
   }
   ```

10. **Merge Two Sorted Arrays:**
    Given two sorted arrays, merge them into one sorted array.

    ```javascript
    function mergeArrays(arr1, arr2) {
      let result = []
      let i = 0, let j = 0

      while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
          result.push(arr1[i])
          i++
        }else {
          result.push(arr2[j])
          j++
        }
      }

      while(i < arr1.length){
        result.push(arr1[i])
        i++
      }
      while(j < arr1.length){
        result.push(arr2[j])
        j++
      }
      return result
    }
    ```