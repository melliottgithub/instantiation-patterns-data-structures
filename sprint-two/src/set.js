var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// Time Complexity: O(1)
setPrototype.add = function(item){
  this._storage.push(item);
};

// Time Complexity: O(n)
setPrototype.contains = function(item){
  if (this._storage.indexOf(item) > -1) {
    return true;
  }

  return false;
};

// Time Complexity: O(n)
setPrototype.remove = function(item){
  if (this._storage.indexOf(item) > -1) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
