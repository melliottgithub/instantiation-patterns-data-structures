var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

// [[[k, v], [k, v]], []]

// Time Complexity: O(1) 
// Best case: O(1)
// Worst case: O(1)
HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i) || [];

  for (var j = 0; j < targetBucket.length; j++) {
    if (targetBucket[j][0] === k) {
      targetBucket[j][1] = v;

      return;
    }
  }

  this._storage.set(i, targetBucket.concat([[k, v]]));
  this._size++;

  if (this._size > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

// Time Complexity: O(n) 
// Best case: O(1)
// Worst case: O(n)
HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i) || [];

  for (var j = 0; j < targetBucket.length; j++) {
    if (targetBucket[j][0] === k) {
      return targetBucket[j][1];
    }
  }

  return null;
};

// Time Complexity: O(1) 
// Best case: O(1)
// Worst case: O(1)
HashTable.prototype.remove = function(k) { 
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i) || [];

  for (var j = 0; j < targetBucket.length; j++) {
    if (targetBucket[j][0] === k) {
      targetBucket.splice(j, 1);
      this._size--;
      break;
    }
  }

  if (this._size < this._limit * 0.25) {
    this.resize(Math.floor(this._limit / 2));
  }
};

// Time Complexity: O(n) 
// Best case: O(n)
// Worst case: O(n)
HashTable.prototype.resize = function(limit) {
  var newStorage = this._storage;

  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  newStorage.each(function(value, index) {
    if (value) {
      for (var i = 0; i < value.length; i++) {
        this.insert(value[i][0], value[i][1]);
      }
    }
  }.bind(this));
};

