var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } 
}

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true
  } else 
  if (value < this.value){
    if (this.left === null){
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value){
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value)
  if(this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
}

BinarySearchTree.prototype.remove = function(value){
  if(this.left.value === value){
    this.left = null;
    return;
  }  
  if(this.right.value === value) {
    this.right = null;
    return;
  }
  if (value < this.value){
    if (this.left === null){
      return;
    } else {
      return this.left.remove(value);
    }
  } else if (value > this.value){
    if (this.right === null) {
      return false;
    } else {
      return this.right.remove(value);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
   insert, contains are logarithmic
   depthFirst is linear
 */
