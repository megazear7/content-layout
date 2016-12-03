var Column = (function(width) {

    this.nodeType = "container";
    this.width = 50;

    // For testing purposes only
    this.printWidth = function() {
        console.log(this.width);
    };

});

// Example Usage
var col50 = new Column(50);
col50.printWidth();



