

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
// Time Complexity: O(1)
Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Time Complexity: O(1)
Graph.prototype.contains = function(node){
  return this.nodes[node] !== undefined;
};

// ------------------------
// Removes a node from the graph.
// Time Complexity: O(1)
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Time Complexity: O(1)
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodes[fromNode][toNode]) {
    return true;
  }

  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
// Time Complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
// Time Complexity: O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
// Time Complexity: O(n)
Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



