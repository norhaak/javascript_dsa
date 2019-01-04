/* Queues */

var Queue = function() {
    collection = [];
   
    // print the collection
    this.print = function() {
        console.log(collection);
    };

    // push the element to the back of the queue
    this.enqueue = function(elelemt) {
        collection.push(elelemt);
    };

    // remove the element at the front of the queue
    this.dequeue = function() {
        return collection.shift();
    };

    // print the element at the front of the queue
    this.front = function() {
        return collection[0];
    };

    // check if the queue is empty
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
