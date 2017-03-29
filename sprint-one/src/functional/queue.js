var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var lowestKey;
    var temp;
    for (var key in storage){
      if(lowestKey === undefined || Number(key) < lowestKey){
        lowestKey = Number(key);
      }
    }
    temp = storage[lowestKey];
    delete storage[lowestKey];
    return temp;
  };

  someInstance.size = function() {
    var length = 0;
    for(var key in storage){
      length += 1;
    }
    return length;
  };

  return someInstance;
};
