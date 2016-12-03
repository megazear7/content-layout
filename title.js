var Title = (function(title) {

    this.nodeType = "content";
    this.title = title;

    // For testing purposes
    this.printTitle = function() {
        console.log(this.title);
    };

});

// Example usage
var myTitle = new Title("My Title");
myTitle.printTitle();

