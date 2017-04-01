var HashTable = function(limit) {
  this._limit;
  if(limit === undefined) { 
    this._limit = 8;
  } else {
    this._limit = limit;
  }
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var kvPairs = this._storage.get(index);

  if (kvPairs === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i <= kvPairs.length - 1; i++) {
      if (kvPairs[i][0] === k) {
        kvPairs[i][1] = v;
        return;
      }
    }
    kvPairs.push([k,v]);
  }
  
  this._count += 1;

  if(this._count >= (0.75 * this._limit)) {
    this.doubleSize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var myGet = this._storage.get(index);
  
  for (var i = 0; i <= myGet.length - 1; i++) {
    if (myGet[i][0] === k) {
      return myGet[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index)[0][0];
  
  this._storage.get(index).splice(0);
  this._count -= 1;
  
  if (this._count === (this._limit / 4) && this._limit > 8) {
    this.reduceSize();
  }

  return temp;
};

HashTable.prototype.doubleSize = function() {
  var temp = this;
  var oldHash = this._storage;

  this._count = 0;
  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);
  
  oldHash.each(function(value) {  
    if (value !== undefined) {
      for (var i = 0; i <= value.length - 1; i++) {
        var oldKey = value[i][0];
        var oldValue = value[i][1];
        temp.insert(oldKey, oldValue);
      }
    }
  });
};

HashTable.prototype.reduceSize = function() {
  var temp = this;
  var oldHash = this._storage;

  this._count = 0;

  this._limit = this._limit / 2;
  this._storage = LimitedArray(this._limit);
  
  oldHash.each(function(value) {  
    if (value !== undefined) {
      for (var i = 0; i <= value.length - 1; i++) {
        var oldKey = value[i][0];
        var oldValue = value[i][1];
        temp.insert(oldKey, oldValue);
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
   insert = linear (tuples), constant (insertion)
   retrieve = constant
   remove = constant
 */

