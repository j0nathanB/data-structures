var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
   if(count > 0) {
    count--;
   } 
   return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
