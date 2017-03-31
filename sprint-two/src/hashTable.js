

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i <= this._storage.get(index).length - 1; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      };
    }
    var temp = this._storage.get(index);
    temp.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var myGet = this._storage.get(index);
  for (var i = 0; i <= myGet.length - 1; i++) {
    if (myGet[i][0] === k) {
      return myGet[i][1];
    }
  };
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).splice(0);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

