var Title = (function(titleText) {

    this.titleText = titleText;

    // For testing purposes
    this.printTitleText = function() {
        console.log(this.titleText);
    };

});

// JS version of inheritance
Text.prototype = Content;

// Example usage
var myTitle = new Title("My Title");
myTitle.printTitleText();

