var Row = (function() {

    // Do rows have any configuration?
    // For testing purposes
    this.hello = function() {
        console.log("I'm a row");
    };

});

// JS version of inheritance
Text.prototype = Container;

var myRow = new Row();
myRow.hello();
