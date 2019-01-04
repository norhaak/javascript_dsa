/* Creates a set */
var mySet = function() {
    // ths var collection will hold the set
    this.collection = [];

    // this method will check the presence of an element and return true or false
    this.has = function(element) {
        return (this.collection.indexOf(element) !== -1);
    };

    // this method will return all values in the set
    this.values = function() {
        return this.collection;
    };

    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    };

    // this method will remove an element from the set
    this.remove = function(element) {
        if (this.has(element)) {
            index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    };

    // this method will return the size of the set
    this.size = function() {
        return this.collection.length;
    };

    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(function(element) {
            unionSet.add(element)
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }; 

    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(element => {
            if(!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    };

    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
setB.add("a");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());