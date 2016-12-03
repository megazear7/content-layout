var Content = (function() {

    // Do contents have any configuration?
    // For testing purposes only
    this.hello = function() {
        console.log("I'm a content.");
    };

});

content = new Content();
content.hello();
