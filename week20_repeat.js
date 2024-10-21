// [1,2,4,5,7,8,9]
// find number 4 is available
// promise, fs 

// let arr = [1,2,4,5,7,8,9]
// let promise = new Promise(resolve, reject){
//   let a = true
//   if(a){

//   }
// }

//generator fun
// print all even 1 to 100 in rev set timeout 1 sec

// function* evenNum(){
//   setTimeout(() => {
//     for(i=0; i < 101; i++){
//       if (i%2==0){
//         console.log(i);       
//       }
//     }
//   }, 1000);

// }


// console.log(evenNum());


// apply

// function random(name, age){
// console.log(`my name is `, this.name, 'my age is ', this.age );
// }

// let person = {
//   name: 'labeeb'
//   ,age: 20
// }

// const apply = random(person.name, person.age)


// console.log(apply);

// function abc(cb){
  
//   function cb(){
//     console.log('hello');
//   }
//   return cb()
// }


//remove dupli from an array using hash map

// function detDup(arr){
//   let hash = {}

//   for (i= 0; i < arr.length; i++){
//     if (hash[arr[i]]){
//       return true
//     } else {
//       hash[arr[i]] = true
//     }
//   }
//   return false
// }

// let array = [1,2,3,4,5]

// console.log(detDup(array));
