

var Node = function (value, prev, next) {
    this.value = value;
    this.previous = prev || null;
    this.next = next || null; 
  };
  
  Node.prototype.append = function(value){
    if (!this.tail) { //if the list isn't empty
      this.head = this.tail = new Node(value);
      //set the head and tail equal to the value that has just been passed
    }else {
      let oldTail = this.tail;
      //the oldTail is now equal to the original value of the tail
      this.tail = new Node(value);
      //this.tail is equal to the value that has been passed from the user. 
      oldTail.next = this.tail;
  
      //the next oldTail is going to be equal to the value that's just been passed
      this.tail.previous = oldTail;
  
      //the oldTail will now be the previous value. 
    }
  }; //1, 2, 3, 4, 5
  
  Node.prototype.prepend = function(value){
    if (!this.tail) {
      this.head = this.tail = new Node(value)
      //if empty then the head is equal to the tail and the node value
    } else {
      let oldHead = this.head;
      this.head = new Node(value); //equal to 6
      oldHead.previous = this.head;//equal to 0
      this.head.next = oldHead;
  
    }
  }//0, 1,2,3,4,5, 6
  
  Node.prototype.search = function(value) {
    let currentNode = this.node;
    while(currentNode) {
      if (currentNode === this.value) {
        return currentNode;
      } else {
        currentNode.next;
      }
      return null; //given that currentNode is being incremented through .next, it will be untrue @ a certain point in time. 
    }
  }
  
  Node.prototype.deleteHead = function(value) {
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head; //removedHead = 1;
      this.head = this.head.next;
      this.head.prev = null;
      return removedHead;
    }
  };//1,2,3,4,5
  
  // Node.prototype.experiment = function(value) {
  //   if (!this.head) {
  //     this.head = this.tail = new Node(value);
  //   } else {
  //     var currentHead = new Node(value);
  //     var oldHead = currentHead.next;
  //     var currentHead = oldHead.previous;
  //   }
  // }
  
  
  let list = new Node();
  
  list.append(1);
  
  list.append(2);
  
  list.append(3);
  
  list.search(3);
  
  Node.prototype.get_values = function() {
    return this.value + this.prev + this.next;
  };
  
  //QUESTION HERE; WHY IS THE VALUE NOT RETURNING; WHY DOESN'T THE EXPERIMENT FUNCTION WORK?
  
  // list.experiment(0.5);
  
  var retrievedValues = Node.get_values;
  
  
  console.log(list);
  
  console.log(retrievedValues);