
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.binaryObjects = {};
    this.iterator = 0;
    this.highestValue = 0;
    this.highestSum = 0;
    this.printArray = this.printArray.bind(this);
    this.printPathRecur = this.printPathRecur.bind(this);
    this.sumofLongestPath = this.sumofLongestPath.bind(this);
    this.push = this.push.bind(this);
  }

  printArray(array) {
    this.iterator++;
    this.binaryObjects[`roll${this.iterator}`] = [];
    for (let i = 0; i < array.length; i++) {
      this.binaryObjects[`roll${this.iterator}`].push(array[i]);
    }
  }

  printPathRecur(node, pathArray = [], pathLen) {
    if (!node) {
      return;
    }
    // pathArray = [];
    /* append this node to the path array */
    pathArray[pathLen] = node.value;
    pathLen++;

    /* it's a leaf, so print the path that led to here */
    if (node.left == null && node.right == null) {
      this.printArray(pathArray, pathLen);
    } else {
      this.printPathRecur(node.left, pathArray, pathLen);
      this.printPathRecur(node.right, pathArray, pathLen);
    }
  }


  sumofLongestPath(pathsObject) {
    Object.keys(pathsObject).forEach((key) => {
      this.highestValue = Math.max(pathsObject[key].length);
    });

    Object.keys(pathsObject).forEach((key) => {
      if (pathsObject[key].length >= this.highestValue) {
        this.highestSum = pathsObject[key].reduce((acc, i) => acc + i, 0);
      }
    });
  }

  push(val) {
    const { root } = this;

    if (!root) {
      this.root = new Node(val);
      return;
    }

    let currentNode = root;
    const newNode = new Node(val);

    while (currentNode) {
      if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = BinarySearchTree;
