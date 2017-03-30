var Stack = function() {
  this.count = 0;
};

Stack.prototype.push = function(value){
  	this[this.count] = value;
  	this.count++;
  }
Stack.prototype.pop = function(){
  	var temp;
  	var size;
  	if (this.count > 0) {
  		size = this.count - 1;
  		temp = this[size];
  		this.count--;
  		delete this[size];
  	}
  	return temp;
 }
Stack.prototype.size = function() {
  	return this.count;
  }

