// // remove vowels from a string


// function removeVowels(str){
//   let vowels = 'aeiou'
//   let arr = str.split('')
//   let res = []

//   console.log('qw', str, arr);

//   for(let i = 0; i < arr.length; i++){
//     if (arr[i] == 'a'||'e'||'i'||'o'||'u' ){
//       console.log('asd');
//       continue
//     }

//     res.push(arr[i])
//   }
//   console.log(res);
//   return res.join('')
// }

// removeVowels('labeeb')

// // create a api end point dividing two numbers which coming in path params, validation and exception handling

// function divide(req, res){
//   try {
//     let num1 = req.params.num1
//     let num2 = req.params.num2
  
//     if (num1 !== Number && num2 !== Number){
//       res.send('invalid')
//     }
  
//     let result = num1 / num2
//     return result
//   } catch (error) {
//     res.send('error in divide: ', error)
//   }
// }

// // name, class, mark
// // find avg in class 10

// db.collection.aggregate([{$match: {class: 10}}, {average: {$avg: '$mark'}}])
// //add all mark
// ad.collection.updateMany({}, {$multiply: {$mark: 1.10}})
// //student name of second largest mark in class 10
// db.collection.aggregate([{$match: {class: 10}, {$sort: -1}, {$limit: 1}, {$skip: 1}, {$project: {_id: 0, name: 1}}}])


// // write fun to remove duplicate from a liked list

// function remDup(){
//   let temp = this.head

//   while (temp) {

//     if (temp.value === temp.next.value){
//       temp.next = temp
//       temp = temp.next.next
//     }



//     if (temp.value !== temp.next.value){
//       temp = temp.next
//     }
//   }
// }