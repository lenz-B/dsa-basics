// class Node{
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BST{
//   constructor() {
//     this.root = null
//   }

//   insert(value){
//     const newNode = new Node(value)
//     if (!this.root){
//       this.root = newNode      
//     } else {
//       this.insertHelper(value, this.root)
//     }
//   }

//   insertHelper(value, current){
//     if (!current){
//       current = newNode
//     }
//     if(value < current.value){
//       this.insertHelper(value, current.left)
//     } else {
//       this.insertHelper(value, current.right)
//     }
//   }

//   findSecondLargest(){

//     let largest = null
//     let sec = null
//     let parent = null
//     return this.findSecondLargestHelper(this.root, largest, sec)
//   }
  
//   findSecondLargestHelper(node, largest, sec, parent){
//     if(!node.right){
//       largest = node
//     }
//     if(largest.left){
//       sec = largest.left
//       return sec.value
//     } else{
        
//     }
//     parent = node
//     return this.findSecondLargestHelper(node.right, largest, sec, parent)
//   }
// }


// ///////////////////////////

// dfs(){
//   let visited = {}
//   let ans = []

//   const dfsFun = (vertex) => {
//     if (!vertex) return 

//     visited[vertex] = true
//     ans.push(vertex)

//     this.graph[vertex].forEach(other => {
//       if(!visited[other]){
//         dfsFun(other)
//       }
//     });
//   }

//   for (let vertex in this.graph){
//     if (!visited[vertex]){
//       dfsFun(vertex)
//     }
//   }
//   return ans
// }

//////////////////////////////

class TrieNode{
  constructor(){
    this.children = new Map()
    this.isEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
  }

  addWord(word){
    let node = this.root

    for ( let char of word){
      if(!node.children.has(char)){
        node.children.set(char, new TrieNode())
      }

      node = node.children.get(char)
    }
    node.isEnd = true
  }

  autoSuggest(input){
    let node = this.root

    for (let char of input){
      if (!node.children.has(char)){
        return console.log('nothing');
      }
      node = node.children.get(char)
    }

    let result = []
    console.log('hh');
    this.autoSuggestHelper(node, input, result)
    console.log(result);
    return result
  }

  autoSuggestHelper(node, input, array){
    if(node.isEnd){
      array.push(input)
      console.log('kk');
    }

    for (let [char, childNode] in node.children){
      this.autoSuggestHelper(childNode, input + char, array )
    }
    return array
  }

}

const trie = new Trie()

trie.addWord('apple')
trie.autoSuggest('a')