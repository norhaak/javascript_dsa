var PriorityQueue = function() {
    var collection = [];

    this.printCollection = function() {
        (console.log(collection))
    };

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { // checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };

    // remove the element at the front of the queue
    this.dequeue = function() {
        var value = collection.shift()
        return value[0];
    };

    // print the element at the front of the queue
    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    // check if the queue is empty
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(["Tottenham HotSpurs FC", 3]);
pq.enqueue(["Liverpool FC", 1]);
pq.enqueue(["Manchester City", 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();