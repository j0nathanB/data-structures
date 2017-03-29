var Stack = function() {
	var instanceOf = {'count': 0, 'storage': {}};

	_.extend(instanceOf, stackMethods);

	return instanceOf;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value){
	var thisCount = this.count;
	this.storage[thisCount] = value;
	this.count++;
}

stackMethods.pop = function(){
	var amount = this.count;
	var temp;
	if(this.count > 0) {
		this.count--;
		amount -= 1;
		temp = this.storage[amount];
		delete this.storage[amount];
		return temp;	
	}
}

stackMethods.size = function(){
	return this.count;
}