//_________________Bst_________________

class NOde{
  constructor(value, left = null, right = null){
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST{
  constructor(){
    this.root = null
  }

  insert(value){
    const newNode = new Node (value)

    if (!this.root){
      this.root = newNode
    } else {
      this.insertHelper(this.root, newNode)
    }
  }

  insertHelper(current, node){
    if (node.value < current.value){
      if(!current.left){
        current.left = node
      } else {
        this.insertHelper(current.left, node)
      }
    } else {
      if (!current.right){
        current.right = node
      } else {
        this.insertHelper(current.right, node)
      }
    }
  }

  contains(value, current = this.root){
    if (!current) return false

    if (value < current.value){
      this.contains(value, current.left)
    } else if (current.value < value) {
      this.contains(value, current.right)
    } else {
      return true
    }
  }

  remove(current = this.root, value){
    if (!current) return null

    if (value < current.value){
      current.left = this.remove(current.left, value)
    }else if (current.value < value) {
      current.right = this.remove(current.right, value)
    }else {
      if (!current.left && !current.right) {
        return null
      } else if (!current.left){
        return current.right
      } else if (!current.right){
        return current.left
      }

      let minRight = this.getMinValue(current.right)
      current.value = minRight.value
      current.right = this.remove(current.right, minRight.value)
    }
    return current
  }

  getMinValue(current){
    while (current.left) {
      current = current.left
    }
    return current
  }

  inorder(){
    console.log(this.inOrder(this.root));
  }

  inOrder(current, result = []){
    if(current){
      this.inOrder(current.left, result)
      result.push(current.value)
      this.inOrder(current.right, result)
    }
  }

  countLeaves(node){
    if (!node) return 0

    if (!node.left && !node.right) return 1

    return this.countLeaves(node.left) + this.countLeaves(node.right)
  }

  findSecLargest(node = this.root){
    if (!node || (!node.right && !node.left)) {
      throw new Error ('Invalid bst')
    }
    
    while(node.right){
      if (node.right && !node.right.left && !node.right.right) return node.value

      node = node.right
    }

    if (node.left){
      return this.larLeft(node.left)
    }

    return node.value
  }

  larLeft(current){
    while(current.right){
      current = current.right
    }
    return current
  }
}

//_________________graph_________________
class Graph {
  constructor(){
    this.graph = {}
  }

  addElement(vertex, edge, bidirectional = false){
    if (!this.graph[vertex]){
      this.addVertex(vertex)
    }

    if (!this.graph[edge]){
      this.addVertex(edge)
    }

    this.graph[vertex].push(edge)
    if (bidirectional){
      this.graph[edge].push(vertex)
    }
  }

  addVertex(vertex){
    this.graph[vertex] = []
  }

  removeElement(  vertex){
    if(!this.graph[vertex]) return null

    while(this.graph[vertex].length){
      let edge = this.graph[vertex].pop()
      this.remove(vertex, edge)
    }

    delete this.graph[vertex]

    for(let key in this.graph){
      this.graph[key] = this.graph[key].filter(edge => edge !== vertex)
    }
  }

  remove(vertex, edge){
    if (this.graph[vertex]){
      this.graph[vertex] = this.graph[vertex].filter(edg => edg !== edge)
    }

    if (this.graph[edge]){
      this.graph[edge] = this.graph[edge].filter(edge => edge !== vertex)
    }
  }

  bfs(){
    let result = []
    let visited = {}

    const bsfFun = (start) => {
      let queue = [start]
      visited[start] = true
      
      while(queue.length){
        let current = queue.shift()
        result.push(current)

        this.graph[current].forEach(other => {
          if (!visited[other]){
            visited[other] = true
            result.push(other)
          }          
        });
      }
    }

    for(let vertex in this.graph){
      if(!visited[vertex]){
        bsfFun(vertex)
      }
    }
    return result
  }

  dfs(){
    let result = []
    let visited = {}

    const dfsFun = (vertex) => {
      if (!vertex) return

      visited[vertex] = true
      result.push(vertex)

      this.graph[vertex].forEach(edge => {
        if (!visited[edge]){
          dfsFun(edge)
        }
      })
    }

    for(let vertex in this.graph){
      if (!visited[vertex]){
        dfsFun(vertex)
      }
    }
    return result
  }
}

const g = new Graph();

g.addElement('A', 'B', true); // Bidirectional edge between A and B
g.addElement('A', 'C', true); // Bidirectional edge between A and C
g.addElement('B', 'D'); // non Bidirectional edge between B and D
g.addElement('D', 'A', true); // Bidirectional edge between D and A

console.log('Before removing vertex A:', g.graph);
console.log('BFS:', g.bfs()); 
console.log('DFS:', g.dfs()); 

g.removeElement('A');
console.log('After removing vertex A:', g.graph);

//________________Trie________________
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

  insert(word){
    let node = this.root

    for(let char of word){
      if(!node.children.has(char)){
        node.children.set(char)
      }
      node = node.children.get(char)
    }
    node.isEnd = true
  }

  search(word){
    let node = this.root

    for(let char of word){
      if (!node.children.has(char)){
        return false
      }
      node = node.children.get(char)
    }
    return node.isEnd
  }

  startsWith(input){
    let node = this.root

    for(let char of input){
      if (!node.children.has(char)){
        return false
      }
      node = node.children.get(char)
    }
    return true
  }

  autosuggest(input){
    let node = this.root

    for (let char of input){
      if(!node.children.has(char)){
        return '...'
      }
      node = node.children.get(char)
    }
    let result = []
    this.collectWords(node, input, result)
    return result
  }

  collectWords(node, input, array){
    if(node.isEnd){
      array.push(input)
    }

    for(let [char, childNode] of node.children){
      this.collectWords(childNode, input + char, array)
    }
  }

}