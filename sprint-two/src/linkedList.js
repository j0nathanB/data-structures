var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check length of list
    //if length is null, node becomes head and tail
    //otherwise list.tail = node.value

    //list[value] = new Node(value)
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

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
    //assign current head's next node as the head 
  };

  list.contains = function(target) {
    //traversing the list means checking to see if there's a next node
    //while there's a next node, check if node.value === target. Return true if so.
    //if target was not found in the while loop, return false
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
