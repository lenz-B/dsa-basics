function removeOdd(arr){
  let result = []

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
      if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0){
      }
      result.push(arr[i])
    }
  }
  return arr
}


let arr = [1,2,3,4,5,5,6,7,7,7]
let ans = removeOdd(arr)
console.log(ans)