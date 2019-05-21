/*
- Draw a BST
Given the data [3, 1, 4, 6, 9, 2, 5, 7]
https://imgur.com/a/cYY9wfl
- From this BST, delete the root and re-draw it
https://imgur.com/a/6wFstXJ

- Draw a BST
Given the data [E, A, S, Y, Q, U, E, S, T, I, O, N]
https://imgur.com/a/rDF3hbZ
- From this BST, delete the root and re-draw it
https://imgur.com/a/bCPFeDd
*/

const binarySearchTree = require('./BinarySearchTree.js');

function main() {
  //bst = new binarySearchTree;

  var arr = [ 0, 1, 2, 3, 4, 5, 6];
  var middle = arr[Math.floor(arr.length / 2)];
  console.log(middle)
}

main()