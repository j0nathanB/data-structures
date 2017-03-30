var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check length of list
    //if length is null, node becomes head and tail
    //otherwise list.tail = node.value

    //list[value] = new Node(value)
    list.tail = new Node(value);

  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
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
