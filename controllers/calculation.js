const binaryObjects = {
};

let iterator = 0;

const printArray = (array) => {
  iterator++;
  binaryObjects[`roll${iterator}`] = [];
  for (let i = 0; i < array.length; i++) {
    binaryObjects[`roll${iterator}`].push(array[i]);
  }
};

const printPathRecur = (node, pathArray = [], pathLen) => {
  if (!node) {
    return;
  }
  // pathArray = [];
  /* append this node to the path array */
  pathArray[pathLen] = node.value;
  pathLen++;

  /* it's a leaf, so print the path that led to here */
  if (node.left == null && node.right == null) {
    printArray(pathArray, pathLen);
  } else {
    printPathRecur(node.left, pathArray, pathLen);
    printPathRecur(node.right, pathArray, pathLen);
  }
};


const sumofLongestPath = (pathsObject) => {
  let highestValue;

  Object.keys(pathsObject).forEach((key) => {
    highestValue = Math.max(pathsObject[key].length);
  });

  //   for (const key in pathsObject) {
  //     // pathsObjectLength[key] = pathsObject[key].length
  //     highestValue = Math.max(pathsObject[key].length);
  //   }

  Object.keys(pathsObject).forEach((key) => {
    if (pathsObject[key].length >= highestValue) {
      console.log('highest sum', pathsObject[key].reduce((acc, i) => acc + i, 0));
    }
  });

  //   for (const key in pathsObject) {
  //     if (pathsObject[key].length >= highestValue) { console.log('highest sum', pathsObject[key].reduce((acc, i) => acc + i, 0)); }
  //   }
};
exports.postCalculation = (req, res, next) => {
  console.log(req);
  return false;
  printPathRecur(bst.root, pathArray = [], 0);
  sumofLongestPath(binaryObjects);
  console.log(req);
  console.log(res);
  return true;
};
