var Container = (function() {

    // Do containers have any configuration?
    // For testing purposes only
    this.hello = function() {
        console.log("I'm a container");
    };

});

myContainer = new Container();
myContainer.hello();
