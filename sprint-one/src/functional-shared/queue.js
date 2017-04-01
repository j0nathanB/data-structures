var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = {count: 0, storage: {}, lowestKey: 0};
  _.extend(instanceOf, queueMethods);
  return instanceOf;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
	var thisCount = this.count;
	this.storage[thisCount] = value;
	this.count++;
}
queueMethods.dequeue = function() {
	
	// for (var key in this.storage) {
	// 	if (lowestKey === undefined || Number(key) < lowestKey) {
	// 		lowestKey = Number(key);
	// 	}
	// }
  if (this.lowestKey === this.count) {
    return;
  } 
	var temp = this.storage[this.lowestKey];
	delete this.storage[this.lowestKey];
  this.lowestKey++;
	return temp;
};
queueMethods.size = function() {
	// var amount = 0;
	// for (var key in this.storage) {
	// 	amount++
	// }

	return this.count - this.lowestKey;
}

