var Text = (function(text) {

    this.text = text;

    // For testing purposes
    this.printText = function() {
        console.log(this.text);
    };

});

// JS version of inheritance
Text.prototype = Content;

var myText = new Text("Hello, this could be a paragraph or caption or something.");
myText.printText();
