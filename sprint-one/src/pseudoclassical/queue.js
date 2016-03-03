var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
    this.storage[this.len++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.len > 0) {
    var item = this.storage[0];

    for (var i = 1; i < this.len; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.len -1];
    this.len--;

    return item;
  }
};

Queue.prototype.size = function() {
    return this.len;
};