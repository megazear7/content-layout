var Column = (function(width) {

    this.width = 50;

    // For testing purposes only
    this.printWidth = function() {
        console.log(this.width);
    };

});

// JS version of inheritance
Text.prototype = Container;

// Example Usage
var col50 = new Column(50);
col50.printWidth();



