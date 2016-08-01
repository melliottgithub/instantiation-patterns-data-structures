var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.len++] = value;
};

Stack.prototype.pop = function() {
  if (this.len > 0) {
    var item = this.storage[this.len - 1];

    delete this.storage[this.len - 1];
    this.len--;

    return item;
  }
};

Stack.prototype.size = function() {
  return this.len;
};