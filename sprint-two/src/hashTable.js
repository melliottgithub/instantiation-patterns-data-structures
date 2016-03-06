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

  this._size++;

  if (!this._storage.get(i) || this._storage.get(i).indexOf(k) > -1) {
    this._storage.set(i, [k, v]);
  } else if (this._storage.get(i)) {
    this._storage.set(i, this._storage.get(i).concat([k, v]));
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
    return null;
  }

  return this._storage.get(i)[this._storage.get(i).indexOf(k) + 1];
};

// Time Complexity: O(1) 
// Best case: O(1)
// Worst case: O(1)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(i, [k, null]);
  this._size--;

  if (this._size < (this._limit * 0.35)) {
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
      if (value.length > 3) {
        for (var i = 0; i < value.length - 2; i += 2)
          newStorage.push(value.slice(0, i + 2));
      } else {
        newStorage.push(value);
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

