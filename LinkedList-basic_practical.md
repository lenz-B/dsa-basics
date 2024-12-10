Here are some practical exercises to improve your understanding and implementation of Linked Lists in JavaScript. Each exercise comes with a brief description of the task to help you focus on key concepts.

---

### **1. Implement a Singly Linked List**

**Task**: Create a Singly Linked List class with the following methods:

- `append(value)`: Add a new node to the end of the list.
- `prepend(value)`: Add a new node to the beginning of the list.
- `print()`: Print all the elements of the list.

```typescript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) this.head = node;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  remove(value) {
    if (!this.head) return;
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.value == value) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      return;
    }
  }

  print() {
    if (!this.head) return;
    let curr = this.head;
    let values = [];
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    console.log(values);
  }
}

const list = new LinkedList();
list.append(10); // Add 10
list.append(20); // Add 20
list.prepend(5); // Add 5 at the beginning
list.print(); // Output: 5 -> 10 -> 20
list.remove(10); // Remove 10
list.print(); // Output: 5 -> 20
```

---

### **2. Reverse a Linked List**

**Task**: Write a function to reverse a given singly linked list in place.  
Example:  
Input: `1 -> 2 -> 3 -> 4`  
Output: `4 -> 3 -> 2 -> 1`

```javascript

reverse(){
  let prev = null
  let curr = this.head
  let next = null

  while (curr){
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  this.head = prev
}

```

---

### **3. Detect a Cycle in a Linked List**

**Task**: Implement a function to detect if a linked list has a cycle using the Floyd's Tortoise and Hare algorithm.  
Example:  
Input: `1 -> 2 -> 3 -> 4 -> 2 (cycle back to 2)`  
Output: `true`

```javascript
isCycle(){

  let slow = this.head
  let fast = this.head

  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next

    if(slow == fast) return console.log(true)
  }
  return console.log(false)
}
```

---

### **4. Find the Middle Node**

**Task**: Write a function to find the middle node of a linked list. If the list has an even number of nodes, return the second middle node.  
Example:  
Input: `1 -> 2 -> 3 -> 4 -> 5`  
Output: `3`

```javascript
findMiddle(){
  let slow = this.head
  let fast = this.head

  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  return slow ? slow.value : null
}

```

---

### **5. Merge Two Sorted Linked Lists**

**Task**: Merge two sorted linked lists into one sorted linked list.  
Example:  
Input: `1 -> 3 -> 5` and `2 -> 4 -> 6`  
Output: `1 -> 2 -> 3 -> 4 -> 5 -> 6`

```javascript
merge(one, two){
  
}
```
---

### **6. Remove Duplicates from a Sorted Linked List**

**Task**: Remove all duplicate nodes from a sorted linked list.  
Example:  
Input: `1 -> 1 -> 2 -> 3 -> 3`  
Output: `1 -> 2 -> 3`

---

### **7. Delete a Node Without Head Reference**

**Task**: Given a reference to a node in a linked list (but not the head), delete that node.  
Example:  
Input: `Node with value 3 in 1 -> 2 -> 3 -> 4`  
Output: `1 -> 2 -> 4`

---

### **8. Check if a Linked List is a Palindrome**

**Task**: Check whether the linked list is a palindrome (reads the same forwards and backwards).  
Example:  
Input: `1 -> 2 -> 2 -> 1`  
Output: `true`

---

### **9. Remove N-th Node from the End**

**Task**: Remove the N-th node from the end of a linked list.  
Example:  
Input: `1 -> 2 -> 3 -> 4 -> 5`, N = 2  
Output: `1 -> 2 -> 3 -> 5`

---

### **10. Intersection of Two Linked Lists**

**Task**: Find the node where two linked lists intersect.  
Example:  
Input: `1 -> 2 -> 3 -> 4 -> 5` and `6 -> 7 -> 4 -> 5`  
Output: `4 -> 5`

---

### **11. Sort a Linked List**

**Task**: Write a function to sort a linked list using merge sort or insertion sort.

---

### **12. Flatten a Multilevel Linked List**

**Task**: Flatten a linked list where each node might have a child pointer to another linked list.

---

### **13. Rotate a Linked List**

**Task**: Rotate a linked list to the right by K places.  
Example:  
Input: `1 -> 2 -> 3 -> 4 -> 5`, K = 2  
Output: `4 -> 5 -> 1 -> 2 -> 3`

---

### **14. Partition a Linked List**

**Task**: Partition the list around a value x, such that nodes less than x come before nodes greater than or equal to x.  
Example:  
Input: `1 -> 4 -> 3 -> 2 -> 5 -> 2`, x = 3  
Output: `1 -> 2 -> 2 -> 4 -> 3 -> 5`

---
