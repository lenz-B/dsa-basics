// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null
//   }

//   insert(value) {
//     const newNode = new Node(value)

//     if (!this.root) {
//       this.root = newNode
//     } else {
//       this.insertHelper(this.root, newNode)
//     }
//   }

//   insertHelper(current, newNode) {
//     if (newNode.value < current.value) {
//       if (!current.left) {
//         current.left = newNode
//       } else {
//         this.insertHelper(current.left, newNode)
//       }
//     } else {
//       if (!current.right) {
//         current.right = newNode
//       } else {
//         this.insertHelper(current.right, newNode)
//       }
//     }
//   }

//   search(value) {
//     return this.contains(this.root, value)
//   }

//   contains(current, value) {
//     if (!current) return false

//     if (value < current.value) {
//       return this.contains(current.left, value)
//     } else if (current.value < value) {
//       return this.contains(current.right, value)
//     } else {
//       return true
//     }
//   }

//   remove(value) {
//     this.root = this.removeHelper(this.root, value)
//   }

//   removeHelper(current, value) {
//     if (!current) return null

//     if (value < current.value) {
//       current.left = this.removeHelper(current.left, value)
//       return current
//     } else if (current.value < value) {
//       current.right = this.removeHelper(current.right, value)
//       return current
//     } else {
//       if (!current.left && !current.right) {
//         current = null
//         return current
//       }

//       if (!current.right) {
//         current = current.left
//         return current
//       } else if (!current.left) {
//         current = current.right
//         return current
//       }

//       const smallest = this.getMinValue(current.right)
//       current.value = smallest.value
//       current.right = this.removeHelper(current.right, smallest.value)
//     }
//   }

//   getMinValue(node) {
//     if (!node.left) {
//       return node
//     } else {
//       return this.getMinValue(node.left)
//     }
//   }

//   inorder() {
//     console.log(this.inOrder(this.root));
//   }

//   inOrder(node, result = []) {
//     if (node) {
//       this.inOrder(node.left, result)
//       result.push(node.value)
//       this.inOrder(node.right, result)
//     }
//     return result
//   }

//   preorder() {
//     console.log(this.preOrder(this.root))
//   }

//   preOrder(node, result = []) {
//     if (node) {
//       result.push(node.value)
//       this.preOrder(node.left, result)
//       this.preOrder(node.right, result)
//     }
//     return result
//   }

//   postorder(){
//     console.log(this.postOrder(this.root));
//   }

//   postOrder(node, result = []){
//     if(node){
//       this.postOrder(node.left, result)
//       this.postOrder(node.right, result)
//       result.push(node.value)
//     }
//     return result
//   }

//   findClosestValue(target){
//     return this.findClosest(this.root, target, this.root.value)    
//   }

//   findClosest(node, target, closest){
//     if (!node) return closest

//     if (Math.abs(target - node.value) < Math.abs(target - closest)){
//       closest = node.value
//     }

//     if (target < node.value){
//       return this.findClosest(node.left, target, closest)
//     } else if (node.value < target){
//       return this.findClosest(node.right, target, closest)
//     } else {
//       return closest
//     }
//   }

//   isBST(){
//     return this.validateBst(this.root, -Infinity, Infinity)
//   }

//   validateBst(node, min, max){
//     if (!node) return true

//     if (node.value <= min || node.value >= max ) return false

//     return (
//       this.validateBst(node.left, min, node.value) &&
//       this.validateBst(node.right, node.value, max)
//     )
//   }
// }


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    } else {
      this.insertHelper(this.root, newNode)
    }
  }

  insertHelper(current, newNode) {
    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode
      } else {
        this.insertHelper(current.left, newNode)
      }
    } else {
      if (!current.right) {
        current.right = newNode
      } else {
        this.insertHelper(current.right, newNode)
      }
    }
  }

  search(value) {
    return this.contains(this.root, value)
  }

  contains(current, value) {
    if (!current) return false

    if (value < current.value) {
      return this.contains(current.left, value)
    } else if (current.value < value) {
      return this.contains(current.right, value)
    } else {
      return true
    }
  }

  remove(value){
    this.root = this.removeHelper(this.root, value)
  }

  removeHelper(current, value) {
    if (!current) return null

    if (value < current.value) {
      current.left = this.removeHelper(current.left, value)
      return current
    } else if (current.value < value) {
      current.right = this.removeHelper(current.right, value)
      return current
    } else {
      if (!current.left && !current.right) {
        current = null
        return current
      }

      if (!current.right) {
        return current.left
      } else if (!current.left) {
        return current.right
      }

      const smallest = this.getMinValue(current.right)
      current.value = smallest.value
      current.right = this.removeHelper(current.right, smallest.value)
    }
    return current
  }

  getMinValue(current) {
    if (!current.left) return current
    return this.getMinValue(current.left)
  }

  inorder() {
    console.log(this.inOrder(this.root));
  }

  inOrder(node, result = []) {
    if (node) {
      this.inOrder(node.left, result)
      result.push(node.value)
      this.inOrder(node.right, result)
    }
    return result
  }

  preorder() {
    console.log(this.preOrder(this.root));
  }

  preOrder(node, result = []) {
    if (node) {
      result.push(node.value)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }
    return result
  }

  postorder() {
    console.log(this.postOrder(this.root));
  }

  postOrder(node, result = []) {
    if (node) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.value)
    }
    return result
  }

  findClosestValue(target) {
    return this.getClosest(this.root, target, this.root.value)
  }

  getClosest(node, target, closest) {
    if (!node) return closest

    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value
    }

    if (target < node.value) {
      return this.getClosest(node.left, target, closest)
    } else if (node.value < target) {
      return this.getClosest(node.right, target, closest)
    } else {
      return closest
    }
  }

  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true

    if (node.value < min || node.value > max) return false

    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    )
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

console.log("Inorder Traversal: "); // [8, 10, 12, 15, 17, 20, 25]
bst.inorder()
console.log("Preorder Traversal: "); // [15, 10, 8, 12, 20, 17, 25]
bst.preorder()
console.log("Postorder Traversal: "); // [8, 12, 10, 17, 25, 20, 15]
bst.postorder()
console.log("Contains 10: ", bst.contains(10)); // true
console.log("Contains 99: ", bst.contains(99)); // false
bst.remove(20);
console.log("Inorder Traversal after deleting 20: "); // [8, 10, 12, 15, 17, 25]
bst.inorder()
console.log("Closest value to 18: ", bst.findClosestValue(18)); // 17
console.log("Is valid BST: ", bst.isBST()); // true


