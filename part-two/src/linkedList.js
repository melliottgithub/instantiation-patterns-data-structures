var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time Complexity: O(1) 
  // Best case: O(3)
  // Worst case: O(4)
  list.addToTail = function(value) {
    // We will always change our tail
    // to a new node at the very bottom
    var node = Node(value);

    // change the current tail's next to be the
    // node that we are adding, and change the
    // node that we are adding's prev to be
    // the current tail
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
    // it there is no head,
    // make the current tail addition into one
      this.head = node;
    }

    this.tail = node;
  };

  // Time Complexity: O(1) 
  // Best/Worst case: O(2)
  list.removeTail = function() {
    var removingtailValue = this.tail.value;

    // We'll check if we have a previous tail
    // and if yes then we'll make it our new tail.
    // We'll also sever its next to a null
    // If we don't have a previous tail then
    // we'll just set head and tail to a null.
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removingtailValue;
  };

  // Time Complexity: O(1) 
  // Best case: O(3)
  // Worst case: O(4)
  list.addToHead = function(value) {
    // We will always change our head
    // to a new node at the very bottom
    var node = Node(value);

    // We'll check if we currently have a head.
    // If we do then we'll set its previous to
    // our currently adding node. We'll also
    // connect the node that we are adding's
    // next to our current head.
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    } else {
    // it there is no tail,
    // make the current head addition into one
      this.tail = node;
    }

    this.head = node;
  };

  // Time Complexity: O(1) 
  // Best/Worst case: O(5)
  list.removeHead = function() {
    var removingheadValue = this.head.value;

    // We'll check if our current head has a next.
    // If it has then we will make that into
    // our new head and sever its prev into
    // a null. If our current head has no next
    // however then we will just set our tail
    // and head to a null
    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null; 
    }

    return removingheadValue;
  };

  // Time Complexity: O(n)
  list.contains = function(target) {
    // While we have a truthy head then we will
    // just compare it's value to our second
    // parameter which is our target and return
    // true if it matches. If it doesn't then we
    // will just update our head to its next and
    // continue the loop. If we got of our loop
    // being unsuccesful then we'll return false.
    var head = this.head;
    while (head) {
      if (head.value === target) {
        return true;
      }

      head = head.next;
    }

    return false;
  };

  return list;
};

// Time Complexity: O(1)
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
