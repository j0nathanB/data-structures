var Queue = function() {
	this.count = 0;
	this.storage = {};
}

Queue.prototype.enqueue = function(value){
	this.storage[this.count] = value;
	this.count++
}

Queue.prototype.dequeue = function(){
	var temp;
	var lowestKey;

	for(var key in this.storage){
		if(lowestKey === undefined || Number(key) < lowestKey){
			lowestKey = Number(key);
		}
	}
	temp = this.storage[lowestKey];
	delete this.storage[lowestKey];
	return temp;
}

Queue.prototype.size = function() {
	var length = 0;

	for(var key in this.storage){
		length += 1;
	}

	return length;
}

