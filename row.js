var Row = (function() {

    this.nodeType = "container";

    // Do rows have any configuration?
    // For testing purposes
    this.hello = function() {
        console.log("I'm a row");
    };

});

// Example Usage
var myRow = new Row();
myRow.hello();
