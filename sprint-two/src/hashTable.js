var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // var keys = [];

  // this._storage.each(function(item){
  //   if (item) {
  //     keys.push(item);
  //   }
  // });

  this._size++;

  // if (this._size > (Math.floor(this._limit * 0.75))) {
  //   this._limit = this._limit * 2;
  //   this._storage = LimitedArray(this._limit);
  //   this._size = 0;

  //   for (var x = 0; x < keys.length; x++) {
  //     var j = getIndexBelowMaxForKey(keys[x][0], this._limit);
  //     this._storage.set(j, keys[x]);
  //     this._size++;
  //   }
  // }

  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  } else if (this._storage.get(i).indexOf(k) > -1) {
    this._storage.set(i, [k, v]);
  } else if (this._storage.get(i)) {
    this._storage.set(i, this._storage.get(i).concat([k, v]));
  } 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    return null;
  }
  return this._storage.get(i)[this._storage.get(i).indexOf(k) + 1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // var keys = [];

  // this._storage.each(function(item){
  //   if (item) {
  //     keys.push(item);
  //   }
  // });

  this._storage.set(i, [k, null]);
  this.size--;

  // if (this._size < (this._limit * 0.25)) {
  //   this._limit = this._limit / 2;
  //   this._storage = LimitedArray(this._limit);
  //   this._size = 0;

  //   for (var x = 0; x < keys.length; x++) {
  //     var j = getIndexBelowMaxForKey(keys[x][0], this._limit);
  //     this._storage.set(j, keys[x]);
  //     this._size++;
  //   }
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
