var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.len = 0;
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.len++] = value;
  },

  pop: function() {
    if (this.len > 0) {
      var item = this.storage[this.len - 1];

      delete this.storage[this.len -1];
      this.len--;

      return item;
    }
  },

  size: function() {
    return this.len;
  }
};


