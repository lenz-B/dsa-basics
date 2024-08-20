// class MinHeap{
//   constructor(){
//     this.heap = []
//   }

//   buildHeap(array){
//     this.heap = array
//     for (let i = Math.floor(this.heap.length/ 2); i >= 0; i--){
//       this.heapifyDown(i)
//     }
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapifyUp(this.heap.length - 1)
//   }

//   remove(){
//     if (this.heap.length === 0) return null
//     const root = this.heap[0]
//     const end = this.heap.pop()

//     if (this.heap.length > 0){
//       this.heap[0] = end
//       this.heapifyDown(0)
//     }
//     return root
//   }

//   heapifyDown(index){
//     let smallest = index
//     let leftChild = 2 * index + 1
//     let rightChild = 2 * index + 2

//     if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
//       smallest = leftChild
//     }
//     if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
//       smallest = rightChild
//     }

//     if (smallest !== index){
//       [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
//       this.heapifyDown(smallest)
//     }
//   }

//   heapifyUp(index){
//     let parentIndex = Math.floor((index - 1) / 2)

//     if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
//       this.heapifyUp(parentIndex)
//     }
//   }
// }

class MinHeap{
  constructor() {
    this.heap = []
  }

  buildHeap(array){
    this.heap = array
    for (let i = Math.floor((this.heap.length - 2) / 2); i >= 0; i--){
      this.heapifyDown(i)
    }
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  remove(){
    if (this.heap.length === 0) return null

    let root = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0){
      this.heap[0] = end
      this.heapifyDown(0)
    }
    return root
  }

  heapSort(array){
    this.buildHeap(array)
    let size = array.length - 1

    for (let i = 0; i <= size; i++){
      [array[0], array[i]] = [array[i], array[0]]
      size--
      this.heapifyDown(0, size)
    }
    return array
  }

  heapifyUp(index){
    let parentIndex = Math.floor((index - 1) / 2)

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      this.heapifyUp(parentIndex)
    }
  }

  heapifyDown(index, size = this.heap.length - 1){
    let smallest = index
    let leftChild = 2 * index + 1
    let rightChild = 2 * index + 2

    if (leftChild <= size && this.heap[leftChild] < this.heap[smallest]){
      smallest = leftChild
    }
    if (rightChild <= size && this.heap[rightChild] < this.heap[smallest]){
      smallest = rightChild
    }

    if (smallest !== index){
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      this.heapifyDown(smallest, size)
    }
  }
}

const minHeap = new MinHeap();
minHeap.buildHeap([3, 1, 6, 5, 2, 4]);
console.log("Min Heap: ", minHeap.heap); // [1, 2, 4, 5, 3, 6]
minHeap.insert(0);
console.log("Min Heap after insert: ", minHeap.heap); // [0, 2, 1, 5, 3, 6, 4]
console.log("Removed element: ", minHeap.remove()); // 0
console.log("Min Heap after removal: ", minHeap.heap); // [1, 2, 4, 5, 3, 6]
console.log("Heap Sort: ", minHeap.heapSort([3, 1, 6, 5, 2, 4])); // [1, 2, 3, 4, 5, 6]


// class MaxHeap{
//   constructor(){
//     this.heap = []
//   }

//   buildHeap(array){
//     this.heap = array
//     for (let i = Math.floor(this.heap.length / 2); i >= 0; i--){
//       this.heapifyDown(i)
//     }    
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapifyUp(this.heap.length - 1)
//   }

//   remove(){
//     if (this.heap.length === 0) return null;

//     let root = this.heap[0];
//     let end = this.heap.pop();

//     if (this.heap.length > 0) {
//       this.heap[0] = end;
//       this.heapifyDown(0);
//     }
//     return root;
//   }

//   heapifyDown(index){
//     let largest = index
//     let leftChild = 2 * index + 1
//     let rightChild = 2 * index + 2

//     if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]){
//       largest = leftChild
//     }
//     if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]){
//       largest = rightChild
//     }

//     if (largest !== index){
//       [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
//       this.heapifyDown(largest)
//     }
//   }

//   heapifyUp(index){
//     let parentIndex = Math.floor((index - 1) / 2)

//     if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]){
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
//       this.heapifyUp(parentIndex)
//     }
//   }

//   heapSort(array){
//     this.buildHeap(array)
//     let size = array.length - 1

//     for(let i = size; i > 0; i--){
//       [array[0], array[i]] = [array[i], array[0]]
//       size--
//       this.heapifyDownWithSize(0, size)
//     }
//     return array
//   }

//   heapifyDownWithSize(index, size){
//     let largest = index;
//     let leftChild = 2 * index + 1;
//     let rightChild = 2 * index + 2;

//     if (leftChild < size && this.heap[leftChild] > this.heap[largest]) {
//       largest = leftChild;
//     }
//     if (rightChild < size && this.heap[rightChild] > this.heap[largest]) {
//       largest = rightChild;
//     }

//     if (largest !== index) {
//       [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//       this.heapifyDownWithSize(largest, size);
//     }
//   }
// }

class MaxHeap {
  constructor(){
    this.heap = []
  }

  buildHeap(array){
    this.heap = array
    for (let i = Math.floor((this.heap.length - 2) / 2); i >= 0; i--){
      this.heapifyDown(i)
    }
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  remove(){
    if (this.heap.length === 0) return null

    let root = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0){
      this.heap[0] = end
      this.heapifyDown(0)
    }
    return root
  }

  heapSort(array){
    this.buildHeap(array)
    let size = array.length - 1

    for (let i = size; i >= 0; i--){
      [array[0], array[i]] = [array[i], array[0]]
      size--
      this.heapifyDown(0, size)
    }
    return array
  }

  heapifyUp(index){
    let parentIndex = Math.floor((index - 1) / 2)

    if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]){
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      this.heapifyUp(parentIndex)
    }
  }

  heapifyDown(index, size = this.heap.length - 1){
    let largest = index
    let leftChild = 2 * index + 1
    let rightChild = 2 * index + 2
    
    if (leftChild <= size && this.heap[leftChild] > this.heap[largest]){
      largest = leftChild
    }
    if (rightChild <= size && this.heap[rightChild] > this.heap[largest]){
      largest = rightChild
    }

    if (largest !== index){
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
      this.heapifyDown(largest, size)
    }
  }
}


const maxHeap = new MaxHeap();
maxHeap.buildHeap([3, 1, 6, 5, 2, 4]);
console.log("Max Heap: ", maxHeap.heap); // [6, 5, 4, 1, 2, 3]
maxHeap.insert(7);
console.log("Max Heap after insert: ", maxHeap.heap); // [7, 5, 6, 1, 2, 3, 4]
console.log("Removed element: ", maxHeap.remove()); // 7
console.log("Max Heap after removal: ", maxHeap.heap); // [6, 5, 4, 1, 2, 3]
console.log("Heap Sort: ", maxHeap.heapSort([3, 1, 6, 5, 2, 4])); // [1, 2, 3, 4, 5, 6]
