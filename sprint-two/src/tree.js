var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.parent = undefined;
  newTree.children = undefined;  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Time Complexity: O(1) 
// Best/Worst case: O(2)
treeMethods.addChild = function(value) {
  var node = Tree(value);

  if (this.children) {
    this.children.push(node);
  } else {
    this.children = [node];
  }
};

// Time Complexity: O(n) 
// Best case: O(4)
// Worst case: O(n+3)
treeMethods.removeFromParent = function(value) {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (value === this.parent.children[i].value) {
      this.parent.children.splice(i, 1);
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
  
  if (this.children !== undefined) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};
