  function Heap() {
    this.items = [];
  }
  
  Heap.prototype.enqueue = function(item, priority) {
    this.items.push({item: item, priority: priority});
    this.heapifyUp();
  };
  
  Heap.prototype.dequeue = function() {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown();
    return item;
  };
  
  Heap.prototype.heapifyUp = function() {
    var index = this.items.length - 1;
    var parentIndex = Math.floor((index - 1) / 2);
    var item = this.items[index];
    while(index > 0 && this.items[parentIndex].priority > item.priority) {
      this.items[index] = this.items[parentIndex];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    this.items[index] = item;
  };
  
  Heap.prototype.heapifyDown = function() {
    var index = 0;
    var leftChildIndex = 2 * index + 1;
    var rightChildIndex = 2 * index + 2;
    var item = this.items[index];
    while(leftChildIndex < this.items.length) {
      var minIndex = index;
      if(this.items[leftChildIndex].priority < item.priority) {
        minIndex = leftChildIndex;
      }
      if(rightChildIndex < this.items.length && this.items[rightChildIndex].priority < this.items[minIndex].priority) {
        minIndex = rightChildIndex;
      }
      if(minIndex !== index) {
        this.items[index] = this.items[minIndex];
        index = minIndex;
        leftChildIndex = 2 * index + 1;
        rightChildIndex = 2 * index + 2;
      } else {
        break;
      }
    }
    this.items[index] = item;
  };
  
  Heap.prototype.isEmpty = function() {
    return this.items.length === 0;
  };

  const heap = new Heap();
  heap.enqueue(4,3);
  heap.enqueue(5,4);
  heap.enqueue(1,2);
  heap.enqueue(0,1);
  heap.enqueue(7,4);
  console.log(heap.items)