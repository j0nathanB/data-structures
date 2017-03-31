// Instantiate a new graph
var Graph = function() {
	// this.node = {};
	//this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this[node] = [node, {}];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	var stringed = node.toString();
  // console.log(this[node]);
	if(this.hasOwnProperty(stringed)) {
    if (this[node][0] === node) {
		  return true;
    }
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var stringed = node.toString()
	if(this.hasOwnProperty(stringed)){
		for(var key in this[node][1]) { 
        if (this.hasEdge(key, node)) {
         this.removeEdge(key, node);
        }    
    }
    delete this[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var stringed = toNode.toString();
  // debugger;
	if(this[fromNode][1].hasOwnProperty(stringed)){
		return true;
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this[fromNode][1][toNode] = toNode;
	this[toNode][1][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this[fromNode][1][toNode];
	delete this[toNode][1][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (Array.isArray(this[key])) {
      cb(this[key][0])
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


