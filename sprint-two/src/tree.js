var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
	
  var result = false;
  
  if (this.value === target) {
    result = true;
  }
  
  if(this.children.length > 0){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].value === target){
        result = true;
        return result;
      }
      if(this.children[i].children.length > 0) {
        result = this.children[i].contains(target);
        if (result === true) {
          return true;
        }
      } 
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
