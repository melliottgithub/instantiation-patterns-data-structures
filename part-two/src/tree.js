var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Time Complexity: O(1) 
// Best/Worst case: O(2)
treeMethods.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;

  this.children.push(node);
};

// Time Complexity: O(n) 
// Best case: O(4)
// Worst case: O(n+3)
treeMethods.removeFromParent = function(value) {
  if (this.value === target) {
    return true;
  } 

  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].removeFromParent(value)) {
        this.children.parent = null;
        this.children[i].splice(i, 1);
      }
    }
  }
};

// Time Complexity: O(n) 
// Best case: O(1)
// Worst case: O(n+4)
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};
