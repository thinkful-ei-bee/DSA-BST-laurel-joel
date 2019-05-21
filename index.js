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

  // Creat a BST class
  bstNumbers = new binarySearchTree;
  bstAlpha = new binarySearchTree;

  let dataNumeric = [3, 1, 4, 6, 9, 2, 5, 7];
  let dataAlpha = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  
  for (let i = 0; i < dataNumeric.length; i++) {
    bstNumbers.insert(dataNumeric[i], dataNumeric[i]);
  }

  for (let i = 0; i < dataAlpha.length; i++) {
    bstAlpha.insert(dataAlpha[i], dataAlpha[i]);
  }

  //console.log(bstAlpha.find('E'));

  /*
    Q: What does this do?
    A: Adds everything together
    function tree(t){
      if(!t){
          return 0;
      }
      return tree(t.left) + t.value + tree(t.right)
    }
  */

  function tree(t){
    if(!t){
        return 0;
    }
    return t.value + tree(t.left) + tree(t.right);
  }
  // console.log(tree(bstNumbers));

  /*
  Write an algorythm to find the height of a BST. What is the time complexity
  of your algorythm?
  - if tree empty return 0
  - get max depth left recursively
  - get max depth right recursively
  */

  // function height(t, h = 0){
  //   if(!t){
  //       return h;
  //   }
  //   h++;
  //   let left = height(t.left, h);
  //   let right = height(t.right, h);

  //   console.log(h);
    
  // }

  // height(bstNumbers);

  function height(t) {
    //base case
    if(!t) {
      return 0;
    }
    let left = height(t.left);
    let right = height(t.right);
    if (left > right) {
      return left +1;
    } else {
      return right +1;
    }
  }
  //console.log(height(bstNumbers));

  /* Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
  -check to see if its a tree
  */
  // function binTreeSearch(t) {
  //   //base case
  //   if(!t) {
  //     return true;
  //   }
  //   let left = height(t.left);
  //   let right = height(t.right);
  //   if(left !== 0 && t.value >)
  // }

  /* Write an algorithm to find the 3rd largest node in a binary search tree. */
  function thirdLargestNode (t) {
    if(!t.right) {
      return t;
    }
    let right = height(t.right);
    return thirdLargestNode(right);
  }
  console.log(thirdLargestNode(bstNumbers));
}

main()