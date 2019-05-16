// import Axios from 'axios';


function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = (val) => {
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
};

const bst = new BinarySearchTree();


function enterValues(e) {
  const { value } = document.getElementById('valuesEntry');
  document.getElementById('valuesEntry').value = '';
  document.getElementById('valuesLabel').innerHTML += value.toString();
  bst.push(value);
}

function enterRootNode(e) {
  console.log('clicked-rootnode');
}


// Axios.post(process.env.BABEL_URL)
