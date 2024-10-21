// function add(){
//   let sum = 5 + 5
//   return function print(){
//     console.log(sum);
//   }
// }

// // add(5, 4)
// add()


// call back hell
// function a(b,c,d){
//   return b(c)
// }
// function q(c){
//   return c()
// }
// function c()


// a(q, c)


// [175, 916]
// // [output should be [619, 571]\

// function rev(arr){
//   let a = 
  
//   return arr
// }

// let arr = [175, 916]
// console.log(rev(arr));

function revArr(arr){
  let revArr = arr.reverse()

  let res = revArr.map(num => {
    return parseInt(num.toString().split('').reverse().join(''))
  })

  return res
}
let arr = [175, 916]

console.log(revArr(arr));