// Bubble Sort 
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }      
    }
  } while (swapped); 

  return arr
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: ", array);
console.log("Sorted Array: ", bubbleSort(array));

// ______________________________________________________________

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }
  return arr
}

array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: ", array);
console.log("Sorted Array: ", insertionSort(array));

// ______________________________________________________________

// Selection Sort
function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let small = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]){
        small = j
      }
    }

    if (small !== i){
      let temp = arr[i]
      arr[i] = arr[small]
      arr[small] = temp
    }
  }
  return arr
}

array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: ", array);
console.log("Sorted Array: ", selectionSort(array));

// ______________________________________________________________

// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let pivot = arr[Math.floor(arr.length/2)]
  
  let left = []
  let right = []
  let equal = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot){
      left.push(arr[i])
    }else if (pivot < arr[i]) {
      right.push(arr[i])
    } else {
      equal.push(arr[i])
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)]
}

array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: ", array);
console.log("Sorted Array: ", quickSort(array));

// ______________________________________________________________

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))

  function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex])
        leftIndex ++
      } else {
        result.push(right[rightIndex])
        rightIndex ++
      }      
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }
}

array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: ", array);
console.log("Sorted Array: ", mergeSort(array));