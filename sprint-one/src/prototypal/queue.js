var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.len = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.len++] = value;
  },

  dequeue: function() {
    if (this.len > 0) {
      var item = this.storage[0];

      for (var i = 1; i < this.len; i++) {
        this.storage[i - 1] = this.storage[i];
      }

      delete this.storage[this.len -1];
      this.len--;

      return item;
    }
  },

  size: function() {
    return this.len;
  }
};