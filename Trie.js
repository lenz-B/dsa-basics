// class TrieNode{
//   constructor(){
//     this.children = new Map()
//     this.isEnd = false
//   }
// }

// class Trie{
//   constructor (){
//     this.root = new TrieNode
//   }

//   insert(word){
//     let node = this.root

//     for(let char of word){
//       if (!node.children.has(char)){
//         node.children.set(char, new TrieNode())
//       }

//       node = node.children.get(char)
//     }
//     node.isEnd = true
//   }

//   search(word){
//     let node = this.root
//     for (let char of word){
//       if (!node.children.has(char)){
//         return false
//       }

//       node = node.children.get(char)
//     }
//     return node.isEnd
//   }

//   startsWith(input){
//     let node = this.root

//     for (let char of input){
//       if (!node.children.has(char)){
//         return false
//       }

//       node = node.children.get(char)
//     }
//     return true
//   }

//   autoSuggest(input){
//     let node = this.root

//     for(let char of input){

//       if (!node.children.has(char)){
//         return []
//       }
//       node = node.children.get(char)
//     }
//     let results = []
//     this.collectWords(node, input, results)
//     console.log(results);
//     return results
//   }

//   collectWords(node, input, array){
//     if(node.isEnd){
//       array.push(input)
//     }
//     for(let [char, childNode] of node.children){
//       this.collectWords(childNode, input + char, array)
//     }
//   }

// }


class TrieNode{
  constructor() {
    this.children = new Map()
    this.isEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode
  }

  insert(word){
    let node = this.root

    for(let char of word){
      if (!node.children.has(char)){
        node.children.set(char, new TrieNode)
      }
      node = node.children.get(char)
    }
    node.isEnd = true
  }

  search(word){
    let node = this.root

    for (let char of word){
      if (!node.children.has(char)){
        return false
      }
      node = node.children.get(char)
    }
    return node.isEnd
  }

  startsWith(input){
    let node = this.root 

    for (let char of input){
      if (!node.children.has(char)){
        return false
      }
      node = node.children.get(char)
    }
    return true
  }

  autoSuggest(input){
    let node = this.root 

    for (let char of input){
      if (!node.children.has(char)){
        return console.log('...');
      }
      node = node.children.get(char)
    }
    let results = []
    this.collectWords(node, input, results)
    console.log(results);
    return results
  }

  collectWords(node, input, array){
    if (node.isEnd){
      array.push(input)
    }

    for(let [char, childNode] of node.children){
      this.collectWords(childNode, input + char, array)
    }
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");   
console.log(trie.search("app"));     // returns true

trie.insert("apple");
trie.insert("app");
trie.insert("africa");
trie.insert("apricot");
trie.insert("banana");

trie.autoSuggest("a"); // returns ["apple", "app"]
trie.autoSuggest("apr"); // returns ["apricot"]
trie.autoSuggest("ban"); // returns ["banana"]
trie.autoSuggest("cat"); // returns []