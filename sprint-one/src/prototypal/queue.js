var Queue = function() {
	var obj = Object.create(queueMethods);
	obj.count = 0;
	obj.storage = {};
	return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count++;
}

queueMethods.dequeue = function() {
	var temp;
	var lowestIndex ;
	if (this.count > 0) {
		for (var key in this.storage) {
			if (lowestIndex === undefined || Number(key) < lowestIndex) {
			lowestIndex = Number(key);
			}
		}
	}
	temp = this.storage[lowestIndex];
	delete this.storage[lowestIndex];
	return temp;
}

queueMethods.size = function() {
	var amount = 0;
	for (var key in this.storage) {
		amount++;
	}
	return amount;
}