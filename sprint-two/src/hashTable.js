var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

// Time Complexity: O(1) 
// Best case: O(1)
// Worst case: O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (v !== null) {
    this._size++;
  }

  if (!this._storage.get(i)) {
    this._storage.set(i, [[k, v]]);
  } else {
    var set = false;

    for (var j = 0; j < this._storage.get(i).length; j++) {
      if (this._storage.get(i)[j][0] === k) {
        this._storage.get(i)[j][1] = v;
        set = true;
        break;
      }
    }

    if (!set) {
      this._storage.set(i, this._storage.get(i).concat([[k, v]]));
    }
  } 

  if (this._size > (Math.floor(this._limit * 0.75))) {
    this.resize(this._limit * 2);
  }
};

// Time Complexity: O(n) 
// Best case: O(1)
// Worst case: O(n)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(i)) {
    return undefined;
  } else {
    for (var j = 0; j < this._storage.get(i).length; j++) {
      if (this._storage.get(i)[j][0] === k) {
        return this._storage.get(i)[j][1];
      }
    }
  }
};

// Time Complexity: O(1) 
// Best case: O(1)
// Worst case: O(1)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0; j < this._storage.get(i).length; j++) {
    if (this._storage.get(i)[j][0] === k) {
      this._storage.get(i)[j][1] = null;
      this._size--;
      break;
    }
  }

  if (this._size < (this._limit * 0.25)) {
    this.resize(this._limit / 2);
  }
};

// Time Complexity: O(n) 
// Best case: O(n)
// Worst case: O(n)
HashTable.prototype.resize = function(limit){
  var newStorage = [];

  this._storage.each(function(value) {
    if (value) {
      for (var i = 0; i < value.length; i++) {
        newStorage.push(value[i]);
      }
    }
  });

  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  for (var i = 0; i < newStorage.length; i++) {
    this.insert(newStorage[i][0], newStorage[i][1]);
  }
};

