var Stack = function() {
  var instanceOf = Object.create(Stack.prototype);
  instanceOf.count = 0;
  instanceOf.storage = {};
  //debugger;
  return instanceOf;
};

var stackMethods = {};

stackMethods.push = function(value){
	var thisCount = this.count;
	this.storage[thisCount] = value;
	this.count++;
}

stackMethods.pop = function(){
	var temp;
	var amount = this.count;

	if(this.count > 0){
		this.count--;
		amount--;
		temp = this.storage[amount];
		delete this.storage[amount];
	}
	return temp;
}

stackMethods.size = function(){
	return this.count;
}


