var Node = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    
  };
  
  var BST = function(value) {
    this.root = new Node(value);
    this.count = 0;
  };
  
  BST.prototype = new Node();
  
  
  BST.prototype.count = function(value) {
    return this.count;
  };
  
  BST.prototype.insert = function(value) {
    this.count++;
  
    let newNode = new Node(value);
  
    const SearchTree = node => {
      if (value < node.value) {
        if (!node.value) {
          node.left = newNode;
        } else {
          SearchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          SearchTree(node.right);
        }
      }
    }
    SearchTree(this.root);
  };
  
  BST.prototype.min = function(value) {
    let currentNode = this.root;
  
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  
  const binaryTree = new Node(12);
  const bst = new BST();
  
  bst.insert(10);
  bst.insert(1);
  bst.insert(4);
  bst.insert(7);
  
  bst.min();
  
  console.log(bst);