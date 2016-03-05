var BinarySearchTree = function(value){
  binaryTree = Object.create(binaryTreeMethod);
  binaryTree.value = value;
  binaryTree.left = undefined;
  binaryTree.right = undefined;

  return binaryTree;
};

var binaryTreeMethod = {};

binaryTreeMethod.insert = function(value) {
  var childNode = BinarySearchTree(value);

  if (childNode.value < this.value) {
    if (this.left === undefined) {
      this.left = childNode;
    } else {
      this.left.insert(value);
    }
  } else if (childNode.value > this.value) {
    if (this.right === undefined) {
      this.right = childNode;
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethod.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  if (this.left !== undefined && this.left.contains(value)) {
    return true;
  }

  if (this.right !== undefined && this.right.contains(value)) {
    return true;
  }

  return false;
};

binaryTreeMethod.depthFirstLog = function(fn) {
  fn(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(fn);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(fn);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
