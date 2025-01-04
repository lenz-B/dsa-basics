function reverse(str){
  let stack = []

  for (let i = 0; i < str.length; i++){
    stack.push(str[i])
  }
  let result = ''

  while (stack.length > 0){
    let a = stack.pop()
    result += a
  }

  return result  
}

reverse('labeeb')