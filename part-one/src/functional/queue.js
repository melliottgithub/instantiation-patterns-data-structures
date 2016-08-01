var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size++] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var item = storage[0];

      for (var i = 1; i < size; i++) {
        storage[i - 1] = storage[i];
      }

      delete storage[size - 1];
      size--;
      return item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

