class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {

    // if tree empty this is root node
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    // if tree exist, start at root
    // if less than root go to left
    else if (key < this.key) {

      // if no left children, make new left child
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }

      // if has left child, recursive call to
      // travel down the tree to next child
      else {
        this.left.insert(key, value);
      }

    }

    // if key greater than, go to right
    // same thing on the right
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    
    // jackpot!
    if (this.key == key) {
      return this
    }

    // if key less than, continue searching on left
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }

    // if key greater than, continue searching on right
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }

    // something went wrong, invalid key?
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {

    // if match
    if (this.key == key) {

      // if has both left and right children
      if (this.left && this.right) {

        // go to right, find minimum there
        const successor = this.right._findMin();
        // set current key as successor key
        this.key = successor.key;
        // set value as successor value
        this.value = successor.value;
        // remove
        successor.remove(successor.key);
      }

      // if only left child then replace
      else if (this.left) {
        this._replaceWith(this.left);
      }
  
      // if only right child then replace
      else if (this.right) {
        this._replaceWith(this.right);
      }
  
      // 
      else {
        this._replaceWith(null);
      }
    }

    // if less than go to left and down tree
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }

    // if greater than go to right and down tree
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }

    // this is not the tree you are looking for
    else {
      throw new Error('Key error');
    }    
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  
  
}

module.exports = BinarySearchTree;