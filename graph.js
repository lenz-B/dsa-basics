// class Graph {
//   constructor() {
//     this.graph = {}
//   }

//   addElement(vertex, edge, bidirectional = false) {
//     if (!this.graph[vertex]) {
//       this.addVertex(vertex)
//     }

//     if (!this.graph[edge]) {
//       this.addVertex(edge)
//     }

//     this.graph[vertex].push(edge);
//     if (bidirectional) {
//       this.graph[edge].push(vertex)
//     }
//   }

//   addVertex(vertex) {
//     this.graph[vertex] = []
//   }

//   removeElement(vertex) {
//     if (!this.graph[vertex]) return

//     while (this.graph[vertex].length) {
//       const edge = this.graph[vertex].pop()
//       this.removeEdge(vertex, edge)
//     }

//     delete this.graph[vertex]

//     for (let key in this.graph) {
//       this.graph[key] = this.graph[key].filter(edge => edge !== vertex)
//     }
//   }

//   removeEdge(vertex, edge) {
//     if (this.graph[vertex]) {
//       this.graph[vertex] = this.graph[vertex].filter(edg => edg !== edge)
//     }

//     if (this.graph[edge]) {
//       this.graph[edge] = this.graph[edge].filter(vtx => vtx !== vertex)
//     }
//   }

//   bfs(){
//     let result = []
//     let visited = {}

//     const bsfFun = (start) => {
//       const queue = [start]
//       visited[start] = true

//       while (queue.length){
//         const current = queue.shift()
//         result.push(current)

//         this.graph[current].forEach(other => {
//           if (!visited[other]){
//             visited[other] = true
//             queue.push(other)
//           }
//         });
//       }
//     }

//     for (let vertex in this.graph){
//       if (!visited[vertex]){
//         bsfFun(vertex)
//       }
//     }
//     return result
//   }

//   dfs(){
//     let result = []
//     let visited = {}

//     const dfsFun = (vertex) => {
//       if (!vertex) return

//       visited[vertex] = true
//       result.push(vertex)

//       this.graph[vertex].forEach(edge => {
//         if (!visited[edge]){
//           dfsFun(edge)
//         }
//       })
//     }

//     for (let vertex in this.graph){
//       if (!visited[vertex]){
//         dfsFun(vertex)
//       }
//     }
//     return result
//   }
// }

class Graph {
  constructor() {
    this.graph = {}
  }

  addElement(vertex, edge, bidirectional = false) {
    if (!this.graph[vertex]) this.addVertex(vertex)

    if (!this.graph[edge]) this.addVertex(edge)

    this.graph[vertex].push(edge)

    if (bidirectional) this.graph[edge].push(vertex)
  }

  addVertex(vertex) {
    this.graph[vertex] = []
  }

  removeElement(vertex) {
    if (!this.graph[vertex]) return null

    while (this.graph[vertex].length) {
      let edge = this.graph[vertex].pop()
      this.remove(vertex, edge)
    }

    delete this.graph[vertex]

    for (let key in this.graph) {
      this.graph[key] = this.graph[key].filter(edge => edge !== vertex)
    }
  }

  remove(vertex, edge) {
    if (this.graph[vertex]) {
      this.graph[vertex] = this.graph[vertex].filter(edg => edg !== edge)
    }
    if (this.graph[edge]) {
      this.graph[edge] = this.graph[edge].filter(vtx => vtx !== vertex)
    }
  }

  bfs() {
    let results = []
    let visited = {}

    const bfsFun = (start) => {
      const queue = [start]
      visited[start] = true

      while (queue.length) {
        const current = queue.shift()
        results.push(current)

        this.graph[current].forEach(other => {
          if (!visited[other]) {
            visited[other] = true
            results.push(other)
          }
        });
      }
    }

    for (let vertex in this.graph) {
      if (!visited[vertex]) {
        bfsFun(vertex)
      }
    }
    return results
  }

  dfs() {
    let results = []
    let visited = {}

    const dfsFun = (vertex) => {
      if (!vertex) return

      visited[vertex] = true
      results.push(vertex)

      this.graph[vertex].forEach(edge => {
        if (!visited[edge]) {
          dfsFun(edge)
        }
      })
    }

    for (let vertex in this.graph) {
      if (!visited[vertex]) {
        dfsFun(vertex)
      }
    }
    return results
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


//_________________Trie_________________
