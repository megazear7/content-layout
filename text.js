var Text = (function(text) {

    this.nodeType = "content";
    this.text = text;

    // For testing purposes
    this.printText = function() {
        console.log(this.text);
    };

});

// Example usage
var myText = new Text("Hello, this could be a paragraph or caption or something.");
myText.printText();
