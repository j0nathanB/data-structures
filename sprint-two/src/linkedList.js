var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return (list.head.value + ' ' + list.tail.value);
  };

  list.addNewHead = function(value) {
    var newNode = new Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    else {
      newNode.next = list.head;
      list.head = newNode;
    }
    return (list.head.value);
  };

  list.removeHead = function() {
    var temp = list.head
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    }
    else {
      list.head = list.head.next;
    }
    return temp.value;
  };

  list.contains = function(target) {
    var iterator = list.head
    while (iterator.value !== target) {
      if (iterator === list.tail) {
        return false;
      }
      iterator = iterator.next;
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .addToTail - constant
// .removeHead - constant
// .contains - linear
