const BinarySearchTree = require('../models/BinarySearchTree');
/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.postCalculation = (req, res, next) => {
  const reqArray = req.body.payload;
  const bst = new BinarySearchTree();
  reqArray.map(x => bst.push(parseInt(x, 10)));
  bst.printPathRecur(bst.root, pathArray = [], 0);
  bst.sumofLongestPath(bst.binaryObjects);
  console.log(bst.highestSum);

  res.json(bst.highestSum);
};
