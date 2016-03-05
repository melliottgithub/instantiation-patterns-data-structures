var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Time Complexity: O(1) 
  // Best case: O(3)
  // Worst case: O(5)
  list.addToTail = function(value){
    if (this.tail !== null) {
      var hold = this.tail;
      this.tail.next = Node(value);
      this.tail = this.tail.next;
      this.tail.prev = hold;
    } else {
      this.head = Node(value);
      this.tail = this.head;
    }
  };

  // Time Complexity: O(1) 
  // Best/Worst case: O(5)
  list.removeTail = function(){
    if (this.tail !== this.head) {
      var hold = this.tail.value
      this.tail = this.tail.prev;
      this.tail.next = null;
      return hold;
    } else {
      var hold = this.tail.value
      this.head = null;
      this.tail = null; 
      return hold;
    }
  };

  // Time Complexity: O(1) 
  // Best case: O(3)
  // Worst case: O(5)
  list.addToHead = function(value){
    if (this.head !== null) {
      var hold = this.head;
      this.head.prev = Node(value);
      this.head = this.head.prev;
      this.head.prev = hold;
    } else {
      this.tail = Node(value);
      this.head = this.tail;
    }
  };

  // Time Complexity: O(1) 
  // Best/Worst case: O(5)
  list.removeHead = function(){
    if (this.tail !== this.head) {
      var hold = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
      return hold;
    } else {
      var hold = this.head.value;
      this.head = null;
      this.tail = null; 
      return hold;
    }
  };

  // Time Complexity: O(n)
  list.contains = function(target){
    while(this.head !== null) {
      if (this.head.value === target) {
        return true;
      } 

      this.head = this.head.next;
    }

    return false;
  };

  return list;
};

// Time Complexity: O(1)
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
